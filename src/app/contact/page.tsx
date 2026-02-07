import Image from "next/image";

export default function Contact() {
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
          fontFamily: 'var(--font-minor)', // Inter
          fontWeight: 300,                  // slimmer
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
    </main>
  );
}
