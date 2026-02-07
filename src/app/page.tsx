import Image from "next/image";
import Link from "next/link";
import { BannerCarousel } from "@/components/BannerCarousel";

const featured = [
  { title: "Daily Veg Essentials", price: "from £12", note: "Pure veg options available • No onion/garlic options" },
  { title: "Snacks & Farsan", price: "from £3.50", note: "Ready to serve classics" },
  { title: "Spices & Pantry", price: "from £5", note: "Small-batch, aroma locked" },
  { title: "Frozen Favourites", price: "from £14", note: "Arrives with insulated care" },
];

const packagingOptions = [
  { title: "Parcel Drop", detail: "Bring labels, we hand to couriers.", tag: "Quick handoff" },
  { title: "Print & Pack", detail: "Labels, cushioning, tape—done here.", tag: "Ready to send" },
  { title: "Packaging Bar", detail: "Honeycomb wrap, gel packs, sturdy boxes.", tag: "Eco & chilled" },
];

const BUCKINGHAM_PALACE_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=-0.155%2C51.495%2C-0.129%2C51.508&layer=mapnik&marker=51.5014,-0.1419";
const BUCKINGHAM_PALACE_GOOGLE_MAPS =
  "https://www.google.com/maps/search/?api=1&query=Buckingham+Palace,+London+SW1A+1AA";

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--foreground)]">
      <Header />
      <main className="mx-auto max-w-6xl space-y-10 px-6 pb-16 pt-6">
        <BannerCarousel />

        <section id="store" className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              Store
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">Groceries to buy</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((item) => (
              <article
                key={item.title}
                className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition hover:border-[var(--border-hover)]"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.note}</p>
                </div>
                <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">
                  {item.price}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="packaging" className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              Parcels & Packaging
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">Value and packaging options</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {packagingOptions.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                  {service.tag}
                </p>
                <h3 className="mt-2 font-semibold">{service.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              Find us
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">Store location</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4">
              <p className="text-xl font-semibold text-[var(--foreground)] md:text-2xl">
                Buckingham Palace
              </p>
              <p className="text-lg text-[var(--muted)]">London SW1A 1AA</p>
              <p className="text-sm text-[var(--muted)]">(Sample location)</p>
              <Link
                href={BUCKINGHAM_PALACE_GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]"
              >
                Open in Google Maps
              </Link>
            </div>
            <div className="relative min-h-[240px] overflow-hidden rounded-xl border border-[var(--border)]">
              <iframe
                title="Store location map - Buckingham Palace"
                src={BUCKINGHAM_PALACE_EMBED}
                className="absolute inset-0 h-full w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              Get in touch
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact information</h2>
            <p className="max-w-xl text-[var(--muted)]">
              Drop by for groceries, parcels, or packaging. We&apos;re here to help.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="tel:01234567890"
              className="group flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-5 transition hover:border-[var(--primary)] hover:bg-[var(--surface-hover)]"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Phone</p>
              <p className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                0123 456 7890
              </p>
              <span className="text-xs font-medium text-[var(--primary)]">Tap to call</span>
            </Link>
            <Link
              href="mailto:hello@keshavmart.test"
              className="group flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-5 transition hover:border-[var(--primary)] hover:bg-[var(--surface-hover)]"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Email</p>
              <p className="break-words text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                hello@keshavmart.test
              </p>
              <span className="text-xs font-medium text-[var(--primary)]">Tap to email</span>
            </Link>
            <div className="flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Hours</p>
              <p className="text-lg font-semibold text-[var(--foreground)]">Mon–Sat · 9am–8pm</p>
              <p className="text-sm text-[var(--muted)]">Closed Sundays</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="tel:01234567890"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[var(--primary-strong)]"
            >
              Call us
            </Link>
            <Link
              href="mailto:hello@keshavmart.test"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--surface-hover)]"
            >
              Email us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm">
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
          <Link href="#store" className="rounded-full px-3 py-2 transition hover:bg-[var(--surface-hover)]">
            Store
          </Link>
          <Link href="#packaging" className="rounded-full px-3 py-2 transition hover:bg-[var(--surface-hover)]">
            Packaging
          </Link>
          <Link href="#location" className="rounded-full px-3 py-2 transition hover:bg-[var(--surface-hover)]">
            Location
          </Link>
          <Link href="#contact" className="rounded-full px-3 py-2 transition hover:bg-[var(--surface-hover)]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-white/90">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">Keshav Mart</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Groceries with pure veg options, plus parcel & packaging help.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Quick links</p>
            <nav className="mt-2 flex flex-col gap-1 text-sm text-[var(--muted)]">
              <Link href="#store" className="hover:text-[var(--primary)]">Store</Link>
              <Link href="#packaging" className="hover:text-[var(--primary)]">Packaging</Link>
              <Link href="#location" className="hover:text-[var(--primary)]">Location</Link>
              <Link href="#contact" className="hover:text-[var(--primary)]">Contact</Link>
            </nav>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Contact</p>
            <div className="mt-2 space-y-1 text-sm text-[var(--muted)]">
              <p>
                <Link href="tel:01234567890" className="hover:text-[var(--primary)]">0123 456 7890</Link>
              </p>
              <p>
                <Link href="mailto:hello@keshavmart.test" className="hover:text-[var(--primary)]">hello@keshavmart.test</Link>
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Hours</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Mon–Sat · 9am–8pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
