import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{ backgroundColor: "#3aa6c9" }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#316b80"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#3aa6c9"}
          className="fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg transition-colors"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
