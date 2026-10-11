import { Panel } from "@/features/portfolio/components/panel"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"

import { ResumeSectionHeader } from "../resume-section-header"
import { ExperienceItem } from "./experience-item"

const ID = "experience"

export function Experiences() {
  return (
    <Panel id={ID}>
      <ResumeSectionHeader id={ID} title="Experience" />

      <ul>
        {EXPERIENCES.map((experience) => (
          <li key={experience.id}>
            <ExperienceItem experience={experience} />
          </li>
        ))}
      </ul>
    </Panel>
  )
}
