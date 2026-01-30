import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl font-bold">Astrum</h3>
              <p className="text-sm opacity-80 tracking-widest uppercase">Shah Alam</p>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your H.O.M.E right in the centre of Shah Alam. A vibrant mixed-use community 
              that seamlessly blends residential, commercial, and recreational spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Project", href: "/about" },
                { name: "Unit Types", href: "/units" },
                { name: "Facilities", href: "/amenities" },
                { name: "Location", href: "/location" },
                { name: "Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">
                  Seksyen 14, Shah Alam,<br />
                  Selangor, Malaysia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-80" />
                <a href="tel:+60123456789" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  +60 12-345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-80" />
                <a href="mailto:info@astrumshahalam.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  info@astrumshahalam.com
                </a>
              </li>
            </ul>
          </div>

          {/* Developer */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Developer</h4>
            <div className="space-y-2">
              <p className="text-sm font-medium">Setia Awan</p>
              <p className="text-sm opacity-80">
                Astrum Shah Alam Sdn Bhd
              </p>
              <p className="text-xs opacity-60 mt-4">
                Licensed Developer since 2003
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © 2024 Astrum Shah Alam. All rights reserved.
            </p>
            <p className="text-xs opacity-40 text-center md:text-right max-w-lg">
              Disclaimer: All information, specifications, renderings, and illustrations are subject to change 
              without prior notice. The developer reserves the right to make alterations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
