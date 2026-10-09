import { profile } from '../content'
import Particles from './Particles'

export default function Hero({ particleColor }: { particleColor: string }) {
  const links = [
    { label: 'GitHub', href: profile.socials.find((s) => s.label === 'GitHub')!.href },
    { label: 'LinkedIn', href: profile.socials.find((s) => s.label === 'LinkedIn')!.href },
    { label: 'Email', href: `mailto:${profile.email}` },
    { label: 'Resume ↗', href: profile.resume },
  ]

  return (
    <header id="top" className="relative overflow-hidden">
      <Particles color={particleColor} />
      <div className="relative mx-auto max-w-3xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32">
        <div className="relative inline-block">
          <img
            src={profile.headshot}
            alt={profile.name}
            className="h-24 w-24 rounded-full border border-line object-cover"
          />
          <img src={profile.duck} alt="" className="absolute -right-3 -bottom-1 h-10 w-10 -rotate-12" />
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 font-mono text-sm text-accent">{profile.tagline}</p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.intro}</p>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">{profile.sidequests}</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="inline-block rounded-md border border-line bg-surface/80 px-3 py-1.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
