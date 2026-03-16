import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function EmailFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What types of email campaigns do you create?",
      answer:
        "We create a wide range of email campaigns, including promotional emails, newsletters, welcome series, abandoned cart reminders, re-engagement campaigns, and automated drip sequences — all tailored to your goals.",
    },
    {
      id: 2,
      question: "How do you ensure high open and click-through rates?",
      answer:
        "We focus on compelling subject lines, personalized content, segmentation, and A/B testing. By analyzing audience behavior, we optimize each campaign for better engagement.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Can you help grow our email list?",
      answer:
        "Yes. We design lead magnets, signup forms, and landing pages that encourage users to subscribe while maintaining high-quality email lists.",
    },
    {
      id: 4,
      question: "Do you manage email automation?",
      answer:
        "Absolutely. We design and manage automation workflows for different customer journeys — from onboarding to post-purchase — ensuring timely, relevant communication at every stage.",
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

export default EmailFaq;