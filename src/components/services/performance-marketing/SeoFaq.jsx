import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function PerformanceFaq() {

  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What is performance marketing?",
      answer:
        "It’s a results-oriented advertising approach where you pay only for specific actions like clicks, leads, or conversions.",
    },
    {
      id: 2,
      question: "How soon can I expect results?",
      answer:
        "Performance campaigns can start showing results within days, but we also focus on optimizing for long-term profitability.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Is performance marketing suitable for my business?",
      answer:
        "Yes! It works for startups, SMEs, and enterprises looking to scale quickly with measurable ROI.",
    },
    {
      id: 4,
      question: "Which platforms do you use?",
      answer:
        "We specialize in Google Ads, Meta Ads (Facebook/Instagram), LinkedIn, and other programmatic networks.",
    },
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const renderFAQ = (faq) => {
    const isOpen = activeId === faq.id;

    return (
      <div key={faq.id} className="border-b border-[#00000080] pb-10">

        <div
          onClick={() => toggleFAQ(faq.id)}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="text-[18px] font-medium">{faq.question}</h3>

          <ChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        <div
          className={`grid transition-all duration-300 ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm text-black/70 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>

      </div>
    );
  };

  return (
    <section className="bg-[#fff6f9] py-10">

      <div className="max-w-[1440px] w-[90%] mx-auto">

        <h2 className="text-[32px] md:text-[44px] lg:text-[54px] font-semibold mb-4 lg:mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="flex flex-col gap-6">
            {faqsLeft.map(renderFAQ)}
          </div>

          <div className="flex flex-col gap-6">
            {faqsRight.map(renderFAQ)}
          </div>

        </div>

      </div>

    </section>
  );
}

export default PerformanceFaq;