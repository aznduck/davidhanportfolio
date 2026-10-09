// Single source of truth for site content. Design changes should never need to touch this file,
// and content updates should never need to touch components.
// Sources: davidhan_resume.pdf (roles, dates, bullets) and the v1 site (tone, personal sections).

export type Link = { label: string; href: string }

export type Experience = {
  company: string
  role: string
  location: string
  start: string
  end: string // "Present" if ongoing
  summary: string // one-liner for compact layouts
  bullets: string[]
  tags: string[]
  href?: string
  image?: string
}

export type Project = {
  name: string
  start: string
  end: string
  summary: string
  bullets: string[]
  tags: string[]
  links: Link[]
  image?: string
}

export type Involvement = {
  name: string
  role: string
  start: string
  end: string
  summary: string
  href?: string
}

export type PersonalSection = {
  id: string
  heading: string
  emoji: string
  body: string[]
  media: { src: string; alt: string; href?: string; caption?: string }[]
  links?: Link[]
}

export const profile = {
  name: 'David Han',
  handle: 'aznduck',
  location: 'Los Angeles, CA',
  email: 'dhan6663@usc.edu',
  headline: 'Computer Science @ USC',
  intro:
    "I'm a Computer Science student at USC who likes building things people actually use. " +
    "I've shipped software at Bloomberg, Activision Blizzard, and Alarm.com, and founded a restaurant-tech startup along the way.",
  sidequests: 'Other sidequests include making music 🎵, competing in racket sports 🎾, and bringing ideas to life 💡',
  headshot: '/images/headshot.jpg',
  duck: '/images/duck.png',
  resume: '/resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/aznduck' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/davidhanusc' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCv0Z6Zi4PnPXHI8pDVpe5GA' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@aznduck.piano' },
  ] satisfies Link[],
}

export const theme = {
  background: '#181818',
  accent: '#f0c417',
  font: 'Poppins',
}

export const education = {
  school: 'University of Southern California',
  degree: 'B.S. Computer Science',
  graduation: 'May 2027',
  gpa: '3.77',
  minors: ['AI Applications', 'Video Game Programming'],
  honors: ["Presidential Scholar (half tuition, top 2%)", "Viterbi Dean's List (6x)"],
  coursework: [
    'Data Structures & Algorithms',
    'Software Engineering',
    'Computer/Embedded Systems',
    'Operating Systems',
    'Artificial Intelligence',
    'Internetworking',
  ],
}

