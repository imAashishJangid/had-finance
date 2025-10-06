import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TransparentBanner = () => {
  const navigate = useNavigate();
  const headingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });
    }

    // Features animation
    if (featuresRef.current) {
      const featureElements = Array.from(featuresRef.current.children) as HTMLElement[];
      gsap.from(featureElements, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%",
        },
      });
    }

    // Buttons animation
    if (buttonsRef.current) {
      const buttonElements = Array.from(buttonsRef.current.children) as HTMLElement[];
      gsap.from(buttonElements, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 90%",
        },
      });
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-[#316b80]/95 to-[#3aa6c9]/95 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12" ref={headingRef}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Take the first step towards financial freedom. Our expert advisors
            are here to guide you through every step of your financial journey.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12" ref={featuresRef}>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur">
                <Phone className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Support</h3>
            <p className="opacity-90">24/7 customer support for all your queries</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur">
                <Calculator className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
            <p className="opacity-90">Expert financial advice at no cost</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur">
                <MessageCircle className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Process</h3>
            <p className="opacity-90">Simple and hassle-free loan approval</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" ref={buttonsRef}>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            onClick={scrollToContact}
          >
            Get Free Consultation
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            onClick={() => navigate("/emi-calculator")}
          >
            Calculate EMI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransparentBanner;
