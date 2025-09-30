import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FinanceExplainer from "@/components/FinanceExplainer";
import LoansSection from "@/components/LoansSection";
import TransparentBanner from "@/components/TransparentBanner";
import FinanceCards from "@/components/FinanceCards";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <FinanceExplainer />
      <LoansSection />
      <TransparentBanner />
      <ServicesSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
