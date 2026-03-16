import React, { useState } from "react";

function Category() {
  const categories = [
    {
      title: "Custom Logo Creation",
      desc: "We design bespoke logos that align with your brand's voice and vision, avoiding generic templates or repetitive concepts.",
    },
    {
      title: "Brand Discovery & Conceptualization",
      desc: "Our team conducts research and brainstorming sessions to ensure your logo truly represents your brand’s core values.",
    },
    {
      title: "Versatile Design Formats",
      desc: "We provide logo designs optimized for websites, social media, print materials, and other branding needs.",
    },
    {
      title: "Rebranding & Logo Refresh",
      desc: "If your current logo feels outdated, we redesign and modernize it while maintaining your brand’s essence",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#fff6f9]">
      <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-8">

        {/* Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
              flex items-center gap-3
              px-6 py-4
              rounded-xl
              text-sm font-medium
              lg:h-[84px] h-[54px]
              min-w-[230px] lg:min-w-[308px]
              transition-all duration-300
              ${
                active === index
                  ? "bg-gradient-to-r from-[#E51F31] to-[#EE5125] text-white shadow-md"
                  : "bg-white text-black hover:bg-gray-50"
              }
              `}
            >
              <span
                className={`
                w-[3px] h-[22px] rounded-full
                ${active === index ? "bg-white" : "bg-red-500"}
                `}
              />
              {item.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

          <div className="bg-[#A9A9A9] rounded-[10px] h-[540px]" />

          <div className="bg-white rounded-[10px] p-6 lg:p-8 flex flex-col gap-4">
            <h3 className="font-semibold text-[20px]">
              {categories[active].title}
            </h3>

            <p className="text-[14px] text-black/70 leading-relaxed">
              {categories[active].desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Category;