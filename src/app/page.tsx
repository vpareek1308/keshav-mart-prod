import Image from "next/image";
import Link from "next/link";

const featured = [
  { title: "Daily Veg Essentials", price: "from £12", note: "Pure veg, no onion/garlic options" },
  { title: "Snacks & Farsan", price: "from £3.50", note: "Ready to serve classics" },
  { title: "Spices & Pantry", price: "from £5", note: "Small-batch, aroma locked" },
  { title: "Frozen Favourites", price: "from £14", note: "Arrives with insulated care" },
];

const services = [
  { title: "Parcel Drop", detail: "Bring labels, we hand to couriers.", tag: "Quick handoff" },
  { title: "Print & Pack", detail: "Labels, cushioning, tape—done here.", tag: "Ready to send" },
  { title: "Packaging Bar", detail: "Honeycomb wrap, gel packs, sturdy boxes.", tag: "Eco & chilled" },
];

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--foreground)]">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-16">
        <Hero />

        <section id="store" className="mt-12 space-y-5">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              Store
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">Simple picks, clear pricing</h2>
            <p className="max-w-2xl text-[var(--muted)]">
              A short list to start. Swap in real items later—cards are ready for data from an API or CMS.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#e6ddcf] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.note}</p>
                  </div>
                  <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">
                    {item.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="mt-14 grid gap-6 rounded-3xl border border-[#e6ddcf] bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              Parcels & Packaging
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">Keep it easy at the desk</h2>
            <p className="max-w-xl text-[var(--muted)]">
              Drop parcels, print labels, and wrap with care—all in one spot. Hooks are ready for tracking later.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-[#e6ddcf] bg-[#fffaf3] p-4 shadow-inner"
                >
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--primary)]">{service.tag}</p>
                  <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{service.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-[var(--primary)] text-white shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[var(--accent)]/25" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="space-y-2">
                <p className="text-sm text-white/80">Keshav Mart desk</p>
                <h3 className="text-2xl font-semibold">Parcel ready, packaging ready</h3>
                <p className="text-sm text-white/80">
                  Simple flow: drop, print, wrap. Add tracking later without changing the layout.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm">
                <span>Cold chain? We add gel packs.</span>
                <span className="rounded-full bg-white/20 px-3 py-1">Ready today</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-14 grid gap-4 rounded-3xl border border-[#e6ddcf] bg-white p-6 shadow-sm md:grid-cols-3"
        >
          {[
            "Pure veg focus with simple navigation.",
            "Cards and sections are data-ready for future APIs.",
            "Warm palette inspired by the reference site.",
          ].map((text) => (
            <div
              key={text}
              className="rounded-2xl border border-[#e6ddcf] bg-[#fffaf3] p-4 text-sm font-semibold text-[var(--foreground)]"
            >
              {text}
            </div>
          ))}
        </section>

        <section
          id="contact"
          className="mt-12 grid gap-6 rounded-3xl border border-[#e6ddcf] bg-white p-6 shadow-sm md:grid-cols-[1fr_0.9fr]"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              Visit or call
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">Keshav Mart front desk</h2>
            <p className="max-w-xl text-[var(--muted)]">
              Drop by for groceries, parcels, or packaging. These details are placeholders—swap
              in the real address and numbers when ready.
            </p>
            <div className="space-y-2 rounded-2xl border border-[#e6ddcf] bg-[#fffaf3] p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[var(--foreground)]">Call</span>
                <span className="font-semibold text-[var(--primary)]">0123 456 7890</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[var(--foreground)]">Email</span>
                <span className="text-[var(--muted)]">hello@keshavmart.test</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[var(--foreground)]">Hours</span>
                <span className="text-[var(--muted)]">Mon–Sat · 9am–8pm</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="tel:01234567890"
                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[var(--primary-strong)]"
              >
                Call the desk
              </Link>
              <Link
                href="mailto:hello@keshavmart.test"
                className="inline-flex items-center justify-center rounded-full border border-[#e6ddcf] px-4 py-2 text-sm font-semibold text-[var(--foreground)] bg-white transition hover:border-[#d8cbb7]"
              >
                Email us
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[#e6ddcf] bg-[#fffaf3] p-5 text-sm text-[var(--muted)] shadow-inner">
            <p className="text-base font-semibold text-[var(--foreground)]">Find us</p>
            <p className="mt-2">
              Placeholder address: 123 Sample Road, Leicester, LE1 2AB. Replace with the real
              location. Add a map embed later.
            </p>
            <div className="mt-4 space-y-2">
              <p>Parking: limited street parking nearby.</p>
              <p>Courier handoff: side entrance, signed receipts.</p>
              <p>Accessibility: ground floor access.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e6ddcf] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-[#e6ddcf] bg-white shadow-sm">
            <Image
              src="/keshav-mart-logo-square.png"
              alt="Keshav Mart logo"
              width={44}
              height={44}
              className="h-10 w-10 object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Keshav Mart</p>
            <p className="text-xs text-[var(--muted)]">Grocery • Parcel • Packaging</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-semibold text-[var(--muted)] md:flex">
          <Link href="#store" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            Store
          </Link>
          <Link href="#services" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            Parcels
          </Link>
          <Link href="#services" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            Packaging
          </Link>
          <Link href="#about" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            About
          </Link>
          <Link href="#contact" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#services"
            className="hidden rounded-full border border-[#e6ddcf] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[#d8cbb7] sm:inline-flex"
          >
            Services
          </Link>
          <Link
            href="#store"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[var(--primary-strong)]"
          >
            Start order
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="mt-10 grid gap-8 rounded-3xl border border-[#e6ddcf] bg-white p-6 shadow-sm lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#fff3e0] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
          Pure veg • Warm & simple
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Groceries, parcels, and packaging—kept straightforward.
          </h1>
          <p className="max-w-2xl text-lg text-[var(--muted)]">
            Inspired by the reference site: clean sections, soft cream background, and a green accent for trust.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#store"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-[var(--primary-strong)]"
          >
            Shop store
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-[#e6ddcf] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] bg-white transition hover:border-[#d8cbb7]"
          >
            Parcel & packaging
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-[#e6ddcf] bg-[#fdf7ed] text-[var(--foreground)] shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/18 via-transparent to-[var(--primary)]/10" />
        <div className="relative flex h-full flex-col items-start justify-between p-6 gap-4">
          <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-[#e6ddcf] bg-white shadow-sm">
            <Image
              src="/keshav-mart-logo-square.png"
              alt="Keshav Mart logo badge"
              width={48}
              height={48}
              className="h-11 w-11 object-cover"
              priority
            />
          </div>
            <div>
              <p className="text-sm text-[var(--muted)]">Keshav Mart</p>
              <p className="text-lg font-semibold">Fresh + Parcel + Packaging</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-[var(--muted)]">
            <p>Nationwide delivery with a simple flow.</p>
            <p>Packaging help on the same counter.</p>
            <p>Ready to connect to inventory or tracking later.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--primary)]">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">No onion/garlic</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">Chilled friendly</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">Simple navigation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e6ddcf] bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold">Keshav Mart</p>
          <p className="text-sm text-[var(--muted)]">Pure veg groceries with parcel & packaging help.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-[var(--muted)]">
          <Link href="#store" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            Store
          </Link>
          <Link href="#services" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            Parcels
          </Link>
          <Link href="#services" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            Packaging
          </Link>
          <Link href="#about" className="rounded-full px-3 py-2 transition hover:bg-[#fff3e0]">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
