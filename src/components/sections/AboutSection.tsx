import { Building2, Award, Users, Target } from "lucide-react";

interface AboutSectionProps {
  showHero?: boolean;
}

export function AboutSection({ showHero = false }: AboutSectionProps) {
  return (
    <>
      {showHero && (
        <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                About The Project
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Astrum Shah Alam
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Your H.O.M.E right in the centre of Shah Alam. A vibrant mixed-use community 
                that seamlessly blends residential, commercial, and recreational spaces.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Project Overview */}
      <section id="about" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                About The Project
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A New Standard of Urban Living
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Astrum, a vibrant mixed-use community in the heart of Shah Alam 
                  that seamlessly blends residential, commercial, and recreational spaces. 
                  With the Dato' Menteri LRT station right at your doorstep, Astrum offers 
                  a modern urban lifestyle for all.
                </p>
                <p>
                  Strategically located in the Golden Triangle of Shah Alam, Astrum serves as 
                  a catalyst development kickstarting a new era of urban living. The project 
                  connects Shah Alam to Petaling Jaya, Klang, Puchong, and Subang, making it 
                  the perfect choice for professionals and families alike.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/oasis.jpg"
                alt="Astrum Shah Alam Oasis"
                className="rounded-lg shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Facts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Fact Sheet
            </h2>
            <p className="text-muted-foreground">
              Horizon Metro Tower - Premium serviced apartments in the heart of Shah Alam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Developer", value: "Astrum Shah Alam Sdn Bhd" },
              { label: "Land Size", value: "3.47 Acres" },
              { label: "Development Type", value: "Serviced Apartment" },
              { label: "Land Tenure", value: "Leasehold" },
              { label: "Number of Blocks", value: "3" },
              { label: "Number of Floors", value: "32" },
              { label: "Total Units", value: "1,252" },
              { label: "Car Parks", value: "1 Per Unit" },
            ].map((fact, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-card text-center"
              >
                <p className="text-sm text-muted-foreground mb-2">{fact.label}</p>
                <p className="font-display text-lg font-semibold text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/developer.jpg"
                alt="Setia Awan Developer"
                className="rounded-lg shadow-elevated w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                The Developer
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Setia Awan
              </h2>
              <p className="text-xl text-secondary font-medium mb-4">
                Making Dreams Possible
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Setia Awan was built on the premise that every person should have a home 
                  of their own. When we began life in Perak two decades ago, our founders 
                  made a promise: to help home buyers by building and delivering high quality 
                  properties that enhance their lives.
                </p>
                <p>
                  Today, we are proud to be one of the leading players in property development, 
                  construction, healthcare, retail and commercial, plantations and real estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Commitment
            </h2>
            <p className="opacity-80">
              Built on a foundation of quality, innovation, and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Quality Construction",
                description: "High-quality properties built with premium materials and expert craftsmanship",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Two decades of experience delivering successful projects across Malaysia",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Dedicated to enhancing the lives of homebuyers through exceptional service",
              },
              {
                icon: Target,
                title: "Innovation Driven",
                description: "Continuously evolving to deliver market-driven products and services",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
