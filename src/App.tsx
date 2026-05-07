/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Features, DestinationGrid, CoreFeatures, PlanningFeature, EventDiscovery, TravelCommunity, Footer } from "./components/LandingPage.tsx";

export default function App() {
  // Access the generated image or use fallback
  const heroImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000";

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero heroImage={heroImage} />
        <Features />
        <DestinationGrid />
        <CoreFeatures />
        <PlanningFeature />
        <EventDiscovery />
        <TravelCommunity />
      </main>
      <Footer />
    </div>
  );
}
