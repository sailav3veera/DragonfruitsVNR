import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Truck, 
  Sun, 
  Droplet, 
  Award, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    variety: 'Ruby Red Dragon Fruit',
    subject: 'Wholesale / Retail Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles Netlify form POST request
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'dragonfruit-contact', ...formData })
    })
      .then(() => {
        setLoading(false);
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          variety: 'Ruby Red Dragon Fruit',
          subject: 'Wholesale / Retail Inquiry',
          message: ''
        });
      })
      .catch((error) => {
        setLoading(false);
        alert('Submission failed. Please try again or email directly.');
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-zinc-900 font-sans selection:bg-rose-500 selection:text-white">
      {/* ---------------- NAVIGATION ---------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-3xl transform group-hover:rotate-12 transition-transform duration-300">
              🌺
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-rose-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent">
                ORGANIC PITAYA
              </span>
              <span className="text-[10px] tracking-widest text-emerald-700 font-bold uppercase">
                100% Farm Fresh
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
            <a href="#about" className="hover:text-rose-600 transition">About Farm</a>
            <a href="#varieties" className="hover:text-rose-600 transition">Varieties</a>
            <a href="#benefits" className="hover:text-rose-600 transition">Nutrition</a>
            <a href="#process" className="hover:text-rose-600 transition">Cultivation</a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 text-white shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transition transform"
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-rose-100 px-6 py-4 flex flex-col gap-4 text-zinc-700 font-semibold shadow-xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Farm</a>
            <a href="#varieties" onClick={() => setMobileMenuOpen(false)}>Varieties</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>Nutrition</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>Cultivation</a>
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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 relative overflow-hidden bg-gradient-to-b from-rose-50/60 via-white to-[#FAFAF8]">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-rose-600" />
              Pesticide-Free • Naturally Grown • Hand-Harvested
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.15] tracking-tight">
              Sun-Ripened <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500">Dragon Fruits</span> Delivered Fresh From Soil.
            </h1>

            <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
              Experience the vibrant crunch, intense sweetness, and antioxidant-packed vitality of sustainably grown organic pitayas harvested directly from our regenerative orchards.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-xl shadow-rose-600/30 hover:shadow-rose-600/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                Direct Farm Order <ChevronRight size={18} />
              </a>
              <a 
                href="#varieties" 
                className="px-8 py-4 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-semibold rounded-2xl shadow-sm hover:shadow transition"
              >
                Browse Harvest
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-200/80 max-w-md">
              <div>
                <p className="text-2xl font-black text-rose-600">100%</p>
                <p className="text-xs text-zinc-500 font-medium">Certified Organic</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-600">Zero</p>
                <p className="text-xs text-zinc-500 font-medium">Chemical Pesticides</p>
              </div>
              <div>
                <p className="text-2xl font-black text-amber-500">24-48h</p>
                <p className="text-xs text-zinc-500 font-medium">Farm to Doorstep</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-4 border-white transform group-hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=1000&q=80" 
                alt="Fresh organic red dragon fruit cut open" 
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="px-3 py-1 bg-emerald-500 text-xs font-bold rounded-md uppercase tracking-wider mb-2 inline-block">
                    Current Season Crop
                  </span>
                  <h3 className="text-2xl font-bold">Grade-A Royal Red & Pearl White</h3>
                  <p className="text-zinc-200 text-sm">Crisp flesh, floral aroma, & nutrient-dense seeds.</p>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3">
              <div className="w-12 h-12 bg-rose-500/10 text-rose-600 rounded-xl flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="font-bold text-sm text-zinc-900">Lab Tested Pure</p>
                <p className="text-xs text-zinc-500">Safe, non-GMO & natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SUPERFOOD BENEFITS ---------------- */}
      <section id="benefits" className="py-24 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Why Pitaya?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
              Nature’s Most Potent Tropical Superfruit
            </h2>
            <p className="text-zinc-600">
              Beyond the exotic neon scales lies an exceptionally nutrient-dense flesh loaded with micronutrients that support your daily wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="text-rose-500" size={28} />,
                title: "Rich in Betalains",
                desc: "High anthocyanin & betalain content fights free radicals, supports anti-aging, and neutralizes cellular stress."
              },
              {
                icon: <Heart className="text-rose-500" size={28} />,
                title: "Cardiovascular Health",
                desc: "Packed with tiny edible black seeds filled with polyunsaturated fatty acids (Omega-3 and Omega-9) for heart vitality."
              },
              {
                icon: <Droplet className="text-emerald-500" size={28} />,
                title: "Gut Microbiome Boost",
                desc: "High dietary prebiotic fiber nourishes beneficial probiotic flora like bifidobacteria and lactobacilli."
              },
              {
                icon: <Sun className="text-amber-500" size={28} />,
                title: "Immunity & Hydration",
                desc: "Abundant in natural Vitamin C, Iron, and Magnesium to boost stamina and natural vitality with every slice."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/70 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-200 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- VARIETIES SHOWCASE ---------------- */}
      <section id="varieties" className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Our Fresh Harvest
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
              Orchard-Fresh Dragon Fruit Varieties
            </h2>
            <p className="text-zinc-600">
              Available in individual gift boxes, bulk cartons, or weekly health subscription baskets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ruby Red Dragon Fruit",
                botanical: "Hylocereus costaricensis",
                flavor: "Bold, sweet-tangy, berry notes with deep magenta pulp.",
                sugarLevel: "14-16° Brix Sweetness",
                image: "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=700&q=80",
                badge: "Most Popular"
              },
              {
                name: "Pearl White Dragon Fruit",
                botanical: "Hylocereus undatus",
                flavor: "Delicate, refreshing, mild sweetness with an ultra-crisp bite.",
                sugarLevel: "12-14° Brix Sweetness",
                image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=700&q=80",
                badge: "Crisp & Clean"
              },
              {
                name: "Golden Yellow Dragon Fruit",
                botanical: "Selenicereus megalanthus",
                flavor: "Gourmet rare variety with floral honey nectar-like sweetness.",
                sugarLevel: "18-20° Brix Sweetness",
                image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=700&q=80",
                badge: "Gourmet Reserve"
              }
            ].map((v, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={v.image} 
                    alt={v.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-md text-rose-600 shadow-md">
                      {v.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">{v.name}</h3>
                    <p className="text-xs italic text-zinc-500">{v.botanical}</p>
                    <p className="text-zinc-600 text-sm mt-3 leading-relaxed">{v.flavor}</p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {v.sugarLevel}
                    </span>
                    <a 
                      href="#contact" 
                      className="text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group"
                    >
                      Inquire Stock <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FARMING STANDARDS ---------------- */}
      <section id="process" className="py-24 px-6 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-900/60 border border-emerald-700 px-3 py-1 rounded-full">
              Sustainable Agriculture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Regenerative Soil, Pure Sunshine, Zero Compromise.
            </h2>
            <p className="text-emerald-200/80 leading-relaxed text-base">
              Our cacti are grown on sturdy trellis systems with drip-fertigation powered by organic vermicompost, neem cakes, and beneficial microorganisms. We never use artificial ripening agents, toxic weedicides, or synthetic pesticides.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                "Hand-pollinated blossoms for uniform, robust fruit formation",
                "Tree-ripened to guarantee highest natural brix (sweetness)",
                "Solar-powered drip irrigation conserving up to 70% groundwater",
                "Harvested at dawn and dispatched within hours for crisp freshness"
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-emerald-100 text-sm">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80" 
              alt="Organic farm trellis" 
              className="rounded-2xl h-56 w-full object-cover shadow-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80" 
              alt="Harvested fruits" 
              className="rounded-2xl h-56 w-full object-cover shadow-xl mt-8"
            />
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT & ORDER FORM (NETLIFY POWERED) ---------------- */}
      <section id="contact" className="py-24 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden">
            
            {/* Sidebar Details */}
            <div className="md:col-span-2 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 p-8 sm:p-10 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black">Get in Touch</h3>
                  <p className="text-rose-100 text-sm mt-2">
                    Looking for bulk orders, wholesale supply, or retail farm-door delivery? Reach out to us.
                  </p>
                </div>

                <div className="space-y-4 pt-4 text-sm text-rose-50">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-white" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-white" />
                    <span>info@organicdragonfruit.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-white" />
                    <span>Orchard Block #4, Valley Farms, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-rose-500/40 text-xs text-rose-200">
                ⚡ Submissions are delivered directly to our orchard team's inbox.
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-8 sm:p-10">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900">Message Received!</h4>
                  <p className="text-zinc-600 max-w-sm text-sm">
                    Thank you for reaching out. We have received your inquiry and will contact you via email/phone shortly.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-rose-600 bg-rose-50 rounded-xl hover:bg-rose-100 transition"
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
                  className="space-y-4"
                >
                  {/* Required hidden inputs for Netlify */}
                  <input type="hidden" name="form-name" value="dragonfruit-contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <h3 className="text-xl font-bold text-zinc-900">Place an Order / Ask a Question</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 90000 00000" 
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Variety of Interest
                      </label>
                      <select 
                        name="variety" 
                        value={formData.variety}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm transition"
                      >
                        <option>Ruby Red Dragon Fruit</option>
                        <option>Pearl White Dragon Fruit</option>
                        <option>Golden Yellow Dragon Fruit</option>
                        <option>Mixed Variety Gift Box</option>
                        <option>Commercial / Bulk Farm Trellis Seedlings</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Message / Quantity Required
                    </label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us your quantity requirements or delivery location..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm transition resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-zinc-900 hover:bg-rose-600 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-rose-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                    ) : (
                      <>
                        <Send size={16} /> Send Direct Farm Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌺</span>
            <span className="font-bold text-white tracking-wide">ORGANIC PITAYA FARMS</span>
          </div>
          <p>© {new Date().getFullYear()} Organic Dragon Fruit. Cultivated with regenerative care. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#varieties" className="hover:text-white transition">Harvest</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}