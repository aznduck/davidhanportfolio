// Builds /llms.txt (https://llmstxt.org) from content.ts. The site renders client-side, so this is
// how agents that don't run JavaScript get the same content as the page.
import { education, experience, involvement, personal, profile, projects, skills } from '../content.ts'
import { dateRange } from './dates.ts'

export function buildLlmsTxt() {
  const internships = experience.filter((e) => e.role.includes('Intern')).map((e) => e.company)
  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.name} is a Computer Science student at USC (graduating ${education.graduation}) and software engineer. ` +
      `Previously interned at ${internships.slice(0, -1).join(', ')}, and ${internships.at(-1)}.`,
    '',
    profile.intro,
    '',
    `- Location: ${profile.location}`,
    `- Email: ${profile.email}`,
    `- Resume (PDF): ${profile.resume}`,
    ...profile.socials.map((s) => `- ${s.label}: ${s.href}`),
    '',
    '## Experience',
    '',
  ]

  for (const e of experience) {
    lines.push(`### ${e.company}: ${e.role} (${dateRange(e.start, e.end)}, ${e.location})`, '')
    lines.push(...e.bullets.map((b) => `- ${b}`))
    lines.push(`- Tech: ${e.tags.join(', ')}`, '')
  }

  lines.push('## Projects', '')
  for (const p of projects) {
    lines.push(`### ${p.name} (${dateRange(p.start, p.end)})`, '', p.summary, '')
    lines.push(...p.bullets.map((b) => `- ${b}`))
    lines.push(`- Tech: ${p.tags.join(', ')}`)
    lines.push(...p.links.map((l) => `- ${l.label}: ${l.href}`), '')
  }

  lines.push(
    '## Education',
    '',
    `- ${education.school}, ${education.degree}, ${education.graduation} (GPA ${education.gpa})`,
    `- Minors: ${education.minors.join(', ')}`,
    `- Honors: ${education.honors.join('; ')}`,
    `- Coursework: ${education.coursework.join(', ')}`,
    '',
    '## Involvement',
    '',
    ...involvement.map((i) => `- ${i.name}, ${i.role} (${dateRange(i.start, i.end)}): ${i.summary}`),
    '',
    '## Skills',
    '',
    `- Languages: ${skills.languages.join(', ')}`,
    `- Tools/Frameworks: ${skills.tools.join(', ')}`,
    '',
    '## About',
    '',
  )
  for (const s of personal) {
    lines.push(`### ${s.heading}`, '')
    if (s.body.length) lines.push(s.body.join(' '), '')
    for (const m of s.media) if (m.caption) lines.push(`- ${m.caption}${m.href ? ` (${m.href})` : ''}`)
    for (const l of s.links ?? []) lines.push(`- ${l.label}: ${l.href}`)
    lines.push('')
  }

  return lines.join('\n').trimEnd() + '\n'
}
