import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Globe, Calendar } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const steps = [
  {
    number: '01',
    Icon: MessageSquare,
    title: 'Customer Sends Inquiry',
    description:
      'A potential customer reaches out via SMS, web chat, Facebook, Instagram, or any channel — at any time of day.',
  },
  {
    number: '02',
    Icon: Globe,
    title: 'Expressify Responds Instantly',
    description:
      'Within seconds, your AI receptionist answers questions, qualifies the lead, and handles back-and-forth — 24/7.',
  },
  {
    number: '03',
    Icon: Calendar,
    title: 'Appointment Gets Booked',
    description:
      'The AI captures contact details, schedules the appointment, and sends confirmation — without your team lifting a finger.',
  },
];

const stats = [
  {
    label: 'Channels Supported',
    value: 'SMS, Web, Social',
    bg: 'bg-blue-500/10',
    ring: 'ring-blue-500/20',
    icon: (
      <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    label: 'Average Response Time',
    value: '< 3 seconds',
    bg: 'bg-[#945ff9]/10',
    ring: 'ring-[#945ff9]/20',
    icon: (
      <svg className="h-5 w-5 text-[#945ff9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: 'Conversion Rate Boost',
    value: 'Up to 3x more bookings',
    bg: 'bg-emerald-500/10',
    ring: 'ring-emerald-500/20',
    icon: (
      <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

export const HowItWorksSection = () => {
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
    <section ref={sectionRef} className="relative mt-[3px] w-full bg-[#020204] px-4 py-[72px] sm:px-6 lg:px-[140px] lg:py-[100px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-12">
        <header className="flex w-full max-w-[1104px] flex-col items-center gap-4">
          <Badge className={`h-auto rounded-full border border-[#945ff966] bg-[#945ff91a] px-3 py-1 text-sm font-medium leading-4 text-[#945ff9] hover:bg-[#945ff91a] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            How It Works
          </Badge>
          <h2 className={`text-center text-[32px] font-bold leading-[38px] tracking-[-0.23px] text-neutral-100 sm:text-[40px] sm:leading-[46px] lg:text-[44px] lg:leading-[50px] lg:tracking-[-0.53px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span>Respond. Capture. Book. </span>
            <span className="text-[#945ff9]">Automatically.</span>
          </h2>
          <p className={`max-w-[672px] text-center text-base font-normal leading-7 tracking-[-0.44px] text-[#8c8ca7] lg:text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Three simple steps — fully automated, no manual input required.
          </p>
        </header>

        <Card className={`w-full overflow-hidden rounded-xl border border-[#ffffff14] bg-transparent shadow-none transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 divide-y divide-[#ffffff14] md:grid-cols-3 md:divide-x md:divide-y-0">
              {steps.map((step, idx) => (
                <article
                  key={step.number}
                  className={`group flex min-h-[274px] flex-col items-center px-6 py-8 text-center cursor-default transition-all duration-500 hover:bg-[#ffffff04] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${idx * 150 + 400}ms` }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#945ff933] bg-[#945ff91a] group-hover:scale-110 group-hover:border-[#945ff966] group-hover:bg-[#945ff930] transition-all duration-300">
                    <span className="text-2xl font-bold leading-7 tracking-[-0.45px] text-[#945ff9]">
                      {step.number}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col items-center gap-3">
                    <h3 className="text-center text-xl font-bold leading-7 tracking-[-0.45px] text-neutral-100 group-hover:text-[#945ff9] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="max-w-80 text-center text-sm font-normal leading-[22.8px] tracking-[-0.15px] text-[#8c8ca7]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-[#ffffff14] bg-[#0a0a14]">
              <div className="grid grid-cols-1 divide-y divide-[#ffffff14] md:grid-cols-3 md:divide-x md:divide-y-0">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`group flex items-center justify-center gap-4 p-6 cursor-default transition-all duration-500 hover:bg-[#ffffff04] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${idx * 100 + 700}ms` }}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${stat.bg} ring-1 ${stat.ring} group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="flex min-w-0 flex-col items-start">
                      <p className="text-xs font-normal leading-4 text-[#8c8ca7]">
                        {stat.label}
                      </p>
                      <p className="text-sm font-bold leading-5 tracking-[-0.15px] text-neutral-100">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
