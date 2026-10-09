import { profile } from '../content'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 pt-8 pb-16 sm:px-6">
      <div className="border-t border-line pt-8">
        <p className="text-lg font-medium">Say hi.</p>
        <a href={`mailto:${profile.email}`} className="mt-1 inline-block font-mono text-sm text-accent hover:underline">
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-faint">
          <ul className="flex flex-wrap gap-4">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.v1} target="_blank" rel="noreferrer" className="hover:text-accent">
            v1 →
          </a>
        </div>
      </div>
    </footer>
  )
}
