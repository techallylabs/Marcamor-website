import React, { useState, useRef } from "react";
import { ChevronRight, MoveRight } from "lucide-react";

export default function ServicesMegaMenu() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Digital Marketing");
  const timeoutRef = useRef(null);

  const servicesData = {

    "Digital Marketing": [
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Search Engine Optimization", path: "/services/digital-marketing/seo" },
      { name: "Email Marketing", path: "/services/digital-marketing/email-marketing" },
      { name: "Performance Marketing", path: "/services/digital-marketing/performance-marketing" },
      { name: "Content Marketing", path: "/services/digital-marketing/content-marketing" },
      { name: "Social Media Marketing", path: "/services/digital-marketing/social-media-marketing" },
      { name: "Affiliate Marketing", path: "/services/digital-marketing/affiliate-marketing" },
      { name: "Influencer Marketing", path: "/services/digital-marketing/influencer-marketing" },
      { name: "YouTube Marketing", path: "/services/digital-marketing/youtube-marketing" },
      { name: "WhatsApp Marketing", path: "/services/digital-marketing/whatsapp-marketing" },
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
      { name: "Franchise Consulting", path: "/services/business-consulting/franchise-consulting" },
      { name: "Sales and Revenue Strategy", path: "/services/business-consulting/sales-revenue-strategy" },
      { name: "Business Process Optimization", path: "/services/business-consulting/business-process-optimization" },
    ],

    "Website and App Development": [
      { name: "Website and App Development", path: "/services/web-app-development/web-app-development" },
      { name: "Custom Web and App Design", path: "/services/web-app-development/custom-web-app-design" },
      { name: "E-commerce Development", path: "/services/web-app-development/ecommerce-development" },
      { name: "Mobile App Development Android iOS", path: "/services/web-app-development/mobile-app-development" },
      { name: "API Integration", path: "/services/development/api-integration" },
      { name: "Maintenance and AMC Plans", path: "/services/development/maintenance" },
    ],

    "Technology and Product Development": [
      { name: "Technology and Product Development", path: "/services/product" },
      { name: "SaaS Product Development", path: "/services/product/saas-development" },
      { name: "MVP Building for Startups", path: "/services/product/mvp-development" },
      { name: "No Code and Low Code Development", path: "/services/product/no-code" },
      { name: "ERP and CRM Integration", path: "/services/product/erp-crm" },
    ],

    "Performance and Analytics": [
      { name: "Performance and Analytics", path: "/services/performance" },
      { name: "Marketing Analytics and BI Reporting", path: "/services/performance/analytics" },
      { name: "GTM and Analytics", path: "/services/performance/gtm" },
      { name: "Heatmap and Behavior Tracking", path: "/services/performance/heatmap" },
      { name: "KPI Dashboard Setup", path: "/services/performance/kpi-dashboard" },
      { name: "Conversion Optimization", path: "/services/performance/conversion" },
    ],

    "Market Research and Consumer Insights": [
      { name: "Market Research and Consumer Insights", path: "/services/research" },
      { name: "Market Feasibility Studies", path: "/services/research/market-feasibility" },
      { name: "Consumer Behavior Analysis", path: "/services/research/consumer-behavior" },
      { name: "Competitor Analysis", path: "/services/research/competitor-analysis" },
      { name: "Brand Perception Studies", path: "/services/research/brand-perception" },
      { name: "Industry and Trends Reports", path: "/services/research/industry-trends" },
      { name: "Customer Segmentation and Process Building", path: "/services/research/customer-segmentation" },
      { name: "Product Testing and Feedback Loops", path: "/services/research/product-testing" },
      { name: "Geographical Market Entry Studies", path: "/services/research/market-entry" },
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

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* BUTTON */}
      <button className="flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition">
        Services
        <span className="w-[5px] h-[5px] bg-[#EE5125] rounded-full"></span>
      </button>

      {/* MEGA MENU */}
      {open && (
        <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 z-40 w-[842px] h-[550px] text-black">

          <div
            style={{
              backdropFilter: "blur(100px)",
              WebkitBackdropFilter: "blur(100px)",
              backgroundColor: "#313131"
            }}
            className="rounded-[20px] border-2 border-white shadow-2xl flex flex-col gap-[16px] p-8"
          >

            <div className="flex gap-[16px]">

              {/* LEFT */}
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

              {/* RIGHT */}
              <div className="w-1/2 bg-[#F3F3F3] p-[16px] rounded-[14px]">
                <h3 className="font-bold py-[16px] px-[12px] text-[18px]">
                  {active}
                </h3>

                <ul>
                  {servicesData[active].map((item) => (
                    <li
                      key={item.name}
                      onClick={() => navigate(item.path)}
                      className="cursor-pointer font-medium p-[14px] hover:bg-black/10 rounded-lg transition"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-4">

              <div
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 w-[140px] h-[37px] rounded-full bg-gradient-to-r from-[#E51F31] to-[#EE5125] text-white font-semibold text-sm cursor-pointer"
              >
                Get Started
                <MoveRight size={16} />
              </div>

              <div className="flex items-center gap-6 text-white/50 text-sm font-medium">
                <span className="cursor-pointer hover:text-white">Facebook</span>
                <div className="w-px h-4 bg-white/40"></div>
                <span className="cursor-pointer hover:text-white">Instagram</span>
                <div className="w-px h-4 bg-white/40"></div>
                <span className="cursor-pointer hover:text-white">LinkedIn</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}