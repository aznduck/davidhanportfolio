// Placeholder layout: renders everything in content.ts so the data can be checked end to end.
// The real design gets built on top of this once a direction is picked in Figma Make.
import { education, experience, involvement, personal, profile, projects, skills } from './content'

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12">
      <h2 className="mb-6 text-2xl font-semibold text-accent">{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <nav className="flex items-center justify-between py-6">
        <a href="#top">
          <img src={profile.duck} alt="Home" className="h-10 w-10" />
        </a>
        <div className="flex gap-6 text-sm">
          <a href="#work" className="hover:text-accent">work</a>
          <a href="#about" className="hover:text-accent">about</a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">contact</a>
        </div>
      </nav>

      <header id="top" className="flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center">
        <img src={profile.headshot} alt={profile.name} className="h-32 w-32 rounded-full object-cover" />
        <div>
          <h1 className="text-4xl font-bold">
            Hi! I'm <span className="text-accent">{profile.name}</span> 👋
          </h1>
          <p className="mt-3 text-neutral-400">{profile.intro}</p>
          <p className="mt-2 text-neutral-400">{profile.sidequests}</p>
        </div>
      </header>

      <Section id="work" title="Experience">
        <ul className="space-y-8">
          {experience.map((e) => (
            <li key={e.company}>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-semibold">
                  {e.company} · <span className="font-normal">{e.role}</span>
                </h3>
                <span className="text-sm text-neutral-500">
                  {e.start} – {e.end}
                </span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-400">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" title="Projects">
        <ul className="space-y-6">
          {projects.map((p) => (
            <li key={p.name}>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-neutral-400">{p.summary}</p>
              <p className="mt-1 text-xs text-neutral-500">{p.tags.join(' · ')}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education">
        <p className="font-semibold">{education.school}</p>
        <p className="text-sm text-neutral-400">
          {education.degree} · Minors in {education.minors.join(' & ')} · {education.graduation}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-neutral-400">
          {involvement.map((i) => (
            <li key={i.name}>
              <span className="text-neutral-200">{i.name}</span> ({i.role}): {i.summary}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-neutral-500">{[...skills.languages, ...skills.tools].join(' · ')}</p>
      </Section>

      <Section id="about" title="About">
        <div className="space-y-12">
          {personal.map((s) => (
            <div key={s.id}>
              <h3 className="text-xl font-semibold">
                {s.heading} {s.emoji}
              </h3>
              {s.body.map((p) => <p key={p} className="mt-2 text-neutral-400">{p}</p>)}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {s.media.map((m) => (
                  <a key={m.src} href={m.href} target="_blank" rel="noreferrer">
                    <img src={m.src} alt={m.alt} loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
                    {m.caption && <p className="mt-2 text-xs text-neutral-500">{m.caption}</p>}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <footer className="flex flex-wrap gap-6 border-t border-neutral-800 py-8 text-sm">
        <a href={`mailto:${profile.email}`} className="text-accent">{profile.email}</a>
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent">
            {s.label}
          </a>
        ))}
        <a href={profile.resume} target="_blank" className="hover:text-accent">Resume ↗</a>
      </footer>
    </div>
  )
}
