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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white font-semibold text-lg px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                Click to Enlarge
              </span>
            </div>
            {/* Category badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-ocean-600 text-white text-sm font-medium rounded-full shadow-md">
              {image.category}
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
