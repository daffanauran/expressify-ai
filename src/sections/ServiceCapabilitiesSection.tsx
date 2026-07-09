import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Moon, Zap, Database, Calendar, Clock, Users } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const featureRows = [
  [
    {
      title: '24/7 Availability',
      description: 'Your AI receptionist never sleeps. Capture leads at midnight, weekends, and holidays.',
      Icon: Moon,
      iconBg: 'bg-blue-500/10',
      iconRing: 'ring-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Instant Customer Responses',
      description: 'Respond in under 3 seconds — faster than any human team ever could.',
      Icon: Zap,
      iconBg: 'bg-[#945ff9]/10',
      iconRing: 'ring-[#945ff9]/20',
      iconColor: 'text-[#945ff9]',
    },
    {
      title: 'Lead Capture Automation',
      description: 'Every inquiry is captured, qualified, and logged automatically. Zero leads slip through.',
      Icon: Database,
      iconBg: 'bg-emerald-500/10',
      iconRing: 'ring-emerald-500/20',
      iconColor: 'text-emerald-400',
    },
  ],
  [
    {
      title: 'Appointment Booking Support',
      description: 'From first contact to confirmed booking — the full scheduling flow handled automatically.',
      Icon: Calendar,
      iconBg: 'bg-amber-500/10',
      iconRing: 'ring-amber-500/20',
      iconColor: 'text-amber-400',
    },
    {
      title: 'Reduced Admin Workload',
      description: 'Eliminate hours of phone tag, follow-ups, and repetitive answers every week.',
      Icon: Clock,
      iconBg: 'bg-rose-500/10',
      iconRing: 'ring-rose-500/20',
      iconColor: 'text-rose-400',
    },
    {
      title: 'No Additional Staff Required',
      description: 'Scale your lead handling without hiring — your AI handles unlimited conversations simultaneously.',
      Icon: Users,
      iconBg: 'bg-cyan-500/10',
      iconRing: 'ring-cyan-500/20',
      iconColor: 'text-cyan-400',
    },
  ],
];

export const ServiceCapabilitiesSection = () => {
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
    <section ref={sectionRef} className="relative mt-[0.1px] flex w-full justify-center px-4 py-16 sm:px-6 lg:px-[140px] lg:py-[100px]">
      <div className="flex w-full max-w-[1160px] flex-col items-center gap-12">
        <header className="flex w-full max-w-[1104px] flex-col items-center gap-4">
          <div className={`inline-flex items-center justify-center gap-1 overflow-hidden rounded-full border border-solid border-[#945ff966] bg-[#945ff91a] px-3 py-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="text-center text-sm font-medium leading-4 tracking-[0] text-[#945ff9]">
              Why Expressify
            </span>
          </div>
          <h2 className={`self-stretch text-center text-[32px] font-bold leading-[38px] tracking-[-0.53px] sm:text-[44px] sm:leading-[50px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tracking-[-0.23px] text-neutral-100">Built for </span>
            <span className="tracking-[-0.23px] text-[#945ff9]">Service Businesses</span>
          </h2>
          <p className={`w-full max-w-[672px] text-center text-base font-normal leading-7 tracking-[-0.44px] text-[#8c8ca7] sm:text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Everything you need to convert more leads without adding to your workload.
          </p>
        </header>

        <div className="flex w-full flex-col items-start gap-4">
          {featureRows.map((row, rowIndex) => (
            <div
              key={`feature-row-${rowIndex}`}
              className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {row.map((feature, idx) => (
                <Card
                  key={feature.title}
                  className={`group rounded-2xl border border-solid border-[#ffffff0d] bg-[#07070d] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] cursor-default transition-all duration-500 hover:border-[#ffffff1a] hover:bg-[#0c0c14] hover:-translate-y-1 hover:shadow-[0px_8px_24px_-6px_#00000040] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(rowIndex * 3 + idx) * 100 + 300}ms` }}
                >
                  <CardContent className="flex flex-col items-start gap-4 p-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} ring-1 ${feature.iconRing} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <feature.Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                      <h3 className="self-stretch text-base font-bold leading-[22px] tracking-[-0.31px] text-neutral-100 group-hover:text-[#945ff9] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="self-stretch text-sm font-normal leading-[22.8px] tracking-[-0.15px] text-[#8c8ca7]">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}

          <Card className={`group w-full rounded-2xl border border-solid border-[#945ff933] bg-[#945ff90d] shadow-none cursor-default transition-all duration-700 hover:bg-[#945ff915] hover:border-[#945ff966] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '900ms' }}>
            <CardContent className="flex flex-col items-start justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
              <div className="flex max-w-[379px] flex-col items-start">
                <h3 className="text-lg font-bold leading-7 tracking-[-0.44px] text-neutral-100">
                  Ready to automate your lead response?
                </h3>
                <p className="pt-1 text-sm font-normal leading-5 tracking-[-0.15px] text-[#8c8ca7]">
                  See a live demo and get a personalised setup walkthrough.
                </p>
              </div>
              <a href="https://calendly.com/lauri-expressify/book" target="_blank" rel="noopener noreferrer">
                <Button
                  type="button"
                  className="h-10 rounded-[10px] bg-[#945ff9] px-4 text-sm font-bold leading-5 tracking-[-0.15px] text-[#fcfcfc] shadow-[0px_8px_10px_-6px_#945ff94c,0px_20px_25px_-5px_#945ff94c] hover:bg-[#945ff9]/90 hover:scale-105 transition-all duration-300"
                >
                  <span>Book Free Demo</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
