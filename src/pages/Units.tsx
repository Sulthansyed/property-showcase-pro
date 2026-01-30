import { Link } from "react-router-dom";
import { ArrowRight, Bed, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const unitTypes = [
  {
    type: "Type A",
    size: "1,054 sq ft (98 m²)",
    rooms: "4 Rooms",
    bathrooms: "3 Bathrooms",
    description: "Spacious 4-bedroom unit perfect for larger families",
  },
  {
    type: "Type B",
    size: "775 sq ft (72 m²)",
    rooms: "3 Rooms",
    bathrooms: "2 Bathrooms",
    description: "Efficient layout ideal for small families",
  },
  {
    type: "Type B1",
    size: "796 sq ft (74 m²)",
    rooms: "3 Rooms",
    bathrooms: "2 Bathrooms",
    description: "Slightly larger variant with optimized space",
  },
  {
    type: "Type B2",
    size: "1,022 sq ft (95 m²)",
    rooms: "3 Rooms",
    bathrooms: "2 Bathrooms",
    description: "Premium 3-bedroom with generous living area",
  },
  {
    type: "Type B3",
    size: "1,054 sq ft (98 m²)",
    rooms: "3 Rooms",
    bathrooms: "2 Bathrooms",
    description: "Largest 3-bedroom configuration available",
  },
  {
    type: "Type C",
    size: "1,054 sq ft (98 m²)",
    rooms: "3 Rooms",
    bathrooms: "2B + 1 Ensuite",
    description: "Premium layout with master ensuite bathroom",
  },
  {
    type: "Type D",
    size: "1,065 sq ft (99 m²)",
    rooms: "3 Rooms",
    bathrooms: "2B + 1 Ensuite",
    description: "Our largest unit with ensuite facilities",
  },
];

const towers = [
  {
    name: "Metro Tower",
    lifts: "3 Passenger Lifts + 1 Service Lift",
  },
  {
    name: "Horizon Tower",
    lifts: "4 Passenger Lifts + 1 Service Lift",
  },
  {
    name: "Apex Tower",
    lifts: "3 Passenger Lifts + 1 Service Lift",
  },
];

export default function Units() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">
              Unit Types
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Horizon Metro Tower
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Choose from 7 thoughtfully designed unit types ranging from 775 to 1,065 sq ft. 
              Each unit comes with flexi layout design and personalized interior design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Tower Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {towers.map((tower, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-card text-center"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {tower.name}
                </h3>
                <p className="text-sm text-muted-foreground">{tower.lifts}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Available Unit Types
            </h2>
            <p className="text-muted-foreground">
              7 unit configurations designed to suit different lifestyle needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitTypes.map((unit, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card overflow-hidden hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="bg-primary p-4">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">
                    {unit.type}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Maximize className="h-5 w-5 text-secondary" />
                      <span className="text-foreground font-medium">{unit.size}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bed className="h-5 w-5 text-secondary" />
                      <span className="text-foreground">{unit.rooms}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bath className="h-5 w-5 text-secondary" />
                      <span className="text-foreground">{unit.bathrooms}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{unit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Pricing Information
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not specified in brochure. Contact our sales team for the latest pricing, 
            promotions, and payment schemes available.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Get Pricing Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Retail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              14th Avenue - Retail Shop Lots
            </h2>
            <p className="text-muted-foreground">
              Commercial opportunities at The Shah Alam
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <h3 className="font-display text-3xl font-bold text-primary mb-2">13</h3>
              <p className="text-muted-foreground">2-Storey Retail Shop Lots</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <h3 className="font-display text-3xl font-bold text-primary mb-2">11</h3>
              <p className="text-muted-foreground">3-Storey Retail Shop Lots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Design */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                Personalized Solutions
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Interior Design Solutions
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Benefit from developer bulk purchase deals compared to individual purchases 
                  with our personalized interior design solutions.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Cost-effective bulk purchase deals",
                  "Increased rental potential and yield",
                  "Move-in ready conditions",
                  "Expert space optimization",
                  "Flexi layout design options",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/living-room.jpg"
                alt="Living Room Interior"
                className="rounded-lg shadow-elevated w-full aspect-[4/5] object-cover"
              />
              <img
                src="/images/master-bedroom.jpg"
                alt="Master Bedroom Interior"
                className="rounded-lg shadow-elevated w-full aspect-[4/5] object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
