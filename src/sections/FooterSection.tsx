import { useEffect, useRef, useState } from 'react';
import { Twitter, Linkedin } from 'lucide-react';

export const FooterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="relative w-full border-t border-[#ffffff0d] bg-[#07070d33] px-6 py-8 sm:px-10 lg:px-[140px] lg:py-10">
      <div className={`mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 md:flex-row md:gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 group">
          <img
            src="/Expressify-ai-icon-logo-greybg_1.png"
            alt="Expressify AI"
            className="h-11 w-11 rounded-xl object-cover ring-1 ring-[#945ff9]/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          />
          <span className="text-[24.8px] font-semibold tracking-[-1px] whitespace-nowrap">
            <span className="text-neutral-100">Expressify </span>
            <span className="text-[#945ff9]">AI</span>
          </span>
        </div>

        <p className="text-center text-sm font-normal leading-5 tracking-[-0.15px] whitespace-nowrap text-[#8c8ca7]">
          © 2026 Expressify AI. All rights reserved.
        </p>

        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          <a
            href="https://calendly.com/lauri-expressify/book"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal leading-5 tracking-[-0.15px] whitespace-nowrap text-[#8c8ca7] hover:text-[#945ff9] transition-colors duration-300"
          >
            Book Demo
          </a>
          <a
            href="#"
            className="text-sm font-normal leading-5 tracking-[-0.15px] whitespace-nowrap text-[#8c8ca7] hover:text-[#945ff9] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};
