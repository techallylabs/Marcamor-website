import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function SeoFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What is digital marketing and how does it work?",
      answer:
        "Digital marketing promotes products or services through online channels such as search engines, social media, email and websites. It helps businesses reach targeted audiences and generate measurable results.",
    },
    {
      id: 2,
      question: "Why is digital marketing important for businesses?",
      answer:
        "Digital marketing helps businesses reach a wider audience, build brand awareness and generate more leads with measurable results.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "How do digital marketing agencies help businesses?",
      answer:
        "Agencies create strategies, run campaigns, optimize performance and analyze results to help businesses grow online.",
    },
    {
      id: 4,
      question: "Is digital marketing better than traditional marketing?",
      answer:
        "Digital marketing is more measurable, cost-effective and allows precise audience targeting compared to traditional marketing.",
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

export default SeoFaq;