import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StyleSplit from "@/components/StyleSplit";
import Inventory from "@/components/Inventory";
import Terms from "@/components/Terms";
import MasterPlan from "@/components/MasterPlan";
import Gallery from "@/components/Gallery";
import Tour from "@/components/Tour";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Floating from "@/components/Floating";
import Overlays from "@/components/Overlays";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Inventory />
        <Terms />
        <StyleSplit />
        <MasterPlan />
        <Gallery />
        <Tour />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <Floating />
      <Overlays />
    </>
  );
}
