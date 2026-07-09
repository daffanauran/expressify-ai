import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const reviews = [
  {
    quote: '"Since switching to Expressify, we\'ve stopped losing jobs to competitors. Our response time went from hours to seconds and our bookings doubled in the first month."',
    initial: 'S',
    name: 'Sarah T.',
    role: 'Owner, Premium Cleaning Co.',
    color: 'bg-violet-600',
  },
  {
    quote: '"The AI handles all our after-hours inquiries now. I wake up to confirmed appointments in my calendar — no missed calls, no cold leads. It\'s transformed how we operate."',
    initial: 'M',
    name: 'Michael R.',
    role: 'Director, Metro HVAC Services',
    color: 'bg-blue-600',
  },
  {
    quote: '"We were sceptical but the setup was quick and the results were immediate. It paid for itself within the first week from jobs we would have previously missed."',
    initial: 'J',
    name: 'Jake L.',
    role: 'Owner, Elite Plumbing Solutions',
    color: 'bg-emerald-600',
  },
  {
    quote: '"Our admin was drowning in repetitive questions. Expressify handles all of that now. She spends her time on actual work — not answering the same questions all day."',
    initial: 'A',
    name: 'Amanda K.',
    role: 'Manager, ClearView Windows',
    color: 'bg-rose-600',
  },
  {
    quote: '"I\'ve tried other chatbot tools. Expressify actually sounds human and books real appointments. The difference in conversion rates is night and day."',
    initial: 'D',
    name: 'Dave P.',
    role: 'Owner, Fast Response Electrical',
    color: 'bg-amber-600',
  },
  {
    quote: '"Easily the best investment we made this year. Our team focuses on doing the work — Expressify handles getting the work. Highly recommend for any service business."',
    initial: 'R',
    name: 'Rachel B.',
    role: 'Director, Sunshine Landscaping',
    color: 'bg-cyan-600',
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-transparent px-4 py-16 sm:px-6 lg:px-[140px] lg:py-[100px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-12">
        <header className="flex w-full max-w-[1104px] flex-col items-center gap-4 text-center">
          <Badge className={`h-auto rounded-full border border-[#945ff966] bg-[#945ff91a] px-3 py-1 text-sm font-medium leading-4 text-[#945ff9] hover:bg-[#945ff91a] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Customer Reviews
          </Badge>
          <h2 className={`text-[32px] font-bold leading-[38px] tracking-[-0.23px] text-neutral-100 sm:text-[44px] sm:leading-[50px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span>Service Businesses </span>
            <span className="text-[#945ff9]">Love Expressify</span>
          </h2>
          <div className={`flex flex-wrap items-center justify-center gap-1 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24] hover:scale-125 transition-transform duration-200" style={{ transitionDelay: `${index * 50}ms` }} />
            ))}
            <p className="pl-2 text-sm font-normal leading-5 tracking-[-0.15px] text-[#8c8ca7]">
              5.0 · 200+ reviews
            </p>
          </div>
        </header>

        <div className="grid w-full max-w-[1160px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, idx) => (
            <Card
              key={review.name}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group rounded-xl border border-[#ffffff0d] bg-[#07070d] shadow-none cursor-default transition-all duration-500 hover:border-[#ffffff1a] hover:bg-[#0c0c14] hover:-translate-y-1 hover:shadow-[0px_8px_24px_-6px_#00000040] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 120 + 300}ms` }}
            >
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 fill-[#fbbf24] text-[#fbbf24] transition-all duration-300 ${hoveredCard === idx ? 'scale-110' : ''}`}
                      style={{ transitionDelay: `${i * 40}ms` }}
                    />
                  ))}
                </div>
                <blockquote className="text-sm font-normal leading-[22.8px] tracking-[-0.15px] text-[#f5f5f5e6]">
                  {review.quote}
                </blockquote>
                <footer className="mt-auto flex items-center gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${review.color} group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-sm font-bold leading-5 tracking-[-0.15px] text-white">
                      {review.initial}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col items-start">
                    <p className="text-sm font-bold leading-5 tracking-[-0.15px] text-neutral-100">
                      {review.name}
                    </p>
                    <p className="text-xs font-normal leading-4 text-[#8c8ca7]">
                      {review.role}
                    </p>
                  </div>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(2,2,4,0)_0%,rgba(2,2,4,1)_75%)]" />
    </section>
  );
};
