import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/images/hero.jpg", alt: "Astrum Shah Alam Exterior", category: "Exterior" },
  { src: "/images/building.jpg", alt: "Building Facade", category: "Exterior" },
  { src: "/images/oasis.jpg", alt: "Oasis View", category: "Exterior" },
  { src: "/images/enclave.jpg", alt: "The Shah Alam Enclave", category: "Retail" },
  { src: "/images/retail-1.jpg", alt: "Retail Boulevard", category: "Retail" },
  { src: "/images/retail-2.jpg", alt: "Eatery Boulevard", category: "Retail" },
  { src: "/images/pool.jpg", alt: "Swimming Pool", category: "Facilities" },
  { src: "/images/lap-pool.jpg", alt: "50m Lap Pool", category: "Facilities" },
  { src: "/images/gym.jpg", alt: "Smart Gym", category: "Facilities" },
  { src: "/images/playground.jpg", alt: "Kids Playground", category: "Facilities" },
  { src: "/images/living-room.jpg", alt: "Living Room", category: "Interior" },
  { src: "/images/master-bedroom.jpg", alt: "Master Bedroom", category: "Interior" },
];

const categories = ["All", "Exterior", "Facilities", "Interior", "Retail"];

interface GallerySectionProps {
  showHero?: boolean;
}

export function GallerySection({ showHero = false }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      {showHero && (
        <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                Visual Experience
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Project Gallery
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Explore the stunning visuals of Astrum Shah Alam - from architectural 
                renders to interior designs and world-class facilities.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section id="gallery" className="py-8 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">
              Visual Experience
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Gallery
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-primary-foreground font-medium text-sm">{image.alt}</p>
                    <p className="text-secondary text-xs">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery Image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
