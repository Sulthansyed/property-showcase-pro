import { MapPin, Clock, Building2, GraduationCap, Stethoscope, Landmark } from "lucide-react";

const highways = [
  { name: "LKSA (Kemuning - Shah Alam Highway)", distance: "300m", destinations: "Alam Impian, Kota Kemuning" },
  { name: "FEDERAL (Federal Highway)", distance: "800m", destinations: "Kuala Lumpur" },
  { name: "NNKSB (New North Klang Straits Bypass)", distance: "6.6km", destinations: "Port Klang, Meru, West Coast Express" },
  { name: "KESAS (Shah Alam Expressway)", distance: "6.6km", destinations: "Bandar Botanik, Kota Kemuning, Subang Jaya" },
  { name: "GCE (Guthrie Corridor Expressway)", distance: "7.8km", destinations: "KLIA, Klang, Bukit Jelutong, Rawang" },
  { name: "NKVE (New Klang Valley Expressway)", distance: "8.2km", destinations: "Subang, Setia Alam, Kota Damansara" },
  { name: "ELITE (N-S Expressway Central Link)", distance: "10km", destinations: "Subang Jaya, USJ, Putrajaya, KLIA" },
  { name: "WCE (West Coast Expressway)", distance: "12km", destinations: "Kuala Selangor, Kapar" },
  { name: "DASH (Damansara-Shah Alam Elevated)", distance: "16km", destinations: "Rawang, Bandar Utama, Ara Damansara" },
];

const nearbyPlaces = {
  leisure: [
    { name: "SACC Mall", distance: "140m" },
    { name: "PKNS Complex", distance: "350m" },
    { name: "Taman Tasik Shah Alam", distance: "350m" },
    { name: "Plaza Alam Sentral", distance: "550m" },
    { name: "Wet World Water Park", distance: "1km" },
    { name: "Lotus's Shah Alam", distance: "4km" },
  ],
  education: [
    { name: "Dwi Emas International School", distance: "400m" },
    { name: "UiTM", distance: "2km" },
    { name: "SMK Seksyen 9", distance: "2.9km" },
    { name: "UNISEL", distance: "4km" },
    { name: "MSU", distance: "6km" },
  ],
  healthcare: [
    { name: "Avisena Hospital", distance: "4km" },
    { name: "SALAM Hospital", distance: "4km" },
    { name: "KPJ Hospital", distance: "5km" },
    { name: "Hospital Shah Alam", distance: "Nearby" },
  ],
};

const travelTimes = [
  { destination: "Klang", time: "12 mins" },
  { destination: "Sunway", time: "20 mins" },
  { destination: "USJ", time: "20 mins" },
  { destination: "Kota Kemuning", time: "15 mins" },
  { destination: "KL City", time: "35 mins" },
];

interface LocationSectionProps {
  showHero?: boolean;
}

export function LocationSection({ showHero = false }: LocationSectionProps) {
  return (
    <>
      {showHero && (
        <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <p className="text-secondary font-medium tracking-widest uppercase mb-4">
                Strategic Location
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Seksyen 14, Shah Alam
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Situated in the Golden Triangle connecting Shah Alam to Petaling Jaya, 
                Klang, Puchong, and Subang. Accessible via 9 major highways with the 
                Dato' Menteri LRT station right at your doorstep.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Travel Times */}
      <section id="location" className="py-12 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">
              Strategic Location
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seksyen 14, Shah Alam
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {travelTimes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-card"
              >
                <Clock className="h-5 w-5 text-secondary" />
                <span className="font-medium text-foreground">{item.time}</span>
                <span className="text-muted-foreground">to {item.destination}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Doorstep LRT Connectivity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Experience complete urban connectivity with the Dato' Menteri LRT 3 station 
                located next to Astrum Shah Alam, offering you the freedom to explore the 
                extended city area without limits.
              </p>
              <div className="bg-secondary/10 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-foreground mb-4">LRT Connectivity</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">3</span>
                    <span className="text-foreground">Stops to LRT Kelana Jaya Line</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">8</span>
                    <span className="text-foreground">Stops to MRT Kajang Line</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/connectivity.jpg"
                alt="Astrum Shah Alam Connectivity Map"
                className="rounded-lg shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highway Access */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              9 Major Highway Access
            </h2>
            <p className="opacity-80">
              Unparalleled connectivity to all major destinations in the Klang Valley
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-primary-foreground/20">
                  <th className="text-left py-4 px-4 font-semibold">Highway</th>
                  <th className="text-left py-4 px-4 font-semibold">Distance</th>
                  <th className="text-left py-4 px-4 font-semibold">Key Destinations</th>
                </tr>
              </thead>
              <tbody>
                {highways.map((highway, index) => (
                  <tr key={index} className="border-b border-primary-foreground/10">
                    <td className="py-4 px-4">{highway.name}</td>
                    <td className="py-4 px-4">
                      <span className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full">
                        {highway.distance}
                      </span>
                    </td>
                    <td className="py-4 px-4 opacity-80">{highway.destinations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nearby Landmarks & Facilities
            </h2>
            <p className="text-muted-foreground">
              Everything you need is within reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-card overflow-hidden">
              <div className="bg-primary p-4 flex items-center gap-3">
                <Building2 className="h-5 w-5 text-secondary" />
                <h3 className="font-semibold text-primary-foreground">Leisure & Shopping</h3>
              </div>
              <div className="p-6 space-y-2">
                {nearbyPlaces.leisure.map((place, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-foreground">{place.name}</span>
                    <span className="text-secondary font-medium">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-card overflow-hidden">
              <div className="bg-primary p-4 flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-secondary" />
                <h3 className="font-semibold text-primary-foreground">Education</h3>
              </div>
              <div className="p-6 space-y-2">
                {nearbyPlaces.education.map((place, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-foreground">{place.name}</span>
                    <span className="text-secondary font-medium">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-card overflow-hidden">
              <div className="bg-primary p-4 flex items-center gap-3">
                <Stethoscope className="h-5 w-5 text-secondary" />
                <h3 className="font-semibold text-primary-foreground">Healthcare</h3>
              </div>
              <div className="p-6 space-y-2">
                {nearbyPlaces.healthcare.map((place, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-foreground">{place.name}</span>
                    <span className="text-secondary font-medium">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
