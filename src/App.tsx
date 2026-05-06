import { Navbar, Hero, Features, DestinationGrid, CoreFeatures, EventDiscovery, TravelCommunity, Footer } from "./components/LandingPage";

export default function App() {
  const heroImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000";

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero heroImage={heroImage} />
        <Features />
        <DestinationGrid />
        <CoreFeatures />
        <EventDiscovery />
        <TravelCommunity />
      </main>
      <Footer />
    </div>
  );
}
