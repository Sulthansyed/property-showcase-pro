import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Building2, Shield, Ruler, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AboutSection } from "@/components/sections/AboutSection";
import { UnitsSection } from "@/components/sections/UnitsSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 text-primary-foreground">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">
              Serviced Apartments in Shah Alam
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your H.O.M.E Right in the Centre of Shah Alam
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8 max-w-2xl">
              Welcome to Astrum, a vibrant mixed-use community that seamlessly blends 
              residential, commercial, and recreational spaces. With the Dato' Menteri 
              LRT station right at your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Register Interest
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#units">View Units</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: "Total Units", value: "1,252" },
                { label: "Blocks", value: "3" },
                { label: "Floors", value: "32" },
                { label: "Land Size", value: "3.47 Acres" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H.O.M.E Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="text-secondary">H</span>armony · <span className="text-secondary">O</span>asis · <span className="text-secondary">M</span>odernisation · <span className="text-secondary">E</span>nclave
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A prime, mature, and well-planned exclusive township nestled in 106 acres of lush greenery 
              at Taman Tasik Shah Alam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Harmony",
                description: "Golden Triangle Shah Alam - Catalyst development kickstarting a new era",
                icon: Building2,
              },
              {
                title: "Oasis",
                description: "Nestled in 106 acres of lush greenery at Taman Tasik Shah Alam",
                icon: MapPin,
              },
              {
                title: "Modernisation",
                description: "Exclusive 5-tier security with flexi layout design and personalized interior solutions",
                icon: Shield,
              },
              {
                title: "Enclave",
                description: "Vibrant eatery boulevard connected to all your living conveniences",
                icon: Ruler,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Units Section */}
      <UnitsSection />

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Key Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                Why Choose Astrum
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic Location with Unmatched Connectivity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Situated in the Golden Triangle connecting Shah Alam to Petaling Jaya, Klang, 
                Puchong, and Subang. Accessible via 9 major highways with the Dato' Menteri 
                LRT station right at your doorstep.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Doorstep LRT - Dato' Menteri Station",
                  "Accessible via 9 Major Highways",
                  "12 mins to Klang | 20 mins to Sunway",
                  "35 mins to KL City Centre",
                  "Close to UiTM, MSU & UNISEL",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="teal" size="lg" asChild>
                <a href="#location">
                  Explore Location
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="relative">
              <img
                src="/images/location-map.jpg"
                alt="Astrum Shah Alam Location Map"
                className="rounded-lg shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-elevated">
                <div className="flex items-center gap-3">
                  <Train className="h-8 w-8" />
                  <div>
                    <p className="font-display text-2xl font-bold">20m</p>
                    <p className="text-sm opacity-90">to LRT Station</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* The Shah Alam - Retail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/retail-1.jpg"
                  alt="The Shah Alam Retail"
                  className="rounded-lg shadow-elevated w-full aspect-[4/5] object-cover"
                />
                <img
                  src="/images/retail-2.jpg"
                  alt="Eatery Boulevard"
                  className="rounded-lg shadow-elevated w-full aspect-[4/5] object-cover mt-8"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                The Shah Alam
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vibrant Eatery Boulevard
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Satisfy your cravings at the vibrant eatery boulevard. Where vibrant retail 
                alfresco vibes meet a Halal-friendly eatery boulevard, fresh market finds, 
                a lively bazaar, enticing F&B cafes, and dynamic co-working spaces.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "HALAL Friendly Eatery Boulevard",
                  "Fresh Market & Bazaar",
                  "F&B Cafes & Restaurants",
                  "Co-Working Spaces",
                  "2-3 Storey Retail Shop Lots",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="teal" size="lg" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Find Your Dream Home?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Register your interest today to receive exclusive updates, priority viewing, 
                  and special early-bird pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gold" size="lg" asChild>
                    <Link to="/contact">
                      Register Interest
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#units">View Unit Types</a>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/images/building.jpg"
                  alt="Astrum Shah Alam Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
