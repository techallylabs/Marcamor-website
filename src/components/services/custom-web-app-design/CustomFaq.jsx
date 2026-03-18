import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function AffiliateFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "Do you design both websites and mobile apps?",
      answer:
        "Yes, we specialize in creating both custom websites and mobile app designs that are user-focused and brand-aligned.",
    },
    {
      id: 2,
      question: "Will the website/app be mobile-friendly?",
      answer:
        "Absolutely. We follow a mobile-first design approach to ensure smooth performance across all screen sizes and devices.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Can you redesign our existing website or app?",
      answer:
        "Yes, we can revamp your existing platforms with modern, responsive, and user-friendly designs.",
    },
    {
      id: 4,
      question: "Do you handle both design and development?",
      answer:
        "We offer end-to-end solutions — from wireframing and design to full-stack development and deployment.",
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