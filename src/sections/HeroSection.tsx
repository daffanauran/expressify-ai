import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { trackPixelEvent } from '../lib/pixel';

const businessUsers = [
  { id: 'A', className: 'bg-violet-600' },
  { id: 'B', className: 'bg-purple-500' },
  { id: 'C', className: 'bg-purple-400' },
  { id: 'D', className: 'bg-fuchsia-400' },
];

const trafficDots = [
  { id: 'red', className: 'bg-[#ff646799]' },
  { id: 'yellow', className: 'bg-[#fdc70099]' },
  { id: 'green', className: 'bg-[#05df7299]' },
];

const messages = [
  {
    id: 'm1',
    side: 'right',
    text: 'Hi, I need a plumber tomorrow. Do you have availability?',
    time: '2:14 PM',
  },
  {
    id: 'm2',
    side: 'left',
    text: "Hi! I'd be happy to help. We have slots tomorrow at 9AM, 11AM, or 2PM. Which works best for you?",
    time: '2:14 PM',
  },
  {
    id: 'm3',
    side: 'right',
    text: '11AM works great!',
    time: '2:15 PM',
  },
  {
    id: 'm4',
    side: 'left',
    text: 'Perfect! Can I get your name and address to confirm the booking?',
    time: '2:15 PM',
  },
  {
    id: 'm5',
    side: 'right',
    text: 'James Mitchell, 42 Oak Street',
    time: '2:15 PM',
  },
  {
    id: 'm6',
    side: 'left',
    text: "Thanks James! Your appointment is confirmed for tomorrow at 11AM. You'll receive a confirmation text shortly.",
    time: '2:15 PM',
  },
];

function useTypingAnimation(text: string, speed: number = 30, startDelay: number = 0) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return displayed;
}

const subtitleText = 'Customers contact multiple businesses before booking. Expressify helps service companies respond instantly, answer questions, capture leads, and book appointments — automatically, 24/7.';

