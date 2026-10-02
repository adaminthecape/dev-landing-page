You are updating `src/config/data.ts` in my React/TypeScript CV site. Convert my plaintext CV below into real data matching the exact TypeScript interfaces from `src/config/types.ts`. Do not change the interfaces, only populate the exported constants with real content.

Interfaces to satisfy:

```ts
export interface BaseData { author: string; title: string; tagline: string; }
export interface Capability { id: number; icon: string; title: string; description: string; }
export interface Project { id: number; title: string; description: string; technologies: string[]; link: string; image: string; }
export interface Skill { category: string; skills: string[]; }
export interface Stat { id: number; value: number; label: string; suffix: string; }
export interface Testimonial { id: number; quote: string; author: string; role: string; company: string; avatar: string; }
export interface LinkItem { label: string; href: string; }
export interface FooterData { author: string; tagline: string; copyright: string; builtWith: string; links: LinkItem[]; }
export interface Section { id: string; label: string; tagline?: string | undefined; }
```

Constants to produce, with rules for each:

1. **`BASE_DATA`** — `author` (my full name or preferred display name), `title` (my current/target job title, e.g. "Full Stack Developer"), `tagline` (1–2 sentence professional summary based on my CV's summary/objective section, written in third person, no more than ~200 characters).

2. **`CAPABILITY_DATA`** — 4–6 entries. Each is a real strength or theme drawn from my actual work history (not generic placeholders). Use a single relevant emoji for `icon`, a short `title` (2–4 words), and a `description` (1–2 sentences) citing a concrete example, project, or outcome from my CV (metrics/impact if available). Base these on themes like: product ownership, performance/scaling, mentorship/leadership, cross-team collaboration, ambiguous problem solving, and continuous learning — but only include ones actually supported by my CV content.

3. **`PROJECT_DATA`** — one entry per real project/role I can pull from my CV (work projects, side projects, or notable achievements per job). `title`, `description` (1 sentence, what it does/did), `technologies` (array of tech/tools used), `link` (real URL if I provide one, otherwise omit or use an empty string `''`), `image` (a single relevant emoji).

4. **`SKILL_DATA`** — group my actual skills from the CV into categories (e.g. Frontend, Backend, Tools & DevOps, Design, Languages, Cloud) — only include categories I have real skills for.

5. **`STAT_DATA`** — 3–4 quantifiable highlights actually derivable from my CV (e.g. years of experience calculated from earliest role to now, number of companies/projects, team size managed, etc.). Do not invent numbers — if a stat isn't derivable, omit it rather than guessing.

6. **`TESTIMONIAL_DATA`** — only include this if I provide actual quotes/references in my CV or separately. If I don't provide any, leave the array empty (`[]`) rather than inventing quotes.

7. **`FOOTER_DATA`** — `author` should reference `BASE_DATA.author`, `tagline` (short, different wording from `BASE_DATA.tagline`), `copyright` as `` `© ${new Date().getFullYear()} ${BASE_DATA.author} - All rights reserved.` ``, `builtWith` (leave as "Designed and built with React, TypeScript, and Tailwind CSS." unless told otherwise), `links` built from my real contact info (GitHub, LinkedIn, email as `mailto:`, personal site, etc. — only include ones I actually provide).

8. **`HEADER_LINK_DATA`** and **`SECTION_DATA`** — keep these as-is/unchanged unless a section needs to be added or removed based on which constants end up empty (e.g. drop the Testimonials nav link/section if `TESTIMONIAL_DATA` is empty).

Formatting rules:
- Use single quotes and tabs for indentation, matching the existing file style.
- Keep the same export order and structure as the current file.
- Do not fabricate employers, dates, metrics, or quotes — if information is missing from my CV, leave a `// TODO:` comment on that field instead of inventing content.
- Output the full replacement contents of `src/config/data.ts`.

Here is my plaintext CV:

"""
<PASTE YOUR CV TEXT HERE>
"""