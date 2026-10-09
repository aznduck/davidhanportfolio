import { useState } from 'react'
import { experience } from '../content'
import { dateRange } from '../lib/dates'
import Section from './Section'
import Tags from './Tags'

export default function ExperienceList() {
  const [open, setOpen] = useState<string | null>(experience[0].company)

  return (
    <Section id="work" label="experience">
      <ul className="divide-y divide-line border-y border-line">
        {experience.map((e) => {
          const isOpen = open === e.company
          const panelId = `exp-${e.company.replace(/\W+/g, '-').toLowerCase()}`
          return (
            <li key={e.company}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : e.company)}
                className="group flex w-full items-start gap-4 py-4 text-left"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-medium transition-colors group-hover:text-accent">
                      {e.company} <span className="font-normal text-muted">· {e.role}</span>
                    </h3>
                    <span className="font-mono text-xs text-faint">{dateRange(e.start, e.end)}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{e.summary}</p>
                </div>
                <span
                  aria-hidden
                  className={`mt-0.5 font-mono text-faint transition-transform group-hover:text-accent ${isOpen ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
              <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden" inert={!isOpen}>
                  <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-faint">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5">
                    <Tags tags={e.tags} />
                    {e.href && (
                      <a
                        href={e.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-muted hover:text-accent"
                      >
                        {new URL(e.href).hostname.replace('www.', '')} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
