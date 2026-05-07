import { motion } from "motion/react";
import { Compass, Calendar, Map, Users, ArrowRight, ArrowDown, Globe, Shield, Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-primary/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 overflow-hidden rounded-xl flex items-center justify-center">
            <img src="/pic10.png" className="w-full h-full object-cover" alt="Logo" />
          </div>
          <span className="text-xl font-bold tracking-tight">WANDERING</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text-dim">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#core-features" className="hover:text-white transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <button className="px-6 py-2 bg-white/5 border border-brand-border rounded-full text-sm font-semibold hover:bg-white/10 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export function Hero({ heroImage }: { heroImage: string }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] glow-blue pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] glow-indigo pointer-events-none z-0" />

      <div className="flex-1 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
            <span className="text-brand-accent text-[10px] font-bold tracking-widest uppercase">v2.0 Beta Now Live</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light leading-[1.1] tracking-tight">
            <span className="font-semibold text-brand-accent italic font-serif">Wandering</span>: <br />
            An Immersive, AI-Powered <br />
            Travel Planning App.
          </h1>
          
          <p className="text-lg text-brand-text-dim max-w-xl leading-relaxed">
            Seamlessly integrating 3D globe exploration, trip checklists, AI budgeting, and one-click planning. Say goodbye to app-switching and effortlessly turn your travel inspiration into the perfect itinerary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-xl font-bold shadow-lg shadow-brand-accent/20 hover:bg-brand-accent-hover transition-all group">
              Get Wandering / Begin Your Seamless Trip <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center gap-12 pt-8 border-t border-brand-border">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">42k+</span>
              <span className="text-[10px] text-brand-text-dim uppercase tracking-widest font-bold">Trips Planned</span>
            </div>
            <div className="h-8 w-[1px] bg-brand-border"></div>
            <div className="flex flex-col">
              <span className="text-sm text-brand-text-dim">Available on</span>
              <span className="text-sm font-semibold">Android</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] w-full flex items-center justify-center pt-12"
          style={{ perspective: "1500px" }}
        >
          {/* Base Layer - 3D Globe/Map (Back) */}
          <motion.div 
            initial={{ rotateY: 20, rotateX: 10, translateZ: -150, x: -100, y: -40, scale: 1.1 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            className="absolute w-[48%] aspect-[9/16] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl z-0 bg-brand-secondary"
          >
            <img src="/pic1_1.jpg" className="w-full h-full object-cover" alt="Globe Explore" />
            <div className="absolute inset-0 bg-brand-primary/20 pointer-events-none" />
          </motion.div>

          {/* Middle Layer - Trip Checklist (Middle) */}
          <motion.div 
            initial={{ rotateY: 25, rotateX: 10, translateZ: 0, x: 0, y: 0, scale: 1.0 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            className="absolute w-[48%] aspect-[9/16] rounded-[40px] overflow-hidden border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-10 backdrop-blur-xl bg-white/10"
          >
            <img src="/pic2.jpg" className="w-full h-full object-cover" alt="Checklist" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[40px] pointer-events-none" />
          </motion.div>

          {/* Top Layer - Trip List (Front) */}
          <motion.div 
            initial={{ rotateY: 30, rotateX: 5, translateZ: 150, x: 100, y: 40, scale: 0.9 }}
            whileHover={{ scale: 1.0, transition: { duration: 0.3 } }}
            className="absolute w-[48%] aspect-[9/16] rounded-[40px] overflow-hidden border border-white/30 shadow-[0_80px_150px_-30px_rgba(0,0,0,0.7)] z-20 bg-brand-secondary"
          >
            <img src="/pic3.jpg" className="w-full h-full object-cover" alt="My Trips" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/50 rounded-[40px] pointer-events-none" />
          </motion.div>

          {/* Decorative Floating Elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-500/10 blur-[100px] rounded-full" />
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ArrowDown className="w-6 h-6 opacity-30 text-white" />
      </motion.div>
    </section>
  );
}

export function Features() {
  const steps = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "3D Interactive Globe",
      desc: "Spin the 3D globe to discover amazing places and spark your travel ideas."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Planner",
      desc: "Let AI create your perfect daily schedule and manage your budget in seconds."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Local Event Discovery",
      desc: "Easily search and find fun local festivals, shows, and events for your trip."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Travel Community",
      desc: "Share your trips, save great tips, and connect with travelers just like you."
    }
  ];

  return (
    <section id="features" className="py-24 bg-brand-secondary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic font-serif">Engineered for experience.</h2>
          <p className="text-brand-text-dim text-lg">We've combined AI with an interactive 3D globe to create the most effortless, all-in-one travel planner and ultimate travel companion.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/5 border border-brand-border hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-brand-text-dim leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DestinationGrid() {
  const destinations = [
    { title: "Tokyo", country: "JAPAN", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800" },
    { title: "Amsterdam", country: "NETHERLANDS", img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=800" },
    { title: "New York", country: "USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800" },
    { title: "Rome", country: "ITALY", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="destinations" className="py-24 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Destinations</h2>
            <p className="text-brand-text-dim">Hand-picked by our editors and AI scouts for the most authentic experiences.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((d, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 border border-brand-border">
                <img 
                  src={d.img} 
                  alt={d.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4">
                   <p className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-1">{d.country}</p>
                   <h3 className="text-2xl font-bold text-white">{d.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoreFeatures() {
  const coreFeatures = [
    {
      step: "01",
      title: "Explore the 3D Globe",
      desc: "Spin the globe to discover glowing cities, or simply search for your destination.",
      img: "/pic7_1.jpg"
    },
    {
      step: "02",
      title: "Quick Previews",
      desc: "Tap any spot for an instant preview card showing the city's name, a short intro, and a photo.",
      img: "/pic8_1.jpg"
    },
    {
      step: "03",
      title: "Dive into Details",
      desc: "Click 'View Details' to explore top experiences, local food, stays, and community posts.",
      img: "/pic9_2.jpg"
    }
  ];

  return (
    <section id="core-features" className="py-24 bg-brand-secondary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xl font-mono text-brand-accent uppercase tracking-[0.2em] mb-4">Main feature:</h2>
          <h3 className="text-4xl md:text-5xl font-bold italic font-serif">1. 3D Interactive Globe</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {coreFeatures.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-[32px] overflow-hidden border border-brand-border bg-brand-primary mb-8 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img src={f.img} alt={f.title} className="w-full h-auto block object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-bold font-mono">
                    {f.step}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-brand-text-dim uppercase">Process</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-brand-accent transition-colors">
                  {f.title}
                </h3>
                <p className="text-brand-text-dim text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlanningFeature() {
  const planningSteps = [
    {
      step: "01",
      title: "Start Your Journey",
      desc: "Tap 'Start Journey' on any destination to instantly add it to your personalized Trip Checklist.",
      img: "/pic13.png"
    },
    {
      step: "02",
      title: "Tell Us Your Travel Style",
      desc: "Tap 'Start Planning' to set your dates, budget, and travel style, then let AI generate your itinerary.",
      img: "/pic14.png"
    },
    {
      step: "03",
      title: "Review and Refine Your Plan",
      desc: "Review your AI-generated checklist of flights, stays, and restaurants with costs. Easily adjust everything to fit your needs.",
      img: "/pic15_1.jpg"
    }
  ];

  return (
    <section id="planning-feature" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xl font-mono text-brand-accent uppercase tracking-[0.2em] mb-4">Main feature:</h2>
          <h3 className="text-4xl md:text-5xl font-bold italic font-serif">2. Travel Community</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {planningSteps.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-[32px] overflow-hidden border border-brand-border bg-brand-secondary mb-8 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img src={f.img} alt={f.title} className="w-full h-auto block object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-bold font-mono">
                    {f.step}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-brand-text-dim uppercase">Process</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-brand-accent transition-colors">
                  {f.title}
                </h3>
                <p className="text-brand-text-dim text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventDiscovery() {
  return (
    <section id="event-discovery" className="py-24 bg-brand-secondary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xl font-mono text-brand-accent uppercase tracking-[0.2em] mb-4">Main feature:</h2>
          <h3 className="text-4xl md:text-5xl font-bold italic font-serif">3. Local Event Discovery</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-brand-accent/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-[40px] overflow-hidden border border-brand-border shadow-2xl bg-brand-primary">
              <img src="/pic11.jpg" alt="Local Event Discovery" className="w-full h-auto block object-contain" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20">
              <Calendar className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">Never Miss Out</span>
            </div>
            
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-brand-text-dim">
              Never miss out on the local vibe. On the Events page, you can search by city or use quick filters like <span className="text-white font-medium">'Traditional Festival'</span> and <span className="text-white font-medium">'Music'</span> to discover upcoming events. Found something exciting like the Rio Carnival? Just tap to view details and add it straight to your trip.
            </p>

            <button className="flex items-center gap-3 text-brand-accent font-bold hover:gap-5 transition-all group">
              Explore events nearby <ArrowRight className="w-5 h-5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TravelCommunity() {
  return (
    <section id="travel-community" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xl font-mono text-brand-accent uppercase tracking-[0.2em] mb-4">Main feature:</h2>
          <h3 className="text-4xl md:text-5xl font-bold italic font-serif">4. Travel Community</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20">
              <Users className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">Social Explorer</span>
            </div>
            
            <h4 className="text-3xl font-bold">Join the Travel Community</h4>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-brand-text-dim">
              Head over to the Posts tab to connect with fellow explorers. Browse the <span className="text-white font-medium">'Latest'</span> or <span className="text-white font-medium">'Popular'</span> feeds for authentic inspiration—from starry nights in Amsterdam to beautiful sunsets in Barcelona. Got your own amazing memories? Tap the <span className="text-white font-medium">'+'</span> button to share your journey, drop a like, and exchange tips in the comments.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(idx => (
                  <div key={idx} className="w-10 h-10 rounded-full border-2 border-brand-secondary overflow-hidden bg-brand-primary">
                    <img src={`https://i.pravatar.cc/150?u=${idx + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-brand-text-dim font-medium">Join 50k+ explorers sharing their journeys</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-[40px] overflow-hidden border border-brand-border shadow-2xl bg-brand-secondary">
              <img src="/pic12.jpg" alt="Travel Community" className="w-full h-auto block object-contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-primary py-20 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1 space-y-6">
          <div className="flex items-center gap-2">
            <Compass className="w-8 h-8 text-brand-accent" />
            <span className="text-xl font-bold tracking-tight">WANDERING</span>
          </div>
          <p className="text-brand-text-dim text-sm leading-relaxed">
            Redefining travel with artificial intelligence. Plan your next adventure with confidence and ease.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-brand-text-dim">
            <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Itineraries</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-brand-text-dim">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-sm">FEATURED IN</h4>
          <div className="flex gap-4 opacity-30 grayscale hover:opacity-50 transition-opacity">
            <span className="text-sm font-bold">TRAVELER</span>
            <span className="text-sm font-bold">FORBES</span>
            <span className="text-sm font-bold">TECHCRUNCH</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-brand-text-dim uppercase tracking-widest font-bold">
        <p>© 2026 WANDERING TRAVEL TECHNOLOGIES INC.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
}
