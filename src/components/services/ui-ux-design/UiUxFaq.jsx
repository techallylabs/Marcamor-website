import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function SeoFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What is UI/UX design, and why is it important?",
      answer:
        "UI/UX design focuses on the look, feel, and functionality of your website or app, ensuring that users can navigate easily and have a positive experience that encourages them to take action.",
    },
    {
      id: 2,
      question: "Do you provide both design and development?",
      answer:
        "Yes, we offer end-to-end solutions, from wireframing and design to front-end development, ensuring a smooth transition from concept to execution.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Do you provide marketing collaterals along with branding?",
      answer:
        "Absolutely. We specialize in improving outdated interfaces and enhancing user experience to boost engagement and conversions.",
    },
    {
      id: 4,
      question: "How long does a UI/UX design project take?",
      answer:
        "The timeline depends on project complexity, but most designs are completed within 3–6 weeks, including revisions and usability testing.",
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