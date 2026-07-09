import { useEffect, useRef, useState } from 'react';
import { Badge } from '../components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const faqItems = [
  {
    question: 'How long does setup take?',
    answer:
      'Most businesses are up and running within 24-48 hours. Our team handles the configuration and walks you through everything in a personalised onboarding session.',
  },
  {
    question: 'Can it book appointments directly?',
    answer:
      'Yes! Expressify integrates with popular scheduling tools and can book appointments directly into your calendar, send confirmation messages, and handle rescheduling requests.',
  },
  {
    question: "What happens if it can't answer a question?",
    answer:
      'Expressify is smart enough to know when to escalate. If a query is outside its knowledge, it will collect the customer\'s details and flag the conversation for your team to follow up.',
  },
  {
    question: 'Does it work after hours?',
    answer:
      'Absolutely — that\'s one of its biggest advantages. Expressify operates 24/7, so every inquiry outside business hours is captured, qualified, and often fully booked before your team even starts the day.',
  },
  {
    question: 'Does it integrate with existing systems?',
    answer:
      'Yes, Expressify connects with CRMs, scheduling software, SMS platforms, web chat, and social media channels. Our team will help configure the right integrations for your workflow.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Book a free demo today and we\'ll have you set up within days, not weeks. There\'s no long-term commitment required to get started.',
  },
];

export const FAQSection = () => {
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
    <section ref={sectionRef} className="relative flex w-full flex-col items-center justify-center gap-12 px-6 py-[100px] sm:px-10 lg:px-[140px]">
      <header className="flex w-full max-w-[1104px] flex-col items-center gap-4">
        <Badge className={`h-auto rounded-full border border-[#945ff966] bg-[#945ff91a] px-3 py-1 text-center text-sm font-medium leading-4 text-[#945ff9] hover:bg-[#945ff91a] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          FAQs
        </Badge>
        <h2 className={`w-full text-center text-[44px] font-bold leading-[50px] tracking-[-0.53px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="tracking-[-0.23px] text-neutral-100">Common </span>
          <span className="tracking-[-0.23px] text-[#945ff9]">Questions</span>
        </h2>
        <p className={`w-full max-w-[672px] text-center text-lg font-normal leading-7 tracking-[-0.44px] text-[#8c8ca7] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Everything you need to know before booking your demo.
        </p>
      </header>

      <div className="w-full max-w-[720px]">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index + 1}`}
              className={`group overflow-hidden rounded-2xl border border-[#ffffff0d] bg-[#07070d] px-4 transition-all duration-500 hover:border-[#ffffff1a] hover:bg-[#0c0c14] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <AccordionTrigger className="rounded-[10px] py-4 text-left text-base font-semibold leading-5 tracking-[-0.15px] text-neutral-100 hover:no-underline group-hover:text-[#945ff9] transition-colors duration-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-0 text-sm leading-6 text-[#8c8ca7]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
