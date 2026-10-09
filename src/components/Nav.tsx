import { useEffect, useState } from 'react'
import { profile } from '../content'

const links = ['work', 'projects', 'about'] as const

export default function Nav({ onDuckClick }: { onDuckClick: () => void }) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      // A section counts as active while it crosses the upper third of the viewport.
      { rootMargin: '-30% 0px -65% 0px' },
    )
    for (const id of [...links, 'top', 'education']) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-20 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={onDuckClick}
          aria-label="Quack"
          title="quack?"
          className="rounded-md p-1 transition-transform hover:-rotate-12 active:scale-90"
        >
          <img src={profile.duck} alt="" className="h-7 w-7" />
        </button>
        <ul className="flex gap-5 font-mono text-sm">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors hover:text-accent ${active === id ? 'text-accent' : 'text-muted'}`}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
