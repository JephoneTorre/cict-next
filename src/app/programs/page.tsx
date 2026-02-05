import Image from 'next/image';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row h-148">
        <div className="relative w-180 md:w-1/2 h-full">
          <Image
            src="/program_assets/cict.png"
            alt="WVSU CICT Building"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-180 md:w-1/2 bg-orange-light flex flex-col justify-center p-20 text-white">
          <h1 className="text-5xl font-medium font-major mb-6">Programs and Curriculum</h1>
          <p className="max-w-md text-base font-light font-minor leading-relaxed tracking-tight">
            Explore our undergraduate and graduate degree programs and take the next step toward your goals.
          </p>
        </div>
      </section>

    </main>
  );
}