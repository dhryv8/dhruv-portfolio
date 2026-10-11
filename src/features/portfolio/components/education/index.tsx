import { Panel } from "@/features/portfolio/components/panel"
import { EDUCATION } from "@/features/portfolio/data/education"
import type { Education } from "@/features/portfolio/types/education"

import { ResumeSectionHeader } from "../resume-section-header"
import { EducationItem } from "./education-item"

const ID = "education"

export function Education() {
  return (
    <Panel id={ID}>
      <ResumeSectionHeader id={ID} title="Education" />

      {EDUCATION.map((item) => (
        <div
          key={item.id}
          id={`education-${item.id}`}
          className="screen-line-bottom scroll-mt-14 p-4"
        >
          <EducationItem key={item.id} item={item} />
        </div>
      ))}
    </Panel>
  )
}
