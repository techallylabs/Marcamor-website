import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function SeoFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "How many logo concepts do you provide?",
      answer:
        "We typically provide 3–5 unique logo concepts, giving you multiple creative directions to choose from.",
    },
    {
      id: 2,
      question: "How long does the logo design process take?",
      answer:
        "A logo design project usually takes 1–2 weeks, depending on the complexity and feedback rounds.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Do I get the source files for my logo?",
      answer:
        "Yes. We provide all source files (AI, EPS, PNG, JPG), so you can use your logo across any medium.",
    },
    {
      id: 4,
      question: "Can you redesign my current logo?",
      answer:
        "Absolutely. We specialize in logo refresh and rebranding to give your existing identity a modern and impactful look.",
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