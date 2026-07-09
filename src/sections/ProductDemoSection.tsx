import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const ProductDemoSection = () => {
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
    <section id="product-demo" ref={sectionRef} className="relative mt-5 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24 xl:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1104px] flex-col items-center gap-12">
        <header className="flex w-full flex-col items-center gap-4 text-center">
          <Badge className={`rounded-full border border-[#945ff966] bg-[#945ff91a] px-3 py-1 text-sm font-medium leading-4 text-[#945ff9] hover:bg-[#945ff91a] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Product Demo
          </Badge>
          <h2 className={`max-w-[780px] text-[32px] font-bold leading-[38px] tracking-[-0.53px] text-neutral-100 sm:text-[38px] sm:leading-[44px] lg:text-[44px] lg:leading-[50px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tracking-[-0.23px] text-neutral-100">See Expressify </span>
            <span className="tracking-[-0.23px] text-[#945ff9]">in Action</span>
          </h2>
          <p className={`max-w-[672px] text-base font-normal leading-6 tracking-[-0.44px] text-[#8c8ca7] sm:text-lg sm:leading-7 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Watch how Expressify responds to leads, captures information, and books
            appointments automatically.
          </p>
        </header>

        <Card className={`w-full overflow-hidden rounded-2xl border border-[#ffffff0f] bg-transparent shadow-[0px_25px_50px_-12px_#945ff91a] transition-all duration-700 delay-300 hover:shadow-[0px_35px_60px_-12px_#945ff930] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}>
          <CardContent className="p-0">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://player.vimeo.com/video/1196673645?badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute inset-0 h-full w-full rounded-2xl"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Expressify AI Demo"
              />
            </div>
          </CardContent>
        </Card>

        <a href="https://calendly.com/lauri-expressify/book" target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className={`h-auto rounded-[10px] bg-[#945ff9] px-4 py-3 text-sm font-bold leading-5 tracking-[-0.15px] text-[#fcfcfc] shadow-[0px_8px_10px_-6px_#945ff94c,0px_20px_25px_-5px_#945ff94c] hover:bg-[#8b57ef] hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <span>Book Your Demo Now</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  );
};
