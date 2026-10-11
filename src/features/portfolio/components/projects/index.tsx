import { Panel } from "@/features/portfolio/components/panel"
import { PROJECTS } from "@/features/portfolio/data/projects"

import { ResumeSectionHeader } from "../resume-section-header"
import { ProjectItem } from "./project-item"

const ID = "projects"

export function Projects() {
  return (
    <Panel id={ID}>
      <ResumeSectionHeader id={ID} title="Projects" count={PROJECTS.length} />

      <ul>
        {PROJECTS.map((project) => (
          <li key={project.id} className="screen-line-bottom last:border-none">
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </Panel>
  )
}