export const experience: Experience[] = [
  {
    company: 'Bloomberg',
    role: 'Software Engineering Intern',
    location: 'New York, NY',
    start: 'June 2026',
    end: 'August 2026',
    summary: 'Built tooling to migrate fields off a legacy C++ analytics engine, 5x faster.',
    bullets: [
      'Built a Python microservice speeding up the field migration process on a legacy C++ analytics engine by 500%',
      'Engineered a React/TypeScript dashboard surfacing traffic-weighted migration gaps across 1000+ unstructured fields',
      'Designed a diff-analysis pipeline with tolerance-banded deviation checks, catching 95% of pre-release regressions',
      'Deployed on an internal PaaS with custom auth and Kubernetes orchestration, handling 1M+ daily requests',
    ],
    tags: ['Python', 'C++', 'React', 'TypeScript', 'Kubernetes'],
    href: 'https://www.bloomberg.com',
  },
  {
    company: 'Activision Blizzard',
    role: 'Software Engineering Intern',
    location: 'Sherman Oaks, CA',
    start: 'June 2025',
    end: 'September 2025',
    summary: 'Built a security dashboard for Call of Duty processing millions of real-time anti-cheat detections.',
    bullets: [
      'Led development of a security dashboard for Call of Duty, processing millions of real-time anti-cheat detections',
      'Designed 5+ scalable backend microservices and data pipelines in Go, improving threat intelligence efficiency by 40%',
      'Built modular frontend features in TypeScript + React, integrating Postgres-backed services',
      'Implemented OAuth 2.0 flows with Microsoft Entra and JWT caching, reducing authentication latency by 25%',
    ],
    tags: ['Go', 'TypeScript', 'React', 'PostgreSQL', 'OAuth 2.0'],
    href: 'https://www.callofduty.com/warzone/ricochet',
    image: '/images/activision.jpg',
  },
  {
    company: 'Batchr',
    role: 'Founder & Lead Engineer',
    location: 'Los Angeles, CA',
    start: 'January 2025',
    end: 'August 2025',
    summary: 'Founded a restaurant-tech startup for production planning and inventory management.',
    bullets: [
      'Founded a restaurant technology startup building an ambient system for production planning and inventory management',
      'Architected a full-stack app with React + Express.js, with RESTful APIs and MongoDB schemas for products',
      "Secured a paid partnership with Angela's Ice Cream, deploying across 8+ locations",
    ],
    tags: ['React', 'Express.js', 'MongoDB'],
    href: 'https://github.com/aznduck/batchr-deployment',
    image: '/images/batchr.jpg',
  },
  {
    company: 'USC Viterbi School of Engineering',
    role: 'Undergraduate Tutor',
    location: 'Los Angeles, CA',
    start: 'August 2024',
    end: 'May 2025',
    summary: 'Tutored 50+ students in CSCI 103/170.',
    bullets: [
      'Tutored 50+ students in CSCI 103/170: graph theory, logic, asymptotics, probability, and C++ fundamentals',
      "Raised students' test scores by 20%+ through review sessions, office hours, and self-curated problem sets",
    ],
    tags: ['C++', 'Discrete Math'],
  },
  {
    company: 'Alarm.com',
    role: 'Software Engineering Intern',
    location: 'Lawrence, KS',
    start: 'June 2024',
    end: 'August 2024',
    summary: 'Built scheduling for home-automation "scenes".',
    bullets: [
      'Led development of a scheduling feature for home automation "scenes" using Ember and C# in an Agile environment',
      'Engineered a backend scheduler with 30+ optimized SQL queries and caching, boosting database performance by 15%',
      'Migrated 3+ legacy ASPX pages to modern JS frameworks',
    ],
    tags: ['C#', '.NET', 'Ember', 'SQL'],
    href: 'https://alarm.com',
    image: '/images/alarm.png',
  },
]

export const projects: Project[] = [
  {
    name: 'Fleet Commander',
    start: 'May 2025',
    end: 'August 2025',
    summary: 'Multi-agent, zero-touch deployment pipeline: repos auto-analyze, test, and deploy via webhooks.',
    bullets: [
      'Multi-agent pipeline that lets repositories auto-analyze, test, and deploy via webhooks',
      'FastAPI backend with LangChain ReAct agents, WebSocket live status updates, and orchestrated CI/CD',
    ],
    tags: ['Python', 'Next.js', 'FastAPI', 'LangChain'],
    links: [],
  },
  {
    name: 'Glance',
    start: 'August 2024',
    end: 'May 2025',
    summary: 'AI-powered documentation platform that keeps teams aligned. Built at LavaLab.',
    bullets: [
      'Full-stack AI documentation platform saving users 5+ hours weekly through automated insights',
      'Distributed insight pipeline using custom ML pipelines and Tesseract OCR',
    ],
    tags: ['Electron', 'OpenAI', 'MongoDB'],
    links: [{ label: 'Site', href: 'https://tryglance.framer.website/' }],
    image: '/images/glance.jpg',
  },
  {
    name: "Let's Get Lyrical",
    start: 'January 2025',
    end: 'May 2025',
    summary: 'Lyric word clouds generated in under a second from multi-threaded scraping.',
    bullets: [
      'Java/Spring Boot backend with multi-threaded lyric scraping for sub-second word cloud creation',
      'Extensive unit and integration tests with Cucumber and JUnit',
    ],
    tags: ['React', 'Java', 'Spring Boot', 'Cucumber'],
    links: [],
  },
]

