import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function SocialFaq() {
  const [activeId, setActiveId] = useState(null);

  const faqsLeft = [
    {
      id: 1,
      question: "What social media platforms do you manage?",
      answer:
        "We manage all major platforms including Instagram, Facebook, LinkedIn, Twitter (X), and YouTube. Based on your audience and goals, we tailor a platform-specific strategy to maximize impact.",
    },
    {
      id: 2,
      question: "Can you help with content creation too?",
      answer:
        "Yes, our in-house team creates high-quality graphics, videos, captions, and stories that align with your brand voice and strategy — from ideation to posting.",
    },
  ];

  const faqsRight = [
    {
      id: 3,
      question: "How do you measure the success of a campaign?",
      answer:
        "We track key metrics like engagement rate, reach, impressions, click-throughs, conversions, and ROI. Regular reports help you see what’s working and where we can improve.",
    },
    {
      id: 4,
      question: "Is your service suitable for small businesses or startups?",
      answer:
        "Absolutely. We design scalable strategies that fit your stage of growth, ensuring even new brands get strong visibility and engagement within their budget.",
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

export default SocialFaq;