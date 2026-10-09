import { projects } from '../content'
import { dateRange } from '../lib/dates'
import Section from './Section'
import Tags from './Tags'

export default function ProjectGrid() {
  return (
    <Section id="projects" label="projects">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.name}
            className="flex flex-col rounded-lg border border-line bg-surface p-5 transition-colors hover:border-faint"
          >
            <span className="font-mono text-xs text-faint">{dateRange(p.start, p.end)}</span>
            <h3 className="mt-2 font-medium">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-4">
              <Tags tags={p.tags} />
            </div>
            {p.links.length > 0 && (
              <div className="mt-4 flex gap-4 border-t border-line pt-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-muted hover:text-accent"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
