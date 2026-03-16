import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function AffiliateFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What industries do you specialize in?",
      answer:
        "We serve businesses across diverse industries like technology, FMCG, retail, healthcare, education, and more — offering insights tailored to each sector.",
    },
    {
      id: 2,
      question: "How does the consulting process work?",
      answer:
        "We start with a detailed audit of your business operations, followed by a strategic roadmap outlining clear steps to address challenges and achieve growth.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Do you offer ongoing consulting support?",
      answer:
        "Yes. We provide both project-based consulting and long-term strategic partnerships, ensuring we stay with you through planning and execution.",
    },
    {
      id: 4,
      question: "Can you assist with investor pitches and funding strategies?",
      answer:
        "Absolutely. We create business plans, pitch decks, and financial models to help you attract investors and secure funding.",
    },
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const renderFAQ = (faq) => {
    const isOpen = activeId === faq.id;

    return (
      <div key={faq.id} className="border-b border-[#00000080] pb-6">

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
    <section className="bg-[#fff6f9] pb-10">

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

export default AffiliateFaq;