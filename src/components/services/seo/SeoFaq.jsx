import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function SeoFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What is SEO and why is it important?",
      answer:
        "SEO helps your website rank higher on search engines like Google, increasing visibility, traffic, and conversions without paid ads.",
    },
    {
      id: 2,
      question: "Does Marcamor offer local SEO?",
      answer:
        "Yes. We optimize for local searches to ensure your business is visible to customers in your area.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term investment. Most businesses see noticeable improvements within 3–6 months of consistent optimization.",
    },
    {
      id: 4,
      question: "Can SEO work with my paid campaigns?",
      answer:
        "Absolutely. SEO and paid ads complement each other, creating a holistic digital strategy for stronger results.",
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
    <section className="bg-[#fff6f9]">

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

export default SeoFaq;