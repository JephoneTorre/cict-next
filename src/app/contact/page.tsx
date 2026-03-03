"use client";

import Image from "next/image";
import { useState } from "react";

interface InfoBox {
  icon: string;
  title: string;
  content?: string;
  phone?: string;
  email?: string;
}

const infoBoxes: InfoBox[] = [
  {
    icon: "/icons/firstbox_icon.svg",
    title: "ADDRESS",
    content: "West Visayas State University, La Paz, Iloilo City",
  },
  {
    icon: "/icons/office_icon.svg",
    title: "OFFICE NAME",
    content:
      "College of Information and Communications Technology (CICT)\nOffice Hours: 8:00 AM – 5:00 PM",
  },
  {
    icon: "/icons/contact_icon.svg",
    title: "CONTACT INFO",
    phone: "+6312345689",
    email: "cict@wvsu.edu.ph",
  },
];

const faqItems = [
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
    body: "Call +6312345689 or email cict@wvsu.edu.ph",
  },
  {
    header: "Does CICT provide IT or technical support for students?",
    body: "Yes, CICT provides technical support through the helpdesk and on-campus staff.",
  },
];

export default function Contact() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <main className="w-full text-center flex flex-col items-center">
      {/* HERO */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-major tracking-tight">
          <span className="text-neutral-900">COLLEGE CONTACT </span>
          <span className="text-orange-light">INFORMATION</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto text-neutral-600 font-minor">
          For any inquiries or collaborations, we'd{" "}
          <span className="text-orange-light">love</span> to hear from you.{" "}
          <span className="text-orange-light">Reach out</span> and let's{" "}
          <span className="text-orange-light">connect.</span>
        </p>
      </section>

      {/* INFO BOXES */}
      <section className="w-full flex flex-wrap justify-center gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-18 px-4 sm:px-6 lg:px-8 mt-22">
        {infoBoxes.map((box, i) => (
          <div
            key={i}
            className="relative w-72 sm:w-80 h-56 sm:h-60 bg-white rounded-xl shadow-xl flex flex-col items-center pt-12"
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
            {"phone" in box || "email" in box ? (
              <div className="text-sm text-neutral-600 mt-3 font-minor px-4 sm:px-6">
                {box.phone && (
                  <p>
                    <a href={`tel:${box.phone}`} className="hover:underline">
                      Phone: {box.phone}
                    </a>
                  </p>
                )}
                {box.email && (
                  <p>
                    <a href={`mailto:${box.email}`} className="hover:underline">
                      Email: {box.email}
                    </a>
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-neutral-600 mt-3 whitespace-pre-line font-minor px-4 sm:px-6">
                {box.content}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="w-full bg-neutral-900 mt-20">
        <div className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* LOGO */}
          <div className="flex justify-center order-1 lg:order-2 mb-6 lg:mb-0 mt-16">
            <Image
              src="/icons/cictlogo.svg"
              alt="CICT Logo"
              width={300}
              height={300}
              className="w-52 sm:w-64 lg:w-72 h-auto"
            />
          </div>

          {/* FAQ CONTENT */}
          <div className="order-2 lg:order-1 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-major mb-6 sm:mb-8 leading-tight">
              <span className="text-white block">FREQUENTLY ASKED</span>
              <span className="text-orange-light block">QUESTIONS</span>
            </h2>

            <div className="flex flex-col font-minor">
              {faqItems.map((item, index) => {
                const isOpen = activeFAQ === index;
                const isFirst = index === 0;

                return (
                  <div key={index}>
                    {isFirst && (
                      <div className="border-t border-neutral-700" />
                    )}

                    <button
                      className="flex justify-between items-start gap-4 w-full py-4 sm:py-5 text-white font-semibold border-b border-neutral-700"
                      onClick={() =>
                        setActiveFAQ(isOpen ? null : index)
                      }
                    >
                      <span className="text-left leading-snug pr-4">
                        {item.header}
                      </span>
                      <span className="text-xl shrink-0">
                        {isOpen ? "-" : "⌵"}
                      </span>
                    </button>

                    {isOpen && (
                      <>
                        <p className="text-neutral-300 py-3 leading-relaxed">
                          {item.body}
                        </p>
                        <div className="border-b border-neutral-700" />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12">
          {/* LEFT */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-major">
              <span className="text-neutral-900">Get in </span>
              <span className="text-orange-light">Touch</span>
            </h2>
            <p className="mt-4 max-w-md text-neutral-600 text-base font-minor">
              Whether you have questions, need support, or want to learn more — our team is here to help.
            </p>
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.facebook.com/WVSUCICT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="fb"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
            <div className="text-left">
              <Image src="/icons/home.svg" alt="address" width={36} height={36} />
              <h3 className="text-lg font-major font-bold text-orange-light mt-4">
                Our Address
              </h3>
              <p className="text-neutral-600 font-minor mt-2">
                WVSU, La Paz, Iloilo City, Philippines
              </p>
            </div>

            <div className="text-left">
              <Image src="/icons/mobile.svg" alt="contact" width={36} height={36} />
              <h3 className="text-lg font-major font-bold text-orange-light mt-4">
                Contact Info
              </h3>
              <p className="text-neutral-600 font-minor mt-2">
                <a href="tel:+6312345689" className="hover:underline">
                  Phone: +6312345689
                </a>
              </p>
              <p className="text-neutral-600 font-minor mt-1">
                <a href="mailto:cict@wvsu.edu.ph" className="hover:underline">
                  Email: cict@wvsu.edu.ph
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* MAP */}
        <section className="w-full flex justify-center mt-20 sm:mt-24">
          <div className="w-full max-w-6xl aspect-[1148/539] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=West%20Visayas%20State%20University%20La%20Paz%20Iloilo&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        {/* CONNECT */}
        <section className="w-full flex justify-center mt-28 sm:mt-36">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-major text-orange-light text-center">
            Connect with Us!
          </h2>
        </section>

        <p className="text-lg font-minor text-[#363636] text-center mt-10 max-w-3xl mx-auto px-4">
          We love to hear from you! If you have any questions, comments, or feedback, you can email or call us.
        </p>
      </section>
    </main>
  );
}