export const HeroSection = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setChatVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / 30,
        y: (e.clientY - rect.top - rect.height / 2) / 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <section ref={heroRef} className="relative w-full overflow-hidden bg-[#020204]">
      {/* Background radial glow with parallax */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[#945ff9] opacity-10 blur-[120px] transition-transform duration-700 ease-out"
        style={{ transform: `translate(calc(-50% + ${mousePos.x}px), calc(-25% + ${mousePos.y}px))` }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#945ff9] opacity-5 blur-[80px] transition-transform duration-700 ease-out"
        style={{ transform: `translate(calc(-50% + ${mousePos.x * 0.5}px), ${mousePos.y * 0.5}px)` }}
      />

      {/* Grid lines decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,95,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,95,249,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto min-h-[900px] w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Nav */}
        <header className="relative z-10 flex h-20 w-full items-center justify-center">
          <div className="flex w-full max-w-6xl items-center justify-center px-6">
            <div className="inline-flex items-center gap-3 animate-fade-in-down">
              <img
                src="/Expressify-ai-icon-logo-greybg_1.png"
                alt="Expressify AI"
                className="h-11 w-11 rounded-xl object-cover ring-1 ring-[#945ff9]/40 hover:scale-110 hover:rotate-3 transition-transform duration-300"
              />
              <span className="font-geist text-[24.8px] font-semibold tracking-[-1px]">
                <span className="text-neutral-100">Expressify </span>
                <span className="text-[#945ff9]">AI</span>
              </span>
            </div>
          </div>
        </header>

        {/* Hero grid */}
        <div className="relative z-10 mx-auto grid max-w-[1160px] grid-cols-1 gap-12 pb-12 pt-16 lg:grid-cols-[minmax(0,615px)_minmax(420px,480px)] lg:items-start lg:gap-[65px] lg:pt-[71px]">
          <main className="flex flex-col items-start">
            <Badge className="h-[26px] rounded-full border border-[#945ff966] bg-[#945ff91a] px-3 py-1 text-[#945ff9] hover:bg-[#945ff91a] animate-fade-in-up">
              <span className="text-sm font-medium leading-4">AI Receptionist for Service Businesses</span>
            </Badge>

            <div className="mt-4 flex flex-col items-start">
              <h1 className="text-[42px] font-bold leading-[1.1] tracking-[-1.5px] text-neutral-100 sm:text-[52px] lg:text-[60px] animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                Stop Losing
                <br />
                Customers to{' '}
                <span className="text-[#945ff9]">Slow
                <br />Response Times</span>
              </h1>
            </div>

            <div className="flex w-full max-w-xl flex-col items-start pt-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className="max-w-[528px] text-lg font-normal leading-[29.2px] tracking-[-0.44px] text-[#8c8ca7]">
                {subtitleText}
              </p>
            </div>

            <div className="flex w-full max-w-[528px] flex-wrap items-start gap-4 pt-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a href="https://calendly.com/lauri-expressify/book" target="_blank" rel="noopener noreferrer" onClick={() => trackPixelEvent('Lead')}>
                <Button className="h-12 rounded-[10px] bg-[#945ff9] px-5 shadow-[0px_8px_10px_-6px_#945ff94c,0px_20px_25px_-5px_#945ff94c] hover:bg-[#945ff9]/90 hover:scale-105 hover:shadow-[0px_12px_20px_-6px_#945ff96c,0px_30px_40px_-5px_#945ff96c] transition-all duration-300">
                  <span className="text-base font-semibold leading-6 tracking-[-0.31px] text-[#fcfcfc]">
                    Book Your Free Demo
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#fcfcfc] group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="flex w-full flex-col items-start pt-8 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <div className="flex min-h-20 w-full flex-col items-start gap-6">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24] hover:scale-125 transition-transform duration-200" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                  <span className="pl-1 text-sm font-normal leading-5 tracking-[-0.15px] text-[#8c8ca7]">
                    5.0 rating
                  </span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <div className="inline-flex items-start">
                    {businessUsers.map((user, index) => (
                      <Avatar
                        key={user.id}
                        className={`h-7 w-7 border-2 border-[#020204] ${user.className} ${index > 0 ? '-ml-2' : ''} hover:scale-110 hover:z-10 transition-transform duration-200`}
                      >
                        <AvatarFallback className="bg-transparent text-xs font-semibold text-white">
                          {user.id}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm font-normal leading-5 tracking-[-0.15px] text-[#8c8ca7]">
                    200+ businesses using Expressify
                  </span>
                </div>
              </div>
            </div>
          </main>

          {/* Chat card */}
          <div className={`relative flex w-full justify-center lg:justify-start transition-all duration-700 ${chatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="relative z-10 flex w-full max-w-[480px] flex-col overflow-hidden rounded-2xl border border-[#ffffff0f] bg-[#07070d] shadow-[0px_25px_50px_-12px_#00000040] hover:shadow-[0px_35px_60px_-12px_#945ff940] transition-shadow duration-500">
              <div className="flex items-center gap-3 border-b border-[#ffffff0d] bg-[#1c152f66] px-4 py-3">
                <img
                  src="/Expressify-ai-icon-logo-greybg_1.png"
                  alt="Expressify AI"
                  className="h-8 w-8 rounded-lg object-cover ring-1 ring-[#945ff9]/40 hover:scale-110 hover:rotate-3 transition-transform duration-300"
                />
                <div className="flex min-w-0 flex-col items-start">
                  <h2 className="text-sm font-bold leading-5 tracking-[-0.15px] text-neutral-100">
                    Expressify AI
                  </h2>
                  <div className="inline-flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#05df72] animate-pulse" />
                    <span className="text-xs font-normal leading-4 text-[#8c8ca7]">
                      Online · Responds in seconds
                    </span>
                  </div>
                </div>
                <div className="ml-auto inline-flex items-center gap-1">
                  {trafficDots.map((dot) => (
                    <span key={dot.id} className={`h-2.5 w-2.5 rounded-full ${dot.className}`} />
                  ))}
                </div>
              </div>

              <CardContent className="flex flex-col p-4">
                {messages.map((message, idx) => {
                  const isLeft = message.side === 'left';
                  return (
                    <div
                      key={message.id}
                      className={`flex w-full pt-3 first:pt-0 ${isLeft ? 'justify-start' : 'justify-end'} transition-all duration-500 ${chatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${idx * 120 + 200}ms` }}
                    >
                      <div className={`flex max-w-full items-start gap-2 ${isLeft ? 'flex-row' : 'flex-col items-end'}`}>
                        {isLeft && (
                          <img
                            src="/Expressify-ai-icon-logo-greybg_1.png"
                            alt="Expressify AI"
                            className="mt-0.5 h-8 w-8 shrink-0 rounded-lg object-cover ring-1 ring-[#945ff9]/40 hover:scale-110 transition-transform duration-300"
                          />
                        )}
                        <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'}`}>
                          <div
                            className={`px-3 py-2 text-xs font-normal leading-[19.5px] ${
                              isLeft
                                ? 'bg-[#1c152f] text-neutral-100 rounded-[8px_16px_16px_16px] max-w-[348px]'
                                : 'bg-[#945ff9] text-[#fcfcfc] rounded-[16px_8px_16px_16px] max-w-[340px]'
                            } hover:scale-[1.02] transition-transform duration-200`}
                          >
                            {message.text}
                          </div>
                          <span className="px-1 pt-1 text-[10px] font-normal leading-[15px] tracking-[0.12px] text-[#8c8ca799]">
                            {message.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className={`flex w-full flex-col items-center pt-3 transition-all duration-500 ${chatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '900ms' }}>
                  <div className="flex w-full items-center gap-3 rounded-2xl border border-[#945ff94c] bg-[#945ff91a] p-3 hover:bg-[#945ff925] transition-colors duration-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#945ff9]/30">
                      <svg className="h-4 w-4 text-[#945ff9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="text-xs font-bold leading-4 text-[#945ff9]">
                        Appointment Booked
                      </div>
                      <div className="text-xs font-normal leading-4 text-[#8c8ca7]">
                        James Mitchell · Tomorrow 11:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <div className="flex items-center gap-2 border-t border-[#ffffff0d] px-4 py-3">
                <div className="flex flex-1 h-8 items-center rounded-xl bg-[#11101a80] px-3">
                  <span className="text-xs font-normal leading-4 text-[#8c8ca780]">
                    Type a message...
                  </span>
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#945ff9] hover:bg-[#945ff9]/90 hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5 text-white" />
                </button>
              </div>
            </Card>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px] bg-[linear-gradient(180deg,rgba(2,2,4,0)_0%,rgba(2,2,4,1)_100%)]" />
      </div>
    </section>
  );
};
