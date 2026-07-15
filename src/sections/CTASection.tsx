import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { trackPixelEvent } from '../lib/pixel';

const benefitItems = ['Free 30-min demo', 'Live setup walkthrough', 'No commitment required'];

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#030305] px-6 py-20 sm:px-10 lg:px-[140px] lg:py-[100px]">
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[747px] w-[747px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#945ff9] opacity-50 blur-[250px] animate-pulse-slow" />
      <div className="relative mx-auto flex w-full max-w-[768px] flex-col items-center gap-8 px-0">
        <header className="flex w-full flex-col items-center gap-4">
          <Badge className={`h-[22px] rounded-full border border-[#945ff966] bg-[#945ff91a] px-3 py-1 text-center text-sm font-medium leading-4 text-[#945ff9] hover:bg-[#945ff91a] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Get Started Today
          </Badge>
          <h2 className={`w-full max-w-[720px] text-center text-4xl font-bold leading-[42px] tracking-[-0.85px] text-neutral-100 sm:text-5xl sm:leading-[48px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            See How Many Leads <br />
            <span className="text-[#945ff9]">You&apos;re Missing</span>
          </h2>
          <p className={`w-full max-w-[576px] text-center text-base font-normal leading-[28px] tracking-[-0.44px] text-[#8c8ca7] sm:text-lg sm:leading-[29.2px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Every hour without Expressify is another lead going to a competitor.
            Book your free demo today and see exactly how many appointments you
            could be capturing automatically.
          </p>
        </header>

        <ul className={`flex w-full max-w-[720px] flex-wrap items-center justify-center gap-x-8 gap-y-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {benefitItems.map((item, idx) => (
            <li key={item} className="inline-flex items-center gap-2 group">
              <Check className="h-4 w-4 text-[#945ff9] group-hover:scale-125 transition-transform duration-200" style={{ transitionDelay: `${idx * 100}ms` }} />
              <span className="text-base font-normal leading-5 tracking-[-0.15px] text-[#8c8ca7]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className={`flex flex-col items-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a href="https://calendly.com/lauri-expressify/book" target="_blank" rel="noopener noreferrer" onClick={() => trackPixelEvent('Lead')}>
            <Button
              type="button"
              className="h-14 w-full max-w-[280px] rounded-2xl bg-[#945ff9] px-6 text-lg font-bold leading-7 tracking-[-0.44px] text-[#fcfcfc] shadow-[0px_25px_50px_-12px_#945ff966] hover:bg-[#945ff9]/90 hover:scale-105 hover:shadow-[0px_30px_60px_-12px_#945ff980] transition-all duration-300"
            >
              <span>Book Your Free Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
          <p className="text-center text-sm font-normal leading-4 text-[#8c8ca7]">
            Join 200+ service businesses already using Expressify AI
          </p>
        </div>
      </div>
    </section>
  );
};
