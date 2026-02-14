"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    header: "What programs and courses are offered by CICT?",
    body: "The College of Information and Communications Technology (CICT) offers BLIS, BSCS, BSEMC, BSIS, and BSIT.",
  },
  {
    header: "How do I apply or shift to a CICT program?",
    body: "Visit the university admissions office or check the official WVSU website.",
  },
  {
    header: "Who should I contact for urgent concerns?",
    body: "Call (033) 320-0870 or email cict@wvsu.edu.ph.",
  },
  {
    header: "Does CICT provide IT support?",
    body: "Yes, CICT provides technical support via helpdesk and on-campus staff.",
  },
];

export default function Contact() {
  const [active, setActive] = useState(null);

  return (
    <main className="flex flex-col items-center mt-44 text-center w-full">

      {/* HERO */}
      <h1 className="text-6xl font-major tracking-tight">
        <span className="text-neutral-900">COLLEGE CONTACT </span>
        <span className="text-orange-light">INFORMATION</span>
      </h1>

      <p className="text-lg mt-2 max-w-[44rem] text-neutral-600 font-minor">
        For any inquiries or collaborations, we'd{" "}
        <span className="text-orange-light">love</span> to hear from you.{" "}
        <span className="text-orange-light">Reach out</span> and let's{" "}
        <span className="text-orange-light">connect.</span>
      </p>

      {/* INFO BOXES */}
      <div className="flex flex-wrap justify-center gap-16 mt-28 w-full">
        {[
          {
            icon: "/icons/firstbox_icon.png",
            title: "ADDRESS",
            content: "West Visayas State University, La Paz, Iloilo City",
          },
          {
            icon: "/icons/office_icon.png",
            title: "OFFICE NAME",
            content:
              "College of Information and Communications Technology (CICT)\nOffice Hours: 8:00 AM – 5:00 PM",
          },
          {
            icon: "/icons/contact_icon.png",
            title: "CONTACT INFO",
            content: "Phone: (033) 320-0870\nEmail: cict@wvsu.edu.ph",
          },
        ].map((box, i) => (
          <div
            key={i}
            className="relative w-[22rem] h-[15rem] bg-white rounded-xl shadow-xl flex flex-col items-center pt-12"
          >
            <Image
              src={box.icon}
              alt={box.title}
              width={56}
              height={56}
              className="absolute -top-7"
            />
            <p className="text-lg font-major font-bold text-orange-light">
              {box.title}
            </p>
            <p className="text-sm text-neutral-600 mt-3 whitespace-pre-line font-minor px-6">
              {box.content}
            </p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <section className="w-full bg-neutral-900 mt-32 py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-major text-left leading-tight">
              <span className="text-white block">FREQUENTLY ASKED</span>
              <span className="text-orange-light block">QUESTIONS</span>
            </h2>

            <div className="mt-10">
              {items.map((item, index) => {
                const isOpen = active === index;
                return (
                  <div key={index} className="border-t border-white">
                    <button
                      onClick={() => setActive(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-white py-4 text-left font-minor"
                    >
                      {item.header}
                      <Image
                        src={
                          isOpen
                            ? "/icons/minus_icon.png"
                            : "/icons/chevron_down.png"
                        }
                        alt="toggle"
                        width={22}
                        height={22}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all ${
                        isOpen ? "max-h-40 pb-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-neutral-300 text-sm leading-6 text-left font-minor">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/images/cictlogo.png"
              alt="CICT Logo"
              width={330}
              height={330}
            />
          </div>
        </div>
      </section>

      

      {/* GET IN TOUCH */}
      <section className="w-full bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-major text-left">
              <span className="text-neutral-900">Get in </span>
              <span className="text-orange-light">Touch</span>
            </h2>

            <p className="mt-4 max-w-md text-neutral-600 text-base font-minor text-left">
              Whether you have questions, need support, or want to learn more —
              our team is here to help.
            </p>

            <div className="flex gap-3 mt-6 justify-start">
              <Image src="/icons/facebook.png" alt="fb" width={40} height={40} />
              <Image src="/icons/instagram.png" alt="ig" width={40} height={40} />
              <Image src="/icons/linkedin.png" alt="in" width={40} height={40} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-14">
            <div className="text-left">
              <Image src="/icons/home.png" alt="address" width={36} height={36} />
              <h3 className="text-lg font-major font-bold text-orange-light mt-4">
                Our Address
              </h3>
              <p className="text-neutral-600 font-minor mt-2">
                WVSU, La Paz, Iloilo City, Philippines
              </p>
            </div>

            <div className="text-left">
              <Image src="/icons/mobile.png" alt="contact" width={36} height={36} />
              <h3 className="text-lg font-major font-bold text-orange-light mt-4">
                Contact Info
              </h3>

              <p className="text-neutral-600 font-minor mt-2">
                <span className="text-orange-dark">Phone:</span> (033) 320-0870
              </p>

              <p className="text-neutral-600 font-minor mt-1">
                <span className="text-orange-dark">Email:</span> cict@wvsu.edu.ph
              </p>
            </div>
            
          </div>
          

        </div>
        {/* MAP */}
      <section className="w-full flex justify-center mt-[150px]">
        <div className="w-[1148px] h-[538.69px] rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=West%20Visayas%20State%20University%20La%20Paz%20Iloilo&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

            {/* CONNECT WITH US */}
          <section className="w-full flex justify-center mt-[217px]">
            <h2 className="text-[64px] text-orange-light font-major text-center">
              Connect with Us!
            </h2>
          </section>
            {/* BELOW CONNECT WITH US */}
            <p className="text-lg font-minor text-[#363636] text-center mt-6">
              We love to hear from you! If you have any questions, comments, or feedback, you can email or call us.
            </p>




      </section>

    </main>
  );
}
