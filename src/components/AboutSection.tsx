import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import dineshImage from "@/assets/dinesh-1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { icon: Users, number: 100, label: "Clients Successful", description: "Happy customers who achieved their financial goals" },
    { icon: Clock, number: 3, label: "Years Experience", description: "Proven expertise in financial advisory services" },
    { icon: CheckCircle, number: 95, label: "Success Rate", description: "High approval rate for financial solutions" },
    { icon: Award, number: 100, label: "Satisfaction", description: "Committed to client satisfaction and trust" },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // 1️⃣ Animate header only when it enters viewport
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });
    }

    // 2️⃣ Image animation on scroll
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });
    }

    // 3️⃣ Name fade up on scroll
    if (nameRef.current) {
      gsap.from(nameRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: nameRef.current,
          start: "top 80%",
        },
      });
    }

    // 4️⃣ Title slide-left on scroll
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -80,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
    }

    // 5️⃣ About paragraphs line by line on scroll
    if (aboutRef.current) {
      const lines = Array.from(aboutRef.current.querySelectorAll("p"));
      lines.forEach((line, i) => {
        gsap.from(line, {
          opacity: 0,
          x: -80,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
          },
          delay: i * 0.15,
        });
      });
    }

    // 6️⃣ Button fade up on scroll
    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
        },
      });
    }

    // 7️⃣ Achievements cards left-to-right animation
    if (achievementsRef.current) {
      const cards = Array.from(achievementsRef.current.children);
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: window.innerWidth >= 768 ? -50 : 0,
          y: window.innerWidth < 768 ? 50 : 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          delay: i * 0.15,
        });
      });
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Your Financial Advisor</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet Dinesh Choudhary, your trusted finance advisor with years of experience in helping clients achieve their financial dreams.
          </p>
        </div>

        {/* Image + Text Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div ref={imageRef} className="order-1 lg:order-1 flex justify-center">
            <img src={dineshImage} alt="Dinesh Choudhary" className="w-3/4 lg:w-full max-w-md h-auto rounded-2xl shadow-lg" />
          </div>

          <div className="space-y-6 order-2 lg:order-2">
            <h3 ref={nameRef} className="text-2xl md:text-3xl font-bold text-foreground mb-4">Dinesh Choudhary</h3>
            <p ref={titleRef} className="text-lg text-primary font-semibold mb-4">Certified Finance Advisor</p>
            <div ref={aboutRef}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 3 years of dedicated experience in the financial services industry, Dinesh has successfully guided more than 100 clients towards achieving their financial goals. His expertise spans across loans, investments, insurance, and comprehensive financial planning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dinesh believes in building long-term relationships with his clients through transparent communication, personalized service, and ethical practices.
              </p>
            </div>

            <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-black border border-grey font-semibold hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Schedule Consultation
              </Button>

            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div ref={achievementsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{achievement.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.label}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
