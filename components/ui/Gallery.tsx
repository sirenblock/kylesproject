'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Full Size
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
