import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Finance", href: "#finance" },
    { name: "Loans", href: "#loans" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Home Loans",
    "Personal Loans",
    "Car Loans",
    "Business Loans",
    "Insurance Services",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!footerRef.current) return;

    // Animate all columns (Company Info, Quick Links, Services, Contact Info)
    const columns = gsap.utils.toArray<HTMLElement>(
      footerRef.current.querySelectorAll(".grid > div")
    );

    gsap.fromTo(
      columns,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate social icons
    const socialIcons = gsap.utils.toArray<HTMLElement>(
      footerRef.current.querySelectorAll("button svg, a svg")
    );

    gsap.fromTo(
      socialIcons,
      { opacity: 0, y: 20, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate bottom copyright
    const copyright = footerRef.current.querySelector(
      ".text-center"
    ) as HTMLElement;

    if (copyright) {
      gsap.fromTo(
        copyright,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">HAD Finance</h3>
            <p className="text-primary-foreground/80">
              Your trusted financial partner for all your loan and investment
              needs. We help you achieve your financial dreams with expert
              guidance.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <a
                href="https://www.instagram.com/had_finance_and_insurance?igsh=eGEzeXptd2xzYmpz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2">
              {services.map((service) => (
                <div key={service} className="text-primary-foreground/80">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span className="text-primary-foreground/80">
                  +91 94136 57763
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span className="text-primary-foreground/80">
                  hadfinance@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <span className="text-primary-foreground/80">
                  B-154 kardhani , jhotwara , <br />
                  jaipur 302044
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-primary-foreground/80 text-center">
              © 2025 HAD Finance. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
