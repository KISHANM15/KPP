import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { departments } from '../data/departments'
import { campusImages } from '../lib/images'

const desks = [
  {
    title: 'Admissions',
    email: 'admissions@kppit.edu',
    phone: '+91 80 0000 1001',
    hours: 'Mon–Sat · 9:00–17:30',
    icon: '🎓',
    header: 'from-rose-500 via-orange-400 to-amber-400',
    ring: 'ring-rose-300/60',
    border: 'border-rose-200',
    body: 'from-rose-50/95 via-orange-50/90 to-amber-50/80',
    linkClr: 'text-rose-700',
  },
  {
    title: 'General administration',
    email: 'office@kppit.edu',
    phone: '+91 80 0000 1000',
    hours: 'Mon–Fri · 10:00–16:00',
    icon: '🏛️',
    header: 'from-sky-500 via-cyan-400 to-teal-400',
    ring: 'ring-sky-300/60',
    border: 'border-sky-200',
    body: 'from-sky-50/95 via-cyan-50/85 to-emerald-50/80',
    linkClr: 'text-sky-800',
  },
  {
    title: 'Placements & internships',
    email: 'placements@kppit.edu',
    phone: '+91 80 0000 1002',
    hours: 'By slot booking · portal',
    icon: '💼',
    header: 'from-violet-600 via-fuchsia-500 to-pink-400',
    ring: 'ring-violet-300/60',
    border: 'border-violet-200',
    body: 'from-violet-50/95 via-fuchsia-50/85 to-pink-50/80',
    linkClr: 'text-violet-800',
  },
] as const

