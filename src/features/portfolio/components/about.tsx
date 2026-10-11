import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { USER } from "@/features/portfolio/data/user"

import { ResumeSectionHeader } from "./resume-section-header"

const ID = "about"

export function About() {
  return (
    <Panel id={ID}>
      <ResumeSectionHeader id={ID} title="About" />
      <PanelContent>
        <p className="text-base/7 text-muted-foreground">{USER.about}</p>
      </PanelContent>
    </Panel>
  )
}
