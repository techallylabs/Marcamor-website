import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function AffiliateFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "Do you only design logos or complete branding packages?",
      answer:
        "We offer both options. If you need a single logo, we can deliver that. However, our strength lies in creating complete brand identity packages, which include logo design, color palette, typography, brand guidelines, and more — ensuring your brand is consistent across all platforms.",
    },
    {
      id: 2,
      question: "Can you redesign or refresh an existing brand?",
      answer:
        "Yes. Many businesses approach us to modernize their existing brand while retaining its core essence. We analyze your current identity, audience perception, and market trends to create an updated, refreshed look that feels relevant and future-ready.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "Do you provide marketing collaterals along with branding?",
      answer:
        "Absolutely. We design brochures, business cards, presentations, social media creatives, and advertising materials that maintain consistency with your brand identity and support your marketing efforts.",
    },
    {
      id: 4,
      question: "What makes your branding process different?",
      answer:
        "Our process is collaborative and strategy-driven. We don’t just focus on design aesthetics — we understand your business goals, target audience, and industry trends to create a brand identity that works across every touchpoint and drives real business impact.",
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