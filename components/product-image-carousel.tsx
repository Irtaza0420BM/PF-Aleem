'use client'

import * as React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

interface ProductImage {
  url: string
  altText: string | null
}

interface ProductImageCarouselProps {
  images: ProductImage[]
  productTitle: string
}

export function ProductImageCarousel({ images, productTitle }: ProductImageCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  if (images.length === 0) {
    return (
      <div className="aspect-square relative bg-zinc-900 rounded-lg overflow-hidden border-2 border-yellow-400">
        <div className="flex items-center justify-center h-full text-white">
          No images available
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Carousel */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square relative bg-zinc-900 rounded-lg overflow-hidden border-2 border-yellow-400">
                <Image
                  src={image.url || '/placeholder.svg'}
                  alt={image.altText || `${productTitle} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-4 bg-yellow-400 hover:bg-yellow-500 text-black border-none" />
            <CarouselNext className="right-4 bg-yellow-400 hover:bg-yellow-500 text-black border-none" />
          </>
        )}
      </Carousel>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'aspect-square relative bg-zinc-900 rounded-lg overflow-hidden border-2 transition-all cursor-pointer hover:border-yellow-400',
                current === index ? 'border-yellow-400 ring-2 ring-yellow-400' : 'border-zinc-700'
              )}
            >
              <Image
                src={image.url || '/placeholder.svg'}
                alt={image.altText || `${productTitle} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
