import React, { useState, useRef } from "react";
import { ChevronRight, MoveRight } from "lucide-react";

export default function ServicesMegaMenu() {

const [open, setOpen] = useState(false);
const [active, setActive] = useState("Digital Marketing");
const timeoutRef = useRef(null);

  const servicesData = {
  "Digital Marketing": [
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "SEO", path: "/services/digital-marketing/seo" },
  { name: "Performance Marketing", path: "/services/digital-marketing/performance-marketing" },
  { name: "Social Media Marketing", path: "/services/digital-marketing/social-media-marketing" },
  { name: "Email Marketing", path: "/services/digital-marketing/email-marketing" },
  { name: "Content Marketing", path: "/services/digital-marketing/content-marketing" },
  { name: "Affiliate Marketing", path: "/services/digital-marketing/affiliate-marketing" },
  { name: "Influencer Marketing", path: "/services/digital-marketing/influencer-marketing" },
  { name: "YouTube Marketing", path: "/services/digital-marketing/youtube-marketing" },
],

   "Branding & Design": [
  { name: "Branding and Design", path: "/services/branding-design/branding-design" },
  { name: "Brand Strategy", path: "/services/branding-design/brand-strategy" },

  { name: "Logo Design", path: "/services/branding-design/logo-design" },
  { name: "Brand Identity and Guidelines", path: "/services/branding-design/brand-identity-guidelines" },
  { name: "Packaging Design", path: "/services/branding-design/packaging-design" },
  { name: "Corporate Communication Design", path: "/services/branding-design/corporate-communication-design" },
  { name: "UI/UX Design", path: "/services/branding-design/ui-ux-design" },
],

    "Business Consulting": [
      { name: "Business Consulting", path: "/services/business-consulting/business-consulting" },
      { name: "Startup and SME Consulting", path: "/services/business-consulting/startup-sme-consulting" },
      { name: "Go To Market Strategy", path: "/services/business-consulting/go-to-market-strategy" },
      
    ],

    "Web & App Development": [
      { name: "Web Development", path: "/services/web-development" },
      { name: "Mobile App Development", path: "/services/mobile-app-development" },
      { name: "Custom Software Development", path: "/services/custom-software-development" },
    ],

    "Technology & Product Development": [
      { name: "Video Production", path: "/services/video-production" },
      { name: "Photography", path: "/services/photography" },
      { name: "Copywriting", path: "/services/copywriting" },
    ],

    "Market Research & Consumer Insights": [
      { name: "Consumer Research", path: "/services/consumer-research" },
      { name: "Competitor Analysis", path: "/services/competitor-analysis" },
      { name: "Industry Insights", path: "/services/industry-insights" },
    ],

    "Performance & Analytics": [
      { name: "Analytics Setup", path: "/services/analytics-setup" },
      { name: "Conversion Tracking", path: "/services/conversion-tracking" },
      { name: "Data Reporting", path: "/services/data-reporting" },
    ],
  };

const handleMouseEnter = () => {
clearTimeout(timeoutRef.current);
setOpen(true);
};

const handleMouseLeave = () => {
timeoutRef.current = setTimeout(() => {
setOpen(false);
}, 200);
};

const navigate = (path) => {
window.location.href = path;
};

return ( <div
   className="relative"
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}
 >

  <button className="flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition">
    Services
    <span className="w-[5px] h-[5px] bg-[#EE5125] rounded-full"></span>
  </button>

  {open && (

    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 z-40 w-[842px]">

      <div
        style={{
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(100px)",
          backgroundColor: "#313131"
        }}
        className="rounded-[20px] border-2 border-white shadow-2xl flex flex-col gap-[16px] text-black p-8"
      >

        <div className="flex gap-[16px]">

          <div className="w-1/2 bg-[#F3F3F3] p-[16px] rounded-[14px]">

            <h3 className="font-bold py-[16px] px-[12px] text-[18px]">
              Services
            </h3>

            <ul>
              {Object.keys(servicesData).map((category) => (

                <li
                  key={category}
                  onMouseEnter={() => setActive(category)}
                  className="cursor-pointer flex justify-between items-center font-medium p-[14px] hover:bg-black/10 rounded-lg transition"
                >

                  {category}
                  <ChevronRight size={18} />

                </li>

              ))}
            </ul>

          </div>

          <div className="w-1/2 bg-[#F3F3F3] p-[16px] rounded-[14px]">

            <h3 className="font-bold py-[16px] px-[12px] text-[18px]">
              {active}
            </h3>

            <ul>
              {servicesData[active].map((item) => (

                <li
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="cursor-pointer flex justify-between items-center font-medium p-[14px] hover:bg-black/10 rounded-lg transition"
                >

                  {item.name}

                </li>

              ))}
            </ul>

          </div>

        </div>

        <div className="flex justify-between items-center mt-4">

          <div
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center gap-2 w-[140px] h-[37px] rounded-full bg-gradient-to-r from-[#E51F31] to-[#EE5125] text-white font-semibold text-sm cursor-pointer "
          >

            Get Started
            <MoveRight size={16} />

          </div>

        </div>

      </div>

    </div>

  )}

</div>


);
}
