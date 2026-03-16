import React, { useState } from "react";

function Category() {

  const categories = [
    {
      title: "Strategic Planning",
      desc: "We create actionable business plans that define your vision, set clear goals, and outline steps to achieve sustainable growth in competitive markets.",
    },
    {
      title: "Process Optimization",
      desc: "Our experts analyze your existing workflows and recommend solutions to eliminate inefficiencies, reduce costs, and enhance overall productivity.",
    },
    {
      title: "Market Research & Analysis",
      desc: "We provide deep insights into customer behavior, competitor strategies, and market trends, helping you make informed business decisions with confidence.",
    },
    {
      title: "Growth & Expansion Strategy",
      desc: "From entering new markets to scaling operations, we design tailored strategies that fuel long-term profitability and strategically position your brand for sustained success.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#fff6f9]">

      <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-8">

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