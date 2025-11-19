import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, UserCog } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassKeyBox, setShowPassKeyBox] = useState(false);
  const [passkey, setPasskey] = useState("");

  const ADMIN_PASSKEY = "2255"; // 👈 yaha apni secret key daal

  const handleAdminAccess = () => {
    if (passkey === ADMIN_PASSKEY) {
      window.location.href = "https://loan-manager-frontend-obfn.onrender.com/";
    } else {
      alert("❌ Wrong Passkey!");
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Finance", href: "#finance" },
    { name: "Loans", href: "#loans" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-10 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          />

          {/* NAVIGATION */}
          <div className="flex items-center space-x-6">
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="hover:text-primary"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="  md:block">
              <Button onClick={() => scrollToSection("#contact")}>Get Started</Button>
            </div>

            {/* Admin Icon - shows passkey popup */}
            <UserCog
              size={26}
              className="cursor-pointer hover:text-primary hidden md:block"
              onClick={() => setShowPassKeyBox(true)}
            />

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-16 border-t bg-background/95">
            <div className="flex flex-col p-4 space-y-4">

              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left hover:text-primary"
                >
                  {item.name}
                </button>
              ))}

              <Button onClick={() => scrollToSection("#contact")} className="w-full">
                Get Started
              </Button>

              {/* Admin (Mobile) */}
              <button
                className="flex items-center gap-2 text-left hover:text-primary"
                onClick={() => setShowPassKeyBox(true)}
              >
                <UserCog size={22} />
                
              </button>

            </div>
          </nav>
        )}
      </header>

      {/* PASSKEY MODAL */}
     {/* PASSKEY MODAL */}
{showPassKeyBox && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
    <div className="bg-white p-6 rounded-xl w-80 shadow-xl">
      <h2 className="text-xl font-semibold mb-4 text-center">Enter Admin Passkey</h2>

      <input
        type="password"
        value={passkey}
        onChange={(e) => setPasskey(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        placeholder="Enter Passkey"
      />

      <div className="flex justify-between">
        <Button
          type="button"          // 👈 IMPORTANT FIX
          onClick={() => {
            if (passkey === ADMIN_PASSKEY) {
              window.location.assign(
                "https://loan-manager-frontend-obfn.onrender.com/"
              );
            } else {
              alert("❌ Wrong Passkey!");
            }
          }}
        >
          Submit
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => setShowPassKeyBox(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Header;
