import Image from "next/image";
import { BookIcon, GamepadIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Hobbies() {
  return (
    <section id="beyond" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Hobbies" title="What keeps me sane" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="glass spot h-full rounded-3xl p-7">
              <GamepadIcon className="h-9 w-9" style={{ color: "var(--a)" }} />
              <h3 className="ff-head mt-5 text-xl font-semibold">Gaming</h3>
              <p className="c-muted mt-2 text-sm leading-relaxed">
                A dedicated evening gamer. It&apos;s where I unwind, and where I picked up a lot of my instinct for
                good UI feedback and clean state management.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass spot h-full rounded-3xl p-7">
              <BookIcon className="h-9 w-9" style={{ color: "var(--b)" }} />
              <h3 className="ff-head mt-5 text-xl font-semibold">Reading books</h3>
              <p className="c-muted mt-2 text-sm leading-relaxed">
                I usually have a book going alongside whatever I&apos;m building. Stepping away from the screen is the
                fastest way to solve the bug I just left behind.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="group glass relative h-full min-h-[280px] overflow-hidden rounded-3xl">
              <Image src="/images/taj.jpg" alt="Traveling photo" width={1400} height={1750} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="ff-head text-xl font-semibold">Traveling</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  Exploring new places, trying new food, and experiencing different cultures.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}