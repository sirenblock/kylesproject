'use client'

import { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon, AlertCircle } from 'lucide-react'

interface PhotoUploadProps {
  onPhotosChange: (photos: string[]) => void
  maxPhotos?: number
  maxSizeMB?: number
}

export default function PhotoUpload({
  onPhotosChange,
  maxPhotos = 5,
  maxSizeMB = 5,
}: PhotoUploadProps) {
  const [photos, setPhotos] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setError(null)

    // Check total count
    if (photos.length + files.length > maxPhotos) {
      setError(`Maximum ${maxPhotos} photos allowed`)
      return
    }

    const newPhotos: string[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError(`${file.name} is not an image file`)
        continue
      }

      // Validate file size
      const sizeMB = file.size / (1024 * 1024)
      if (sizeMB > maxSizeMB) {
        setError(`${file.name} is too large (max ${maxSizeMB}MB)`)
        continue
      }

      // Convert to base64
      try {
        const base64 = await fileToBase64(file)
        newPhotos.push(base64)
      } catch (error) {
        console.error('Error reading file:', error)
        setError('Failed to read image file')
      }
    }

    if (newPhotos.length > 0) {
      const updatedPhotos = [...photos, ...newPhotos]
      setPhotos(updatedPhotos)
      onPhotosChange(updatedPhotos)
    }
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const removePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index)
    setPhotos(updatedPhotos)
    onPhotosChange(updatedPhotos)
    setError(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileSelect(e.dataTransfer.files)
  }

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => photos.length < maxPhotos && fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
          transition-all duration-200
          ${isDragging
            ? 'border-ocean-500 bg-ocean-50'
            : 'border-sand-300 hover:border-ocean-400 hover:bg-sand-50'
          }
          ${photos.length >= maxPhotos ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
          disabled={photos.length >= maxPhotos}
        />

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center">
            <Upload className="w-6 h-6" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-800">
              {photos.length >= maxPhotos
                ? `Maximum ${maxPhotos} photos uploaded`
                : 'Drop photos here or click to browse'}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              JPG, PNG, WEBP up to {maxSizeMB}MB ({photos.length}/{maxPhotos} uploaded)
            </p>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Photo Previews */}
      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group aspect-square rounded-lg overflow-hidden bg-sand-100 border border-sand-200"
            >
              <img
                src={photo}
                alt={`Upload ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Remove Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  removePhoto(index)
                }}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                aria-label="Remove photo"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Photo Number */}
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-slate-900/70 text-white text-xs font-medium">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Help Text */}
      {photos.length === 0 && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-ocean-50 border border-ocean-200">
          <ImageIcon className="w-5 h-5 text-ocean-600 shrink-0 mt-0.5" />
          <p className="text-sm text-ocean-800">
            Photos help us provide more accurate quotes. Include images showing the volume and type of items to be removed.
          </p>
        </div>
      )}
    </div>
  )
}
