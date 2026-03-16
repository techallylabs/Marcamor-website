import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function YoutubeFaq() {
  const [activeId, setActiveId] = useState(null);

 const faqsLeft = [
    {
      id: 1,
      question: "Why is YouTube marketing important?",
      answer:
        "YouTube has billions of users and is a top platform for video discovery. It’s essential for building awareness and driving conversions.",
    },
    {
      id: 2,
      question: "Do I need professional videos for YouTube marketing?",
      answer:
        "Not always. Even simple videos can perform well with the right strategy and optimization.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "How much does YouTube advertising cost?",
      answer:
        "Costs vary based on audience, goals, and ad type. We create campaigns that fit your budget while maximizing ROI.",
    },
    {
      id: 4,
      question: "Can YouTube generate leads and sales?",
      answer:
        "Absolutely. With the right targeting and creative approach, YouTube can drive traffic, leads, and significant business growth.",
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

export default YoutubeFaq;