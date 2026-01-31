import {
  Waves,
  Dumbbell,
  Users,
  Gamepad2,
  TreeDeciduous,
  Sparkles,
} from "lucide-react";

const facilityCategories = [
  {
    title: "Leisure & Recreation Park",
    icon: TreeDeciduous,
    items: [
      "Hammock Garden",
      "Chillax Terrace",
      "Feature Pavilion",
      "Garden Terrace",
      "Children's Playground",
      "Park Avenue",
      "Play Lawn",
      "Trellis with Swing",
      "Picnic Terrace",
      "Herbs Garden",
      "Stepped Seating",
      "Seating Alcove & Fire Pit",
      "Reflexology Path",
      "Zen Garden",
    ],
  },
  {
    title: "Pool & Aquatic",
    icon: Waves,
    items: [
      "50m Lap Pool",
      "Reflective Pond",
      "Pool Deck",
      "Children's Pool",
      "Bubbler Pool",
      "Poolside Pavilion",
      "Pool Shower",
      "Kid's Pool Slide",
      "Sun Deck",
      "Shallow Lounge Pool",
      "Jacuzzi",
    ],
  },
  {
    title: "Sport & Training",
    icon: Dumbbell,
    items: [
      "Semi Outdoor Fitness",
      "Smart Gym",
      "Gym (Male)",
      "Gym (Female)",
      "Yoga & Meditation Deck",
      "Futsal/Basketball/Takraw Court",
      "Table Tennis Room",
      "Pool Table Room",
    ],
  },
  {
    title: "Wellness & Spa",
    icon: Sparkles,
    items: [
      "Sauna (Male)",
      "Sauna (Female)",
      "Changing Room (Male)",
      "Changing Room (Female)",
      "Anti-Oxidant Room (Male)",
      "Anti-Oxidant Room (Female)",
    ],
  },
  {
    title: "Socialize & Event",
    icon: Users,
    items: [
      "Co-Working + Meeting Lounge",
      "Reading/Study Room",
      "Surau",
      "Open Lounge",
      "Lobby Lounge",
      "Party Room",
      "Baking Room",
      "Multi-Purpose Hall",
      "Party Terrace",
      "BBQ Pavilion & Terrace",
      "Wi-Fi Zone",
    ],
  },
  {
    title: "Entertainment",
    icon: Gamepad2,
    items: [
      "Outdoor Movie Wall",
      "Games Room",
      "Dance Room",
      "Karaoke Room",
    ],
  },
];

const securityFeatures = [
  { name: "RFID Smart Digital", description: "Advanced digital access control system" },
  { name: "Car Plate Recognition", description: "Automated vehicle identification" },
  { name: "24/7 CCTV Surveillance", description: "Round-the-clock monitoring" },
  { name: "Patrolling Security", description: "Regular security patrols" },
  { name: "Access Control Door Lock Set", description: "Secure unit access" },
];

interface AmenitiesSectionProps {
  showHero?: boolean;
}

export function AmenitiesSection({ showHero = false }: AmenitiesSectionProps) {
  return (
    <>
      {showHero && (
        <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                Exclusive Facilities
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Podium Level 9 Amenities
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Experience a new standard of living with over 50 exclusive facilities 
                designed for your wellness, recreation, and entertainment at Podium Level 9.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Facilities Gallery */}
      <section id="amenities" className="py-16 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">
              Exclusive Facilities
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Podium Level 9 Amenities
            </h2>
            <p className="text-muted-foreground">
              Over 50 thoughtfully designed facilities for every lifestyle
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/pool.jpg", alt: "Swimming Pool" },
              { src: "/images/gym.jpg", alt: "Smart Gym" },
              { src: "/images/playground.jpg", alt: "Kids Playground" },
              { src: "/images/court.jpg", alt: "Multipurpose Court" },
              { src: "/images/lawn.jpg", alt: "Lawn Area" },
              { src: "/images/karaoke.jpg", alt: "Karaoke Room" },
              { src: "/images/baking.jpg", alt: "Baking Room" },
              { src: "/images/lap-pool.jpg", alt: "50m Lap Pool" },
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card overflow-hidden"
              >
                <div className="bg-primary p-4 flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-secondary" />
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Tier Security */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">
              Safety First
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Exclusive 5-Tier Security
            </h2>
            <p className="opacity-80">
              Your safety and peace of mind is our top priority
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-primary-foreground/5 rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-bold text-secondary">
                    0{index + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{feature.name}</h4>
                <p className="text-xs opacity-70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
