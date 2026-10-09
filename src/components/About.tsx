import { personal } from '../content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" label="about">
      <div className="space-y-14">
        {personal.map((s) => {
          const captioned = s.media.some((m) => m.caption)
          return (
            <div key={s.id}>
              <h3 className="text-lg font-medium">
                {s.heading} <span aria-hidden>{s.emoji}</span>
              </h3>
              {s.body.map((p) => (
                <p key={p} className="mt-2 max-w-xl leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              {s.links && (
                <p className="mt-2 flex gap-4">
                  {s.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="font-mono text-sm text-accent hover:underline">
                      {l.label} ↗
                    </a>
                  ))}
                </p>
              )}
              <ul className={`mt-5 grid gap-3 ${captioned ? 'sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
                {s.media.map((m) => {
                  const img = (
                    <img
                      src={m.src}
                      alt={m.alt}
                      loading="lazy"
                      className={`w-full rounded-md border border-line object-cover transition-opacity group-hover:opacity-80 ${captioned ? 'aspect-video' : 'aspect-square'}`}
                    />
                  )
                  return (
                    <li key={m.src}>
                      {m.href ? (
                        <a href={m.href} target="_blank" rel="noreferrer" className="group block">
                          {img}
                        </a>
                      ) : (
                        img
                      )}
                      {m.caption && <p className="mt-2 text-sm leading-relaxed text-muted">{m.caption}</p>}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
