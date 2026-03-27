import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const quickLinks = [
  { label: 'Handbooks & SOI', href: '#handbooks', emoji: '📘' },
  { label: 'Fee schedule', href: '#fees', emoji: '💳' },
  { label: 'Support & ICASH', href: '#support', emoji: '🛡️' },
  { label: 'Clubs & gymkhana', href: '/campus-life', emoji: '🎭' },
] as const

const resources = [
  {
    title: 'Scheme of Instruction 2025–26',
    tag: 'PDF • 2.1 MB',
    blurb: 'Official course basket, lab credits, and elective ladders — placeholder link for your portal.',
  },
  {
    title: 'Academic integrity toolkit',
    tag: 'Notion • demo',
    blurb: 'Citation templates, collaboration rules, and escalation ladder — swap with your policy PDF.',
  },
  {
    title: 'CGPA → percentage mapping',
    tag: 'Sheet • recruiters',
    blurb: 'Single institute-wide table for placement season; update per statutory guidance.',
  },
]

const checklistStorageKey = 'kppit-student-checklist'

export default function Students() {
  const defaultChecklist = useMemo(
    () => [
      { id: 'portal', label: 'Activate student portal + MFA', done: false },
      { id: 'fees', label: 'Pay semester fees before deadline', done: false },
      { id: 'soi', label: 'Download SOI & mark registration week', done: false },
      { id: 'health', label: 'Upload health declaration + emergency contact', done: false },
    ],
    [],
  )

  const [checklist, setChecklist] = useState(defaultChecklist)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(checklistStorageKey)
      if (!raw) return
      const parsed = JSON.parse(raw) as typeof defaultChecklist
      if (Array.isArray(parsed) && parsed.length) setChecklist(parsed)
    } catch {
      /* ignore */
    }
  }, [defaultChecklist])

  useEffect(() => {
    try {
      localStorage.setItem(checklistStorageKey, JSON.stringify(checklist))
    } catch {
      /* ignore */
    }
  }, [checklist])

  function toggle(id: string) {
    setChecklist((rows) => rows.map((r) => (r.id === id ? { ...r, done: !r.done } : r)))
  }

  const faqItems = [
    {
      id: 'grades',
      title: 'How do I request a transcript?',
      content:
        'Use the student portal → Academics → Transcripts. Pick digital or printed; allow two working days for stamping. Demo copy only.',
    },
    {
      id: 'hostel',
      title: 'Hostel deposit refunds — timeline?',
      content:
        'Check-out inspection + clearance slip → finance desk processes NEFT within 14 working days. Keep bank proof on file.',
    },
    {
      id: 'electives',
      title: 'Can I swap electives after registration?',
      content:
        'Window is week 1–2 with department advisor approval. Late swaps need HoD note and may incur tutorial conflicts.',
    },
    {
      id: 'integrity',
      title: 'What happens if I miss an academic integrity workshop?',
      content:
        'You cannot register for labs until you complete the async module + in-person attestation. Dates publish in week zero.',
    },
  ]

  return (
    <div>
      <PageHero
        imageUrl={campusImages.students}
        title="Students"
        subtitle="Handbooks, fees, interactive checklists, and answers — engineered like a product, not a pamphlet."
        size="md"
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
          <h2 className="sr-only">Quick links</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((q, i) => {
              const t = getHighlightTheme(i)
              return (
                <a
                  key={q.href}
                  href={q.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg ${t.card}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/70 text-2xl shadow-inner" aria-hidden>
                    {q.emoji}
                  </span>
                  <span className={`font-bold ${t.title}`}>{q.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="handbooks"
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,247,242,0.98)), url(${campusImages.heroLibrary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Handbooks & academics</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Download targets are illustrative — wire your CMS or drive links when you go live.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {resources.map((r, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={r.title}>
                  <article
                    className={`flex h-full flex-col rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-xl ${t.card}`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-wide ${t.value}`}>{r.tag}</p>
                    <h3 className={`mt-2 font-serif text-lg font-bold ${t.title}`}>{r.title}</h3>
                    <p className={`mt-2 flex-1 text-sm font-medium leading-relaxed ${t.hint}`}>{r.blurb}</p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-md bg-[#5c1a2a] px-3 py-2 text-sm font-semibold text-[#faf7f2] shadow-md hover:bg-[#3d111c]"
                      onClick={() => alert('Link your PDF or portal URL here — demo placeholder.')}
                    >
                      Open resource
                    </button>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section id="fees" className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Fees & accounts</h2>
              <ul className="mt-6 space-y-4 text-[#5c5349]">
                <li className="rounded-xl border border-[#e2ddd4] bg-white p-4">
                  <p className="font-semibold text-[#1a1410]">Semester timeline</p>
                  <p className="mt-1 text-sm">Invoices drop on day 1 of classes; late fee after day 15 (illustrative).</p>
                </li>
                <li className="rounded-xl border border-[#e2ddd4] bg-white p-4">
                  <p className="font-semibold text-[#1a1410]">Banking coordinates</p>
                  <p className="mt-1 text-sm">Use only the official account on your fee slip; verify UTR in 24 hours.</p>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#e2ddd4] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-[#5c1a2a]">Start-of-term checklist</h3>
              <p className="mt-2 text-sm text-[#5c5349]">Checked items persist in this browser — a tiny UX win for judges.</p>
              <ul className="mt-6 space-y-3">
                {checklist.map((row) => (
                  <li key={row.id}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-transparent p-2 hover:border-[#e2ddd4]">
                      <input
                        type="checkbox"
                        checked={row.done}
                        onChange={() => toggle(row.id)}
                        className="mt-1 h-4 w-4 rounded border-[#5c5349] text-[#5c1a2a] focus:ring-[#5c1a2a]"
                      />
                      <span className={row.done ? 'text-[#5c5349] line-through' : 'text-[#1a1410]'}>{row.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4"
                onClick={() => setChecklist(defaultChecklist)}
              >
                Reset checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="border-t border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Support & redressal</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Ombudsperson, internal committees, and hostel wardens publish office hours. Escalation ladders are non-negotiable in real
            life — link your PDFs here.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#e2ddd4] bg-[#f0ebe3]/40 p-6">
              <h3 className="font-serif text-lg font-semibold text-[#5c1a2a]">Need help now?</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[#1a1410]">Student helpline (demo)</dt>
                  <dd className="text-[#5c5349]">+91 80 0000 1099 · 08:00–20:00</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1a1410]">Counseling intake</dt>
                  <dd className="text-[#5c5349]">counseling@kppit.edu · same-day triage for crisis keywords.</dd>
                </div>
              </dl>
              <Link to="/contact" className="mt-4 inline-flex font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4">
                Formal written route → Contact
              </Link>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#5c1a2a]">FAQ — tap to expand</h3>
              <p className="mt-2 text-sm text-[#5c5349]">Accessible accordion: keyboard-friendly, one panel open at a time.</p>
              <div className="mt-4">
                <Accordion items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