export const involvement: Involvement[] = [
  {
    name: 'LavaLab',
    role: 'Developer, F24 Cohort',
    start: 'September 2024',
    end: 'December 2024',
    summary:
      "Built Glance with a PM and designer at USC's top product incubator (4% acceptance). Won Best Pitch at VC Demo Day.",
    href: 'https://usclavalab.org/',
  },
  {
    name: 'Theta Tau',
    role: 'Media Chair',
    start: 'December 2023',
    end: 'December 2024',
    summary: "Maintained the chapter website and made media that increased rush engagement by 17%.",
    href: 'https://uscthetatau.org',
  },
]

export const skills = {
  languages: ['C++', 'Java', 'Python', 'Go', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'Assembly', 'Lua', 'Bash', 'Swift'],
  tools: ['React', 'Electron', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'Cucumber', 'Git', 'Linux', 'AWS'],
}

// The "about" half of the site, carried over from v1.
export const personal: PersonalSection[] = [
  {
    id: 'racket-sports',
    heading: "I'm a racket sport enthusiast",
    emoji: '🎾',
    body: [
      "Tennis, pickleball, ping pong, badminton: I've always loved battling it out on the court.",
      "I compete with the USC Club Tennis Team and enjoy spamming dinks in pickleball.",
    ],
    media: [
      { src: '/images/tennis.jpg', alt: 'David playing tennis' },
      { src: '/images/racket-sports.jpg', alt: 'David and Akki playing racket sports' },
    ],
  },
  {
    id: 'music',
    heading: "I'm a musician",
    emoji: '🎵',
    body: [
      "I've played piano since I was 5. I started out in nursing homes and school concerts, then moved into content creation.",
      'My TikTok @aznduck.piano has grown to 2.5k+ followers and 500k+ likes.',
    ],
    media: [
      {
        src: '/images/piano.jpg',
        alt: 'David playing piano',
        href: 'https://drive.google.com/file/d/1Jw9OmdR9FvRu60b4v48VmOtPzOk_LD5X/view?usp=sharing',
      },
      {
        src: '/images/piano-performance.jpg',
        alt: 'David at a piano performance',
        href: 'https://drive.google.com/file/d/14iL5VLnQJnjbxJVqQMq88ZP5wcHAAznh/view?usp=drive_link',
      },
      {
        src: '/images/dj.jpg',
        alt: 'David DJing',
        href: 'https://drive.google.com/file/d/1-M1hx7RALr9hETGTQ5QyPNlOaxpJ8gmM/view?usp=sharing',
      },
      {
        src: '/images/piano-icecream.jpg',
        alt: 'David performing piano at an ice cream shop',
        href: 'https://drive.google.com/file/d/18oOFXyWYToXnmQ4s0EtYkhuaaF580NAS/view?usp=sharing',
      },
    ],
    links: [{ label: '@aznduck.piano', href: 'https://www.tiktok.com/@aznduck.piano' }],
  },
  {
    id: 'content',
    heading: "I'm a content creator",
    emoji: '🎞️',
    body: [],
    media: [
      {
        src: '/images/tennis-hype.jpg',
        alt: 'BVW Tennis senior-year hype reel',
        href: 'https://www.instagram.com/p/Cq6m1t5gKkr/',
        caption:
          "BVW Tennis Hype. Our coach might say we spent more time on the team Instagram than practicing. " +
          'This senior-year hype reel taught me graphic design and filmmaking, and the team went on to win state.',
      },
      {
        src: '/images/college-decisions.jpg',
        alt: 'College decision reactions video thumbnail',
        href: 'https://www.youtube.com/watch?v=26a8S4Wwx0w',
        caption:
          'College Decision Reactions. An emotional rollercoaster through my application season. ~100k views, my most-watched video.',
      },
      {
        src: '/images/theta-tau-rush.jpg',
        alt: 'Theta Tau rush video',
        href: 'https://drive.google.com/file/d/1uyyHz5XFWVrxnsZwu3wZt3_c6OCYqOIZ/view?usp=sharing',
        caption:
          "Theta Tau Rush. As Media Chair I made this video on the chapter's three pillars, shown to 250+ rushees in person.",
      },
    ],
  },
]
