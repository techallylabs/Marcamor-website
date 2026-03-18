import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function ProcessFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What is business process optimization?",
      answer:
        "It’s the practice of improving workflows, operations, and systems to increase efficiency, reduce costs, and improve overall business performance.",
    },
    {
      id: 2,
      question: "Can you help automate our processes?",
      answer:
        "Yes, we specialize in integrating automation tools like CRMs, workflow management software, and AI-based systems.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Do you work with SMEs and startups?",
      answer:
        "Absolutely. Our solutions are scalable and tailored to businesses of all sizes.",
    },
    {
      id: 4,
      question: "How long does the optimization process take?",
      answer:
        "The timeline depends on the complexity of your current processes but typically ranges from 4–8 weeks.",
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

export default ProcessFaq;