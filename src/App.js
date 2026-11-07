import React, { useState } from "react";

// Bulletproof SVG Icons with fixed physical width/height so they NEVER expand
const Sparkles = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>
);

const ShieldCheck = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Heart = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const Droplet = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-6-1.5-1.6-3-3.2-4-5-1 1.8-2.5 3.4-4 5-2 2.1-3 4-3 6a7 7 0 0 0 7 7Z" />
  </svg>
);

const Sun = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const CheckCircle = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ChevronRight = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Phone = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Mail = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPin = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ minWidth: size, minHeight: size }}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Menu = ({ size = 26, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = ({ size = 26, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    variety: "Ruby Red Dragon Fruit",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
        )
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "dragonfruit-contact", ...formData }),
    })
      .then(() => {
        setLoading(false);
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          variety: "Ruby Red Dragon Fruit",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Submission failed. Please try again.");
        console.error(error);
      });
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#FDFBF7] text-zinc-800 selection:bg-rose-500 selection:text-white"
    >
      {/* ---------------- NAVIGATION ---------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="text-3xl filter drop-shadow">🌺</span>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-rose-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent">
                Nagarao Naidu Organic Farming
              </span>
              <span className="text-[10px] tracking-widest text-emerald-700 font-bold uppercase">
                100% Farm-Direct
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
            <a href="#about" className="hover:text-rose-600 transition">
              About Farm
            </a>
            <a href="#varieties" className="hover:text-rose-600 transition">
              Varieties
            </a>
            <a href="#benefits" className="hover:text-rose-600 transition">
              Nutrition
            </a>
            <a href="#cultivation" className="hover:text-rose-600 transition">
              Cultivation
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 text-white shadow-md shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition transform font-bold text-xs uppercase tracking-wider"
            >
              Order & Inquire
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-700 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-rose-100 px-6 py-4 flex flex-col gap-4 text-zinc-700 font-semibold shadow-xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About Farm
            </a>
            <a href="#varieties" onClick={() => setMobileMenuOpen(false)}>
              Varieties
            </a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>
              Nutrition
            </a>
            <a href="#cultivation" onClick={() => setMobileMenuOpen(false)}>
              Cultivation
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 bg-rose-600 text-white rounded-full font-bold"
            >
              Order & Inquire
            </a>
          </div>
        )}
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        id="about"
        className="pt-32 pb-16 lg:pt-40 lg:pb-28 px-6 relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-white to-[#FDFBF7]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-rose-600" />
              Pesticide-Free • Tree-Ripened • Handpicked
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.12] tracking-tight">
              Sun-Ripened{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500">
                Dragon Fruits
              </span>{" "}
              Directly From Soil.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              Experience the vibrant crunch, deep berry sweetness, and
              antioxidant-rich vitality of 100% naturally grown organic pitayas
              delivered farm-fresh.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg shadow-rose-600/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm"
              >
                Place Farm Inquiry <ChevronRight size={16} />
              </a>
              <a
                href="#varieties"
                className="px-7 py-3.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-semibold rounded-xl shadow-sm hover:shadow transition text-sm"
              >
                Explore Varieties
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-200/80 max-w-md">
              <div>
                <p className="text-2xl font-black text-rose-600">100%</p>
                <p className="text-xs text-zinc-500 font-medium">
                  Certified Organic
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-600">0%</p>
                <p className="text-xs text-zinc-500 font-medium">
                  Chemical Sprays
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-amber-500">24-48h</p>
                <p className="text-xs text-zinc-500 font-medium">
                  Harvest to Doorstep
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=900&q=80"
                alt="Fresh organic sliced dragon fruit"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3">
              <div className="w-11 h-11 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-xs text-zinc-900">
                  Lab-Certified Pure
                </p>
                <p className="text-[11px] text-zinc-500">
                  Zero synthetic residues
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- NUTRITION / BENEFITS ---------------- */}
      <section
        id="benefits"
        className="py-20 px-6 bg-white border-y border-zinc-100"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Superfood Profile
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Nature’s Most Potent Tropical Fruit
            </h2>
            <p className="text-zinc-600 text-sm">
              Beyond its neon scales lies an antioxidant-loaded superfruit
              packed with micronutrients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sparkles size={24} className="text-rose-500" />,
                title: "Rich in Betalains",
                desc: "High anthocyanins and betalains neutralize oxidative stress and support healthy cellular renewal.",
              },
              {
                icon: <Heart size={24} className="text-rose-500" />,
                title: "Heart-Healthy Lipids",
                desc: "Tiny edible black seeds deliver essential Omega-3 and Omega-9 polyunsaturated fatty acids.",
              },
              {
                icon: <Droplet size={24} className="text-emerald-500" />,
                title: "Prebiotic Fiber",
                desc: "Natural prebiotic polysaccharides stimulate beneficial gut flora for enhanced digestion.",
              },
              {
                icon: <Sun size={24} className="text-amber-500" />,
                title: "Immunity & Glow",
                desc: "Loaded with bioavailable Vitamin C, Iron, and Magnesium for clean all-day natural energy.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#FAF9F5] border border-zinc-200/80 hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-200/60 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- VARIETIES ---------------- */}
      <section id="varieties" className="py-20 px-6 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Fresh Harvest
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Our Certified Organic Varieties
            </h2>
            <p className="text-zinc-600 text-sm">
              Available for wholesale crates, local retail delivery, and
              wellness subscription boxes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ruby Red Dragon Fruit",
                botanical: "Hylocereus costaricensis",
                flavor:
                  "Deep crimson pulp, intense berry notes, and full-bodied floral sweetness.",
                sugarLevel: "14-16° Brix",
                image:
                  "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=700&q=80",
                badge: "Best Seller",
              },
              {
                name: "Pearl White Dragon Fruit",
                botanical: "Hylocereus undatus",
                flavor:
                  "Crisp white flesh, delicate melon-pear notes, and a super refreshing bite.",
                sugarLevel: "12-14° Brix",
                image:
                  "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=700&q=80",
                badge: "Crisp & Clean",
              },
              {
                name: "Golden Yellow Dragon Fruit",
                botanical: "Selenicereus megalanthus",
                flavor:
                  "Prized gourmet delicacy with intense nectar-honey sweetness.",
                sugarLevel: "18-20° Brix",
                image:
                  "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=700&q=80",
                badge: "Gourmet Reserve",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-52">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-bold rounded-full bg-white/95 text-rose-600 shadow-sm">
                    {v.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      {v.name}
                    </h3>
                    <p className="text-xs italic text-zinc-400">
                      {v.botanical}
                    </p>
                    <p className="text-zinc-600 text-xs mt-2.5 leading-relaxed">
                      {v.flavor}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {v.sugarLevel}
                    </span>
                    <a
                      href="#contact"
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                    >
                      Inquire Stock <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CULTIVATION ---------------- */}
      <section
        id="cultivation"
        className="py-20 px-6 bg-emerald-950 text-white"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-900/60 border border-emerald-700 px-3 py-1 rounded-full">
              Regenerative Soil
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              Grown With Sunlight, Microorganisms & Natural Compost.
            </h2>
            <p className="text-emerald-200/80 text-sm leading-relaxed">
              Our cacti are grown on sturdy trellis systems with solar
              drip-fertigation powered by organic vermicompost and neem cakes.
              No artificial hormones or chemical pesticides are ever used.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Hand-pollinated blossoms for uniform, dense fruit formation",
                "Tree-ripened to achieve optimal natural Brix sweetness",
                "Solar-powered drip irrigation saving 70% freshwater",
                "Harvested at dawn and dispatched within hours for crisp freshness",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-emerald-100 text-xs sm:text-sm"
                >
                  <CheckCircle size={16} className="text-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80"
              alt="Organic farm trellis"
              className="rounded-2xl h-48 w-full object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80"
              alt="Harvested fruits"
              className="rounded-2xl h-48 w-full object-cover shadow-lg mt-6"
            />
          </div>
        </div>
      </section>

      {/* ---------------- NETLIFY CONTACT FORM ---------------- */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 rounded-3xl border border-zinc-200 shadow-xl overflow-hidden">
            {/* Sidebar */}
            <div className="md:col-span-2 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 p-8 text-white flex flex-col justify-between">
              <div className="space-y-5">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-rose-100 text-xs leading-relaxed">
                  Wholesale orders, farm visits, and retail deliveries. Messages
                  go directly to our orchard team's inbox.
                </p>

                <div className="space-y-3 pt-2 text-xs text-rose-50">
                  <div className="flex items-center gap-3">
                    <Phone size={16} />
                    <span>+91 8333049462</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} />
                    <span>dragonfruitsorganic@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} />
                    <span>Pulletikurru, East Godavari Dst, 533239, India</span>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-8 bg-white">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900">
                    Message Received!
                  </h4>
                  <p className="text-zinc-600 text-xs max-w-xs">
                    Thank you. We have received your inquiry and will contact
                    you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-5 py-2 text-xs font-bold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  name="dragonfruit-contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-3.5"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="dragonfruit-contact"
                  />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <h3 className="text-lg font-bold text-zinc-900">
                    Place an Order / Inquiry
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 90000 00000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Variety of Interest
                      </label>
                      <select
                        name="variety"
                        value={formData.variety}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                      >
                        <option>Ruby Red Dragon Fruit</option>
                        <option>Pearl White Dragon Fruit</option>
                        <option>Golden Yellow Dragon Fruit</option>
                        <option>Mixed Variety Gift Box</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Message / Quantity
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify kg/crates and delivery pincode..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg bg-zinc-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    {loading ? "Sending..." : "Send Direct Farm Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-zinc-950 text-zinc-400 py-10 px-6 border-t border-zinc-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌺</span>
            <span className="font-bold text-white tracking-wider">
              ORGANIC PITAYA FARMS
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} Organic Dragon Fruit. 100% Farm-Direct.
          </p>
          <div className="flex items-center gap-5">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#varieties" className="hover:text-white transition">
              Varieties
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
