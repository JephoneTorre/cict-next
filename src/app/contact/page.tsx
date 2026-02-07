export default function Contact() {
  return (
    <main className="flex flex-col items-center mt-[176px] text-center">
      {/* Hero */}
      <h1 className="text-[86px] font-[var(--font-major)]">
        <span className="text-[#1E1E1E]">COLLEGE CONTACT </span>
        <span className="text-[#FF6F42]">INFORMATION</span>
      </h1>

      {/* Subtext - now very close to hero */}
      <p
        className="text-[24px] text-center"
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
    </main>
  );
}
