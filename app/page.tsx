import PriceCalculator from "@/components/PriceCalculator/PriceCalculator";
import Image from "next/image";

const collections = [
  {
    name: "Skin",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Makeup",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Body",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8fa] text-[#30262a]">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-200/30 blur-[100px]" />
        <div className="absolute right-0 top-[35%] h-96 w-96 rounded-full bg-rose-200/30 blur-[120px]" />
        <div className="absolute bottom-0 left-[35%] h-80 w-80 rounded-full bg-pink-100/40 blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="absolute left-0 top-0 z-50 w-full px-5 py-5 sm:px-8 md:px-12 md:py-7">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/60 bg-white/35 px-5 py-3 shadow-[0_8px_40px_rgba(255,130,170,0.08)] backdrop-blur-xl sm:px-7">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-medium tracking-[-0.04em] sm:text-2xl"
          >
            lumihaus
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 text-[10px] tracking-[0.22em] md:flex">
            <a
              href="#about"
              className="transition duration-300 hover:text-pink-500"
            >
              ABOUT
            </a>

            <a
              href="#collection"
              className="transition duration-300 hover:text-pink-500"
            >
              COLLECTION
            </a>

            <a
              href="#contact"
              className="transition duration-300 hover:text-pink-500"
            >
              CONTACT
            </a>
          </div>

          {/* Shop */}
          <a
            href="#collection"
            className="rounded-full bg-[#30262a] px-5 py-2.5 text-[10px] tracking-[0.2em] text-white shadow-lg shadow-pink-200/30 transition hover:bg-pink-500"
          >
            SHOP
          </a>
        </div>
      </nav>

      {/* Price Calculator */}
      <PriceCalculator />

      {/* Hero */}
      <section className="relative min-h-190 w-full overflow-hidden sm:min-h-screen">
        {/* Hero image */}
        <div className="absolute inset-0 md:left-[38%]">
          <Image
            src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=90"
            alt="Lumihaus beauty collection"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 62vw"
          />

          {/* Pink image overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-[#ffedf3]/25 via-transparent to-[#fff8fa]/60 md:bg-gradient-to-r md:from-[#fff8fa] md:via-[#fff8fa]/20 md:to-transparent" />
        </div>

        {/* Pink glow */}
        <div className="absolute left-[-150px] top-[35%] h-[400px] w-[400px] rounded-full bg-pink-300/25 blur-[120px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1500px] items-center px-5 pt-28 sm:px-8 md:min-h-screen md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-[10px] font-medium tracking-[0.32em] text-pink-500 sm:text-xs">
              MODERN BEAUTY ESSENTIALS
            </p>

            <h1 className="text-[58px] font-light leading-[0.88] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[115px]">
              Beauty,
              <br />
              <span className="font-serif italic font-normal text-[#4a343c]">
                made luminous.
              </span>
            </h1>

            <p className="mt-7 max-w-sm text-sm leading-6 text-[#74676d] sm:mt-9">
              Effortless cosmetics designed to enhance your natural beauty.
              Simple formulas. Beautiful results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#collection"
                className="group inline-flex w-fit items-center gap-5 rounded-full bg-[#30262a] px-7 py-4 text-[10px] tracking-[0.22em] text-white shadow-[0_12px_35px_rgba(224,83,126,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:shadow-[0_15px_40px_rgba(236,72,153,0.3)]"
              >
                DISCOVER LUMIHAUS
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-5 z-10 flex items-center gap-3 text-[9px] tracking-[0.25em] text-[#806f76] sm:left-8 md:left-12">
          <span className="h-px w-8 bg-pink-300" />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Brand statement */}
      <section
        id="about"
        className="relative px-5 py-24 text-center sm:px-8 md:px-12 md:py-40"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] tracking-[0.3em] text-pink-500">
            OUR PHILOSOPHY
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl md:text-6xl">
            “Beauty should feel effortless —{" "}
            <span className="italic text-pink-400">never excessive.</span>”
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#756a70]">
            Lumihaus creates modern beauty essentials for everyday rituals.
            Thoughtfully made, beautifully understated, and designed to become
            part of you.
          </p>
        </div>
      </section>

      {/* Collection */}
      <section
        id="collection"
        className="relative px-5 pb-24 sm:px-8 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex items-end justify-between sm:mb-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-pink-500">
                THE COLLECTION
              </p>

              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                Everyday luminosity
              </h2>
            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-[#9b8c92] sm:block">
              01 — 03
            </span>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {collections.map((item) => (
              <a
                href="#"
                key={item.name}
                className="group relative overflow-hidden rounded-[24px] bg-pink-100"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={900}
                  height={1125}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <h3 className="font-serif text-3xl">{item.name}</h3>

                  <span className="mt-2 inline-block text-[9px] tracking-[0.25em]">
                    EXPLORE →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#33282d] px-5 py-24 text-center text-[#fff8fa] sm:px-8 md:py-32"
      >
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[100px]" />

        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.3em] text-pink-300">
            STAY IN THE GLOW
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Beauty notes,
            <br />
            <span className="italic text-pink-300">delivered.</span>
          </h2>

          <div className="mx-auto mt-10 flex max-w-md border-b border-white/30 pb-3">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/40"
            />

            <button className="ml-4 text-[10px] tracking-[0.2em] transition hover:text-pink-300">
              JOIN
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-3 bg-[#33282d] px-5 pb-8 text-[9px] tracking-[0.15em] text-white/40 sm:px-8 md:flex-row md:justify-between md:px-12">
        <span>© 2026 LUMIHAUS</span>
        <span>BEAUTY, SIMPLIFIED.</span>
      </footer>
    </main>
  );
}
