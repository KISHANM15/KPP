import { Link } from 'react-router-dom'
import CollageBackground from '../components/CollageBackground'
import PageHero from '../components/PageHero'
import StatHighlightCard from '../components/StatHighlightCard'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const pillars = [
  {
    title: 'Rigour with care',
    copy: 'Assessment that rewards clarity, integrity, and teamwork — not last-minute cramming alone.',
    icon: '◆',
  },
  {
    title: 'Labs that ship',
    copy: 'Studios mirror industry tooling so students leave with receipts: repos, reports, and demos.',
    icon: '◇',
  },
  {
    title: 'Governance you can read',
    copy: 'Committees publish summaries families can follow; grievance routes are explicit and fast.',
    icon: '◈',
  },
]

const milestones = [
  { year: '2008', title: 'Foundation', detail: 'KPPIT chartered with Civil, Mechanical, and core sciences.' },
  { year: '2014', title: 'Digital campus', detail: 'Common LMS, online fee receipts, and department portals go live.' },
  { year: '2019', title: 'Innovation wing', detail: 'Shared fabrication bay + industry sprints for pre-final years.' },
  { year: '2024', title: 'Student charter', detail: 'Co-designed wellbeing plan: counseling slots, night shuttles, mentor map.' },
]

const leaders = [
  {
    name: 'Prof. S. Venkat',
    role: 'Director',
    initials: 'SV',
    note: 'Sets academic priorities with faculty senate & student council.',
  },
  {
    name: 'Dr. L. Mehra',
    role: 'Dean — Academics',
    initials: 'LM',
    note: 'Programme outcomes, IQAC rhythm, and industry board cadence.',
  },
  {
    name: 'Dr. K. Isaac',
    role: 'Dean — Student Affairs',
    initials: 'KI',
    note: 'Hostels, placements interface, and student support escalation.',
  },
]

export default function About() {
  return (
    <div>
      <PageHero
        imageUrl={campusImages.heroLibrary}
        title="About KPPIT"
        subtitle="A teaching-intensive institute where laboratories, accountable governance, and student dignity share the same blueprint — on every screen size."
      />

      <CollageBackground variant="strip" />

      <div className="relative border-b border-amber-100/60">
        <CollageBackground variant="full-bleed" />
        <div className="relative z-10">
          <section className="border-b border-amber-100/40 bg-white/50 backdrop-blur-sm">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3 md:px-6 md:py-16">
              {pillars.map((p, i) => {
                const t = getHighlightTheme(i)
                return (
                  <article
                    key={p.title}
                    className={`group rounded-2xl p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl ${t.card}`}
                  >
                    <span className={`text-2xl ${t.value}`} aria-hidden>
                      {p.icon}
                    </span>
                    <h2 className={`mt-3 font-serif text-xl font-bold ${t.title}`}>{p.title}</h2>
                    <p className={`mt-2 text-sm font-medium leading-relaxed ${t.hint}`}>{p.copy}</p>
                  </article>
                )
              })}
            </div>
          </section>

          <div className="mx-auto max-w-6xl space-y-16 bg-white/40 px-4 py-14 backdrop-blur-[2px] md:px-6 md:py-20">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Institute profile</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#5c5349]">
            KPP Institute of Technology offers UG engineering, select PG programmes, and an MBA anchored in ethical leadership. We
            invest in studios that feel like real workplaces: version control, design reviews, and public demos every semester.
          </p>
        </section>

        <section>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Milestones</h2>
            <p className="max-w-xl text-sm text-[#5c5349]">Scroll sideways on your phone — one continuous story, no “lite” mobile version.</p>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
            {milestones.map((m, i) => (
              <div key={m.year} className="min-w-[240px] shrink-0 md:min-w-0">
                <StatHighlightCard value={m.year} label={m.title} hint={m.detail} index={i} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Leadership spotlight</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">Illustrative portraits — swap with official photography anytime.</p>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {leaders.map((l) => (
              <li key={l.name}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2ddd4] bg-white shadow-sm">
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[#5c1a2a] to-[#3d111c]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-4xl font-bold text-[#c9a227]">{l.initials}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-lg font-semibold text-[#5c1a2a]">{l.name}</h3>
                    <p className="text-sm font-medium text-[#9a7212]">{l.role}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5c5349]">{l.note}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-[#e2ddd4] bg-[#5c1a2a] p-8 text-[#faf7f2] md:p-10">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">Quality & accreditation</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#f0ebe3] md:text-base">
            Demo narrative: programme outcomes map to graduate attributes; external boards visit twice a year; audit memos are
            summarized for students and parents. Replace with your statutory disclosures and PDF links.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/academics"
              className="inline-flex rounded-md bg-[#c9a227] px-4 py-2.5 text-sm font-semibold text-[#1a1410] hover:bg-[#b8860b]"
            >
              Explore academics
            </Link>
            <Link
              to="/students"
              className="inline-flex rounded-md border border-[#faf7f2]/40 px-4 py-2.5 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c]"
            >
              Student handbook hub
            </Link>
          </div>
        </section>
          </div>
        </div>
      </div>
    </div>
  )
}
