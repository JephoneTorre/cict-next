"use client"; // required for hooks

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    header: "What programs and courses are offered by CICT?",
    body: "The College of Information and Communications Technology (CICT) offers the following programs: Bachelor of Library and Information Science (BLIS), Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Entertainment and Media Computing (BSEMC), Bachelor of Science in Information Systems (BSIS), and Bachelor of Science in Information Technology (BSIT).",
  },
  {
    header: "How do I apply for admission or shift to a CICT program?",
    body: "To apply or transfer to a CICT program, visit the university admissions office or check the official WVSU website for application forms and requirements.",
  },
  {
    header: "Who should I contact for urgent or emergency concerns?",
    body: "For urgent matters, contact the CICT administration office at (033) 320-0870 or email cict@wvsu.edu.ph for immediate assistance.",
  },
  {
    header: "Does CICT provide IT or technical support for students?",
    body: "Yes, CICT offers IT and technical support for students via the helpdesk, email, or on-campus support staff for hardware and software issues.",
  },
];

export default function Contact() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="flex flex-col items-center mt-[176px] text-center w-full">
      
      {/* Hero */}
      <h1 className="text-[86px] font-[var(--font-major)]">
        <span className="text-[#1E1E1E]">COLLEGE CONTACT </span>
        <span className="text-[#FF6F42]">INFORMATION</span>
      </h1>

      {/* Subtext */}
      <p
        className="text-[24px] text-center mt-4"
        style={{
          fontFamily: 'var(--font-minor)',
          fontWeight: 300,
          letterSpacing: '-0.01em',
          maxWidth: '705px',
        }}
      >
        For any inquiries, collaborations, or just to say hello, we'd{' '}
        <span className="text-[#FF6F42]">love</span> to hear from you!{' '}
        <span className="text-[#FF6F42]">Reach out,</span> and let's{' '}
        <span className="text-[#FF6F42]">connect.</span>
      </p>

      {/* Boxes */}
      <div className="flex flex-wrap mt-[124px] gap-[61px] justify-center w-full">
        
        {/* Box 1 */}
        <div className="relative w-full sm:w-[365px] h-[247px] bg-white rounded-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex flex-col items-center pt-[50px]">
          <Image src="/images/firstbox_icon.png" alt="Address Icon" width={56} height={56} className="absolute -top-[28px]" />
          <p className="mt-[5px] text-[20px] sm:text-[24px] font-[var(--font-major)] font-bold text-[#FF6F42]">ADDRESS</p>
          <p className="mt-2 text-[14px] sm:text-[16px] font-[var(--font-minor)] font-normal px-4 text-center sm:px-6">
            West Visayas State University, La Paz, Iloilo City, Philippines
          </p>
        </div>

        {/* Box 2 */}
        <div className="relative w-full sm:w-[365px] h-[247px] bg-white rounded-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex flex-col items-center pt-[50px]">
          <Image src="/images/office_icon.png" alt="Office Icon" width={56} height={56} className="absolute -top-[28px]" />
          <p className="mt-[5px] text-[20px] sm:text-[24px] font-[var(--font-major)] font-bold text-[#FF6F42]">OFFICE NAME</p>
          <p className="mt-2 text-[14px] sm:text-[16px] font-[var(--font-minor)] font-normal px-4 text-center sm:px-6">
            College of Information and Communications Technology (CICT)<br />
            Office hours: Monday – Friday, 8:00 AM – 5:00 PM
          </p>
        </div>

        {/* Box 3 */}
        <div className="relative w-full sm:w-[365px] h-[247px] bg-white rounded-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex flex-col items-center pt-[50px]">
          <Image src="/images/contact_icon.png" alt="Contact Icon" width={56} height={56} className="absolute -top-[28px]" />
          <p className="mt-[5px] text-[20px] sm:text-[24px] font-[var(--font-major)] font-bold text-[#FF6F42]">CONTACT INFORMATION</p>
          <p className="mt-2 text-[14px] sm:text-[16px] font-[var(--font-minor)] font-normal w-[280px] sm:w-[300px] text-center">
            Phone: (033) 320-0870 (local 1234)
          </p>
          <p className="mt-2 text-[14px] sm:text-[16px] font-[var(--font-minor)] font-normal w-[280px] sm:w-[300px] text-center">
            Email: cict@wvsu.edu.ph
          </p>
        </div>

      </div>

      {/* FAQ */}
      <div className="mt-[120px] w-full bg-[#1E1E1E] flex justify-center items-start relative px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1200px]">
          
         {/* Left */}
        <div className="flex flex-col flex-1 max-w-[700px]">
        <h2 className="pt-[198px] lg:pt-[198px] text-left text-[48px] sm:text-[64px] font-[var(--font-major)] font-bold leading-tight w-full max-w-[1000px] break-words">
        <span className="text-white block whitespace-nowrap">FREQUENTLY ASKED</span>
        <span className="text-[#FF6F42] block whitespace-nowrap">QUESTIONS</span>
      </h2>




            <div className="mt-10 flex flex-col gap-0">
              {items.map((item, index) => {
                const isOpen = active === index;
                return (
                  <div key={index} className={`w-[576px] ${index === 0 ? "border-t border-white" : ""} mb-4`}>
                    <button
                      onClick={() => setActive(isOpen ? null : index)}
                      className="w-full flex justify-start items-center h-[39px] text-left text-white text-[16px] leading-[39px] gap-4 border-b border-white font-[var(--font-minor)] font-normal"
                    >
                      {item.header}
                      <div className="ml-auto">
                        <img
                          src={isOpen ? "/images/minus_icon.png" : "/images/chevron_down.png"}
                          alt={isOpen ? "minus" : "chevron down"}
                          className="w-6 h-6"
                        />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] py-4 border-b border-white" : "max-h-0"}`}>
                      <p className="text-white text-[16px] leading-[24px] px-4 text-left font-[var(--font-minor)] font-normal">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-start mt-10 lg:mt-[300px] lg:ml-[197px] lg:mb-[353px] flex-1">
            <Image src="/images/cictlogo.png" alt="CICT Logo" width={331} height={330} className="object-contain" />
          </div>

        </div>
      </div>
    </main>
  );
}
