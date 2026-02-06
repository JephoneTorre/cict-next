import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, FileText, GraduationCap } from 'lucide-react';
import programsData from '../../data/programs.json';
import Image from 'next/image';

interface Program {
    id: string;
    code: string;
    name: string;
    href: string;
    logo: string;
}

// Requires params to be a Promise
interface PageProps {
    params: Promise<{ id: string }>;
}

// Generate static paths for all programs at build time
export async function generateStaticParams() {
    return programsData.map((program) => ({
        id: program.id,
    }));
}

export default async function ProgramDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const program = (programsData as Program[]).find((p) => p.id === id);
    if (!program) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white pb-20 font-sans">

            <section className="relative w-full min-h-148 bg-orange-light flex flex-col items-center justify-center px-6 md:px-20 text-center overflow-hidden">

                {/* Dynamic Background Watermark */}
                {/* Left SVG */}
                <div className="absolute -left-50 bottom-12 opacity-20 w-125 h-125">
                    <Image
                        src={program.logo}
                        alt=""
                        fill
                        className="object-contain object-bottom-left brightness-0 invert"
                        priority
                    />
                </div>

                {/* Right SVG */}
                <div className="absolute -right-50 top-1/2 -translate-y-1/2 opacity-20 w-125 h-125">
                    <Image
                        src={program.logo}
                        alt=""
                        fill
                        className="object-contain object-right brightness-0 invert"
                        priority
                    />
                </div>

                {/* Back Button */}
                <div className="absolute top-25 left-50 z-20">
                    <Link
                        href="/programs"
                        className="group flex items-center gap-2 bg-white text-orange-light px-6 py-2 rounded-3xl text-2xl hover:bg-gray-100 transition-all active:scale-95"
                    >
                        <ChevronLeft size={30} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-normal">Back to Programs</span>
                    </Link>
                </div>

                {/* Program Title */}
                <h1 className="relative z-10 text-white text-7xl font-normal font-major max-w-6xl leading-tight mt-16 md:mt-0 drop-shadow-sm">
                    {program.name}
                </h1>
            </section>
        </main>
    );
}