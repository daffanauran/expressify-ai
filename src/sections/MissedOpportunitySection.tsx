import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, PhoneMissed, Wrench, RefreshCw, TrendingDown } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const problemCards = [
  {
    icon: <Clock className="h-5 w-5 text-[#8c8ca7] group-hover:text-[#ff6467] transition-colors duration-300" />,
    title: 'Customers book whoever responds first',
    description:
      'Speed wins. If you\'re not responding in minutes, your competitor is booking the job.',
  },
  {
    icon: <TrendingDown className="h-5 w-5 text-[#8c8ca7] group-hover:text-[#ff6467] transition-colors duration-300" />,
    title: 'Leads go cold after hours',
    description:
      'Most inquiries come in evenings and weekends when your team isn\'t available to respond.',
  },
  {
    icon: <PhoneMissed className="h-5 w-5 text-[#8c8ca7] group-hover:text-[#ff6467] transition-colors duration-300" />,
    title: 'Missed calls become lost revenue',
    description:
      'Every unanswered inquiry is money walking out the door — often never to return.',
  },
  {
    icon: <Wrench className="h-5 w-5 text-[#8c8ca7] group-hover:text-[#ff6467] transition-colors duration-300" />,
    title: 'Teams are busy onsite',
    description:
      'Your technicians can\'t respond to new leads while they\'re completing existing jobs.',
  },
  {
    icon: <RefreshCw className="h-5 w-5 text-[#8c8ca7] group-hover:text-[#ff6467] transition-colors duration-300" />,
    title: 'Repetitive questions consume time',
    description:
      'Answering "What are your rates?" and "Are you available Saturday?" all day wastes valuable hours.',
  },
];

export const MissedOpportunitySection = () => {
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
    <section ref={sectionRef} className="relative flex w-full justify-center px-4 py-16 sm:px-6 md:py-20 lg:px-10 xl:px-[140px] xl:py-[100px]">
      <div className="flex w-full max-w-[1160px] flex-col items-center gap-12">
        <header className="flex w-full max-w-[1104px] flex-col items-center gap-4 text-center">
          <Badge className={`h-auto rounded-full border border-[#fb2c364c] bg-[#fb2c361a] px-3 py-1 text-sm font-medium leading-4 text-[#ff6467] hover:bg-[#fb2c361a] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            The Problem
          </Badge>
          <h2 className={`text-[32px] font-bold leading-[38px] tracking-[-0.23px] text-neutral-100 sm:text-[40px] sm:leading-[46px] lg:text-[44px] lg:leading-[50px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Every Missed Inquiry Is a <br />
            <span className="text-[#ff6467]">Missed Opportunity</span>
          </h2>
          <p className={`max-w-[672px] text-base font-normal leading-7 tracking-[-0.44px] text-[#8c8ca7] sm:text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Service businesses lose thousands in revenue every month simply
            because they can't respond fast enough.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemCards.map((card, idx) => (
            <Card
              key={card.title}
              className={`group rounded-2xl border border-[#ffffff0d] bg-[#07070d] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] cursor-default transition-all duration-500 hover:border-[#ff646733] hover:bg-[#0c0c14] hover:-translate-y-1 hover:shadow-[0px_8px_24px_-6px_#00000040] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 120 + 300}ms` }}
            >
              <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffffff08] ring-1 ring-[#ffffff0d] group-hover:bg-[#ff646710] group-hover:ring-[#ff646720] transition-all duration-300">
                  {card.icon}
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="w-full text-base font-bold leading-[22px] tracking-[-0.31px] text-neutral-100 group-hover:text-[#ff6467] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="w-full text-sm font-normal leading-[22.8px] tracking-[-0.15px] text-[#8c8ca7]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className={`group rounded-2xl border border-[#ffffff0d] bg-[#0e0e1a] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] cursor-default transition-all duration-700 hover:border-[#945ff933] hover:bg-[#131320] hover:-translate-y-1 hover:shadow-[0px_8px_24px_-6px_#945ff920] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '900ms' }}>
            <CardContent className="flex h-full min-h-[176px] flex-col justify-between gap-6 p-6">
              <div className="flex w-full flex-col items-start gap-3">
                <h3 className="w-full text-base font-bold leading-[22px] tracking-[-0.31px] text-neutral-100">
                  Ready to stop losing customers?
                </h3>
                <p className="w-full text-sm font-normal leading-[22.8px] tracking-[-0.15px] text-[#8c8ca7]">
                  See how Expressify responds instantly, captures leads, and
                  books appointments for you 24/7.
                </p>
              </div>
              <a href="https://calendly.com/lauri-expressify/book" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="h-auto w-full rounded-[10px] bg-[#945ff9] px-3 py-2 text-sm font-bold leading-5 tracking-[-0.15px] text-[#fcfcfc] shadow-[0px_4px_6px_-4px_#945ff940,0px_10px_15px_-3px_#945ff940] hover:bg-[#945ff9]/90 hover:scale-[1.02] transition-all duration-300">
                  <span>Book a Demo</span>
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
