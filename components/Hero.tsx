import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div>
          
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fog sm:text-5xl lg:text-[3.4rem]">
            Full-stack software engineer, building production-style web apps end to end.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            I&apos;m Kallol Dey, a full-stack software engineer in Dhaka, Bangladesh.
            I design and ship production-style platforms — dashboards, marketplaces,
            payment flows — across the JavaScript/TypeScript ecosystem, .NET, and Java.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-copper"
            >
              View projects
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm text-fog transition-colors hover:border-amber hover:text-amber"
            >
              Download resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            open to Software Engineering internships
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative mx-auto w-56 overflow-hidden rounded-xl border border-line bg-surface sm:w-64">
            <Image
              src="/images/headshot.jpg"
              alt="Portrait of Kallol Dey"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d66706]" />
              
              <span className="ml-2 font-mono text-[11px] text-muted">My Information</span>
            </div>
            <div className="space-y-2 px-4 py-4 font-mono text-[12.5px] leading-relaxed">
              <p className="text-muted">
                <span className="text-teal">$</span> Me
              </p>
              <p className="text-fog">Kallol Dey — Software Engineer</p>
              <p className="text-muted">
                <span className="text-teal">$</span> Primary Technologies
              </p>
              <p className="text-fog">Next.js · NestJS · Express · MongoDB</p>
              <p className="text-muted">
                <span className="text-teal">$</span> Location
              </p>
              <p className="text-fog">
                Bashundhara, Dhaka<span className="cursor" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
