export default function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li key={t} className="rounded bg-line/70 px-1.5 py-0.5 font-mono text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  )
}
