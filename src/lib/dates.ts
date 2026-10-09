// "June 2026", "August 2026" -> "Jun – Aug 2026"; spans across years keep both years.
const short = (d: string) => {
  const [month, year] = d.split(' ')
  return { month: month.slice(0, 3), year }
}

export function dateRange(start: string, end: string) {
  const s = short(start)
  if (end === 'Present') return `${s.month} ${s.year} – Present`
  const e = short(end)
  if (s.year === e.year) return `${s.month} – ${e.month} ${e.year}`
  return `${s.month} ${s.year} – ${e.month} ${e.year}`
}