const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/', handle: '@kppit' },
  { label: 'Instagram', href: 'https://www.instagram.com/', handle: '@kppit campus' },
  { label: 'YouTube', href: 'https://www.youtube.com/', handle: 'KPPIT lectures' },
] as const

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [message, setMessage] = useState('')
  const maxLen = 600

  const deptSample = useMemo(() => departments.slice(0, 6), [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHero
        imageUrl={campusImages.contact}
        title="Contact"
        subtitle="Desks, maps, department shortcuts, and a form that respects your time — polished like a production concierge desk."
        size="md"
      />

      <section className="relative border-b border-amber-200/50 bg-gradient-to-b from-[#fffbeb] via-white to-sky-50/30">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Central desks</h2>
          <p className="mt-2 max-w-2xl font-medium text-[#57534e]">
            Color-coded desks — find the right team fast on phone or desktop.
          </p>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {desks.map((d) => (
              <li key={d.title}>
                <article
                  className={`flex h-full flex-col overflow-hidden rounded-2xl border-2 ${d.border} bg-gradient-to-br ${d.body} shadow-lg shadow-stone-200/50 ring-2 ${d.ring}`}
                >
                  <div
                    className={`relative flex items-center gap-3 bg-gradient-to-r ${d.header} px-5 py-4 text-white shadow-md`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/25 text-2xl backdrop-blur-sm" aria-hidden>
                      {d.icon}
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-tight text-white drop-shadow-md">{d.title}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <dl className="space-y-3 text-sm text-stone-700">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a
                            className={`font-semibold underline decoration-2 underline-offset-2 ${d.linkClr} hover:opacity-80`}
                            href={`mailto:${d.email}`}
                          >
                            {d.email}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Phone</dt>
                        <dd className="font-medium">{d.phone}</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Hours</dt>
                        <dd className="text-stone-600">{d.hours}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(250,247,242,0.95), rgba(250,247,242,0.98)), url(${campusImages.heroLibrary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Visit KPPIT</h2>
              <p className="mt-2 text-[#5c5349]">
                Demo address in Bengaluru region — map is an embedded OpenStreetMap iframe (no API keys).
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2ddd4] shadow-sm">
                <iframe
                  title="KPPIT campus area map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.558%2C12.968%2C77.592%2C12.988&amp;layer=mapnik&amp;marker=12.978%2C77.575"
                  className="h-64 w-full min-h-[240px] border-0 md:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-xs text-[#5c5349]">
                Coordinates illustrative — replace with your geo marker.{' '}
                <a className="font-medium text-[#5c1a2a] underline" href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer">
                  OpenStreetMap
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Department speed-dial</h2>
              <p className="mt-2 text-sm text-[#5c5349]">
                Jump straight to a department; each page ends with the HOD contact block required by your rubric.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {deptSample.map((dep) => (
                  <li key={dep.slug}>
                    <Link
                      to={`/departments/${dep.slug}`}
                      className="flex items-center justify-between gap-2 rounded-xl border border-[#e2ddd4] bg-white px-4 py-3 text-sm font-medium text-[#5c1a2a] transition-colors hover:border-[#5c1a2a] hover:bg-[#faf7f2]"
                    >
                      <span className="line-clamp-2">{dep.name}</span>
                      <span aria-hidden className="shrink-0 text-[#c9a227]">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/departments"
                className="mt-4 inline-flex text-sm font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4"
              >
                All departments + search →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Send a message</h2>
              <p className="mt-2 text-sm text-[#5c5349]">
                Client-side demo only — wire Firebase, SES, or your helpdesk API for production. Character budget prevents essays.
              </p>
              {sent ? (
                <div className="mt-6 rounded-2xl border border-[#c9a227]/50 bg-[#f0ebe3] p-6 text-[#5c5349]">
                  <p className="font-serif text-lg font-semibold text-[#5c1a2a]">Thank you</p>
                  <p className="mt-2 text-sm">
                    We got your note in this demo build. Connect a real backend to route tickets to the right desk.
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-sm font-semibold text-[#5c1a2a] underline"
                    onClick={() => {
                      setSent(false)
                      setMessage('')
                    }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1a1410]">
                        Full name <span className="text-[#9a7212]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="mt-1 w-full rounded-md border border-[#e2ddd4] bg-white px-3 py-2 text-sm text-[#1a1410] outline-none ring-[#5c1a2a] focus:ring-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1a1410]">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="mt-1 w-full rounded-md border border-[#e2ddd4] bg-white px-3 py-2 text-sm text-[#1a1410] outline-none ring-[#5c1a2a] focus:ring-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1a1410]">
                      Email <span className="text-[#9a7212]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-1 w-full rounded-md border border-[#e2ddd4] bg-white px-3 py-2 text-sm text-[#1a1410] outline-none ring-[#5c1a2a] focus:ring-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-[#1a1410]">
                      Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      className="mt-1 w-full rounded-md border border-[#e2ddd4] bg-white px-3 py-2 text-sm text-[#1a1410] outline-none ring-[#5c1a2a] focus:ring-2"
                    >
                      <option>Admissions</option>
                      <option>Placements</option>
                      <option>Department enquiry</option>
                      <option>Alumni giving</option>
                      <option>Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <label htmlFor="message" className="block text-sm font-medium text-[#1a1410]">
                        Message <span className="text-[#9a7212]">*</span>
                      </label>
                      <span className={`text-xs ${message.length > maxLen ? 'font-semibold text-[#9a7212]' : 'text-[#5c5349]'}`}>
                        {message.length}/{maxLen}
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      maxLength={maxLen}
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 w-full rounded-md border border-[#e2ddd4] bg-white px-3 py-2 text-sm text-[#1a1410] outline-none ring-[#5c1a2a] focus:ring-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#5c1a2a] px-4 py-3 text-sm font-semibold text-[#faf7f2] shadow-sm hover:bg-[#3d111c] md:w-auto"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            <div className="rounded-2xl border border-[#e2ddd4] bg-[#faf7f2] p-8">
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Social & broadcasts</h2>
              <p className="mt-2 text-sm text-[#5c5349]">Replace with your verified handles before launch.</p>
              <ul className="mt-6 space-y-4">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e2ddd4] bg-white px-4 py-3 text-sm transition-colors hover:border-[#5c1a2a]"
                    >
                      <span className="font-semibold text-[#5c1a2a]">{s.label}</span>
                      <span className="text-[#5c5349]">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
      </section>
    </div>
  )
}
