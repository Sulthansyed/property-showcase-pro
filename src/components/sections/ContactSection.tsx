import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

interface ContactSectionProps {
  showHero?: boolean;
}

export function ContactSection({ showHero = false }: ContactSectionProps) {
  return (
    <>
      {showHero && (
        <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                Get In Touch
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Ready to find your dream home? Contact our sales team for exclusive 
                updates, priority viewing, and special early-bird pricing.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Info & Form */}
      <section id="contact" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                Get In Touch
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Sales Gallery
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Seksyen 14, Shah Alam,<br />
                      Selangor, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+60123456789" className="text-muted-foreground hover:text-primary transition-colors">
                      +60 12-345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@astrumshahalam.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@astrumshahalam.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Operating Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 10:00 AM - 6:00 PM<br />
                      <span className="text-sm">(By appointment)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Developer Info */}
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Developer</h4>
                <p className="text-muted-foreground mb-2">
                  <strong>Astrum Shah Alam Sdn Bhd</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  A subsidiary of Setia Awan - Making Dreams Possible
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-elevated">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Register Your Interest
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill in the form below to receive exclusive updates, priority viewing, 
                and special early-bird pricing.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="+60 12-345 6789"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                    Unit Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select unit type...</option>
                    <option value="typeA">Type A - 4R3B (1,054 sq ft)</option>
                    <option value="typeB">Type B - 3R2B (775 sq ft)</option>
                    <option value="typeB1">Type B1 - 3R2B (796 sq ft)</option>
                    <option value="typeB2">Type B2 - 3R2B (1,022 sq ft)</option>
                    <option value="typeB3">Type B3 - 3R2B (1,054 sq ft)</option>
                    <option value="typeC">Type C - 3R2B+1E (1,054 sq ft)</option>
                    <option value="typeD">Type D - 3R2B+1E (1,065 sq ft)</option>
                    <option value="retail">Retail Shop Lot</option>
                    <option value="undecided">Not Sure Yet</option>
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to receive marketing communications from Astrum Shah Alam. 
                    I understand I can unsubscribe at any time.
                  </label>
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full">
                  Submit Enquiry
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h4 className="font-semibold text-foreground mb-4">Disclaimer</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All information, specifications, renderings, and illustrations contained in this website 
            are subject to change without prior notice. The developer reserves the right to make 
            alterations without notification. All images shown are artist's impressions and renderings. 
            Actual product may differ.
          </p>
        </div>
      </section>
    </>
  );
}
