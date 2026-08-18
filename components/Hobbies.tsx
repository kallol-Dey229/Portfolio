import Image from "next/image";
import { BookIcon, GamepadIcon } from "./Icons";

export default function Hobbies() {
  return (
    <section id="beyond" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-4">Hobbies</p>
        <h2 className="font-display text-2xl font-semibold text-fog sm:text-3xl">
          What keeps me sane
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card-hover rounded-xl border border-line bg-surface p-6">
            <GamepadIcon className="h-7 w-7 text-amber" />
            <h3 className="mt-4 font-display text-lg font-medium text-fog">Gaming</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A dedicated evening gamer — it&apos;s where I unwind, and honestly where I
              picked up a lot of my instinct for good UI feedback and clean state
              management.
            </p>
          </div>

          <div className="card-hover rounded-xl border border-line bg-surface p-6">
            <BookIcon className="h-7 w-7 text-amber" />
            <h3 className="mt-4 font-display text-lg font-medium text-fog">
              Reading books
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              I usually have a book going alongside whatever I&apos;m building — mostly
              because stepping away from the screen is the fastest way to solve the
              bug I just left behind.
            </p>
          </div>

          <div className="card-hover group relative overflow-hidden rounded-xl border border-line">
            <Image
              src="/images/taj.jpg"
              alt="Traveling photo"
              width={1400}
              height={1750}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-lg font-medium text-fog">Traveling</h3>
              <p className="mt-1 text-sm leading-relaxed text-fog/80">
                One of my biggest hobbies is exploring new places, trying new food, and experiencing different cultures.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-line">
          <Image
            src="/images/image-3.jpg"
            alt="Kallol Dey relaxing at the beach"
            width={1400}
            height={933}
            className="h-56 w-full object-cover sm:h-72"
          />
        </div>
      </div>
    </section>
  );
}
