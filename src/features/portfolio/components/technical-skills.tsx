import {
  IconBrandAws,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react"
import {
  BotIcon,
  CodeXmlIcon,
  CoffeeIcon,
  DatabaseIcon,
  GitBranchIcon,
  LayoutGridIcon,
  SproutIcon,
  TerminalIcon,
} from "lucide-react"

import { CssIcon, ShadcnIcon } from "@/components/icons"
import { Panel } from "@/features/portfolio/components/panel"

import { ResumeSectionHeader } from "./resume-section-header"

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: <CoffeeIcon /> },
      { name: "TypeScript", icon: <IconBrandTypescript /> },
      { name: "JavaScript", icon: <IconBrandJavascript /> },
      { name: "Python", icon: <IconBrandPython /> },
      { name: "HTML", icon: <CodeXmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <IconBrandReact /> },
      { name: "Tailwind CSS", icon: <IconBrandTailwind /> },
      { name: "shadcn", icon: <ShadcnIcon /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SproutIcon /> },
      { name: "Streamlit", icon: <LayoutGridIcon /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <IconBrandMongodb /> },
      { name: "PostgreSQL", icon: <DatabaseIcon /> },
    ],
  },
  {
    category: "Developer tools",
    skills: [
      { name: "AWS", icon: <IconBrandAws /> },
      { name: "Docker", icon: <IconBrandDocker /> },
      { name: "Git", icon: <GitBranchIcon /> },
      { name: "GitHub", icon: <IconBrandGithub /> },
      { name: "GitHub Copilot", icon: <BotIcon /> },
      { name: "Linux", icon: <TerminalIcon /> },
    ],
  },
]

const ID = "technical-skills"

export function TechnicalSkills() {
  return (
    <Panel id={ID}>
      <ResumeSectionHeader id={ID} title="Technical skills" />

      <div className="divide-y divide-line">
        {SKILL_GROUPS.map(({ category, skills }) => (
          <div
            key={category}
            className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-4"
          >
            <h3 className="px-4 text-sm font-medium text-muted-foreground">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-1.5 px-4">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-50/80 px-2.5 py-1.5 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80"
                >
                  <span
                    className="flex size-4 items-center justify-center text-muted-foreground [&_svg]:size-4"
                    aria-hidden
                  >
                    {skill.icon}
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  )
}
