import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function HeroSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    const slides = [
        {
            id: 1,
            title: 'Wireless Bluetooth Headphones',
            description: 'Experience crystal-clear sound and unmatched comfort with our top-of-the-line Bluetooth headphones.',
            image: 'https://images.unsplash.com/photo-1726137569962-456daf4ec02f',
            buttonText: 'Shop Now',
        },
        {
            id: 2,
            title: 'Smart Home Security Camera',
            description: 'Keep your home safe with our advanced security camera, featuring night vision and motion detection.',
            image: 'https://images.unsplash.com/photo-1726137569962-456daf4ec02f',
            buttonText: 'Learn More',
        },
        {
            id: 3,
            title: 'Ergonomic Office Chair',
            description: 'Upgrade your workspace with our ergonomic chair designed for maximum support and comfort.',
            image: 'https://images.unsplash.com/photo-1726137569962-456daf4ec02f',
            buttonText: 'Buy Now',
        }
    ];

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {slides.map(slide => (
                    <div className="embla__slide relative" key={slide.id}>
                        <img 
                            src={slide.image} 
                            alt={slide.title} 
                            className="slide-image w-full h-[600px] object-cover"
                        />
                        {/* Overlay div moved before the content */}
                        <div className="absolute inset-0 bg-black/20" /> {/* Using the modern opacity syntax */}
                        <div className="slide-content absolute top-1/2 left-16 transform -translate-y-1/2 text-white z-10">
                            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
                            <p className="text-lg mb-6 max-w-lg drop-shadow-lg">{slide.description}</p>
                            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
