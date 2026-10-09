import type { ReactNode } from 'react'

export default function Section({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="mb-8 font-mono text-sm tracking-wide text-faint">
        <span className="text-accent">#</span> {label}
      </h2>
      {children}
    </section>
  )
}
