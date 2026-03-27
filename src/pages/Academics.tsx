import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const creditPillars = [
  {
    id: 'design',
    title: 'Design studio spine',
    copy: 'Every programme maps course outcomes to studio deliverables reviewers can see: demos, datasets, or field logs.',
  },
  {
    id: 'flex',
    title: 'Flexible baskets',
    copy: 'Minors, honours, and ABC-credit-friendly electives let students personalize without blowing prerequisites.',
  },
  {
    id: 'verify',
    title: 'Continuous verification',
    copy: 'Rubrics publish to students week one; sample graded work is anonymized in town halls each semester.',
  },
] as const

const offerings = [
  { name: 'Undergraduate (B.Tech)', detail: '4-year professional degrees with first-year foundations + branch studios.', tag: 'UG' },
  { name: 'Postgraduate (M.Tech / MBA)', detail: 'Research threads, industry sprints, and graded seminars.', tag: 'PG' },
  { name: 'Micro-credentials', detail: 'Short industry-backed modules with transcript-visible credits (demo roadmap).', tag: 'CE' },
]

export default function Academics() {
  const [activePillar, setActivePillar] = useState<(typeof creditPillars)[number]['id']>('design')

  const pillar = creditPillars.find((p) => p.id === activePillar)!

  return (
    <div>
      <PageHero
        imageUrl={campusImages.digitalClass}
        title="Academics"
        subtitle="Credit architecture, digital learning spine, and outcome verification — how KPPIT delivers programmes in a modern accreditation context."
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <ul className="grid gap-4 md:grid-cols-3">
            {offerings.map((o, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={o.name}>
                  <article
                    className={`flex h-full flex-col rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl ${t.card}`}
                  >
                    <span
                      className={`w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-bold shadow-inner ${t.value}`}
                    >
                      {o.tag}
                    </span>
                    <h2 className={`mt-4 font-serif text-lg font-bold ${t.title}`}>{o.name}</h2>
                    <p className={`mt-2 flex-1 text-sm font-medium leading-relaxed ${t.hint}`}>{o.detail}</p>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(105deg, rgba(250,247,242,0.97) 55%, rgba(255,255,255,0.92)), url(${campusImages.heroLibrary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Academic operating system</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Tap a pillar — same component chrome on mobile; copy panel reflows beneath buttons.
          </p>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-wrap gap-2 lg:w-64 lg:flex-col" role="tablist" aria-label="Academic pillars">
              {creditPillars.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={activePillar === p.id}
                  className={[
                    'rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors',
                    activePillar === p.id
                      ? 'border-[#5c1a2a] bg-[#5c1a2a] text-[#faf7f2]'
                      : 'border-[#e2ddd4] bg-white text-[#1a1410] hover:border-[#c9a227]',
                  ].join(' ')}
                  onClick={() => setActivePillar(p.id)}
                >
                  {p.title}
                </button>
              ))}
            </div>
            <div
              className="flex-1 rounded-2xl border border-[#e2ddd4] bg-white p-6 shadow-sm md:p-8"
              role="tabpanel"
            >
              <h3 className="font-serif text-xl font-semibold text-[#5c1a2a]">{pillar.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[#5c5349]">{pillar.copy}</p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-[#5c5349]">
                <li>LMS attendance + asset versioning tied to course codes (demo).</li>
                <li>Faculty development credits for new pedagogy pilots each year.</li>
                <li>Student senate reviews assessment workload twice a term.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#fcd34d]/40 bg-gradient-to-br from-[#5c1a2a] via-[#7f1d1d] to-[#c2410c] py-12 text-[#fffbeb] md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">Digital learning & NEP signals</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#ffedd5] md:text-base">
              Blended tutorials, proctored assessments, and open educational resource packs are maintained centrally. Academic Bank of
              Credits alignment and multidisciplinary diplomas appear in committee minutes (placeholder until your board publishes).
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 rounded-xl border border-[#fde68a]/40 bg-white/15 px-4 py-3 backdrop-blur-sm">
              <span className="text-[#fde68a]" aria-hidden>
                ◈
              </span>
              <span>OTP-secured grade appeals + downloadable audit trail.</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-[#fde68a]/40 bg-white/15 px-4 py-3 backdrop-blur-sm">
              <span className="text-[#fde68a]" aria-hidden>
                ◈
              </span>
              <span>Accessibility checklist on every new video module.</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-[#fde68a]/40 bg-white/15 px-4 py-3 backdrop-blur-sm">
              <span className="text-[#fde68a]" aria-hidden>
                ◈
              </span>
              <span>Industry co-badge on capstones stored in verified portfolios.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-[#e2ddd4] bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Department-level depth</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#5c5349]">
            Each unit publishes vision, programmes, faculty, labs, research, achievements, and HOD contact — searchable from one
            index.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/departments"
              className="inline-flex rounded-md bg-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c]"
            >
              Browse departments
            </Link>
            <button
              type="button"
              className="inline-flex rounded-md border border-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#5c1a2a] hover:bg-white"
              onClick={() => alert('Wire PDF: Academic calendar 2025–26')}
            >
              Download calendar (demo)
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
