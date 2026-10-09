import { education, involvement } from '../content'
import { dateRange } from '../lib/dates'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" label="education">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-medium">{education.school}</h3>
        <span className="font-mono text-xs text-faint">Class of {education.graduation.split(' ')[1]}</span>
      </div>
      <p className="mt-1 text-sm text-muted">
        {education.degree} · Minors in {education.minors.join(' & ')}
      </p>
      <p className="mt-1 text-sm text-muted">{education.honors.join(' · ')}</p>

      <ul className="mt-8 space-y-4">
        {involvement.map((i) => (
          <li key={i.name} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <span className="font-mono text-xs text-faint sm:pt-0.5">{dateRange(i.start, i.end)}</span>
            <div>
              <p className="text-sm">
                {i.href ? (
                  <a href={i.href} target="_blank" rel="noreferrer" className="font-medium hover:text-accent">
                    {i.name}
                  </a>
                ) : (
                  <span className="font-medium">{i.name}</span>
                )}{' '}
                <span className="text-muted">· {i.role}</span>
              </p>
              <p className="mt-0.5 text-sm text-muted">{i.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
