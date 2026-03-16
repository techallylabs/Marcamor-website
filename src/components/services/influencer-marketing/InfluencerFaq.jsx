import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function EmailFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What is influencer marketing?",
      answer:
"Influencer marketing uses trusted content creators and influencers to promote your brand through authentic storytelling and targeted reach."    },
    {
      id: 2,
      question: "How do you select the right influencers?",
      answer:
"We evaluate audience demographics, engagement rates, and brand alignment to ensure the influencers fit your goals."    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Is influencer marketing cost-effective?",
      answer:
"Yes. It’s one of the most effective strategies for building trust and driving conversions, especially when targeting the right audience."    },
    {
      id: 4,
      question: "How do you measure the success of a campaign?",
      answer:
"We track engagement, reach, conversions, and ROI using advanced analytics and provide detailed reports."    },
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