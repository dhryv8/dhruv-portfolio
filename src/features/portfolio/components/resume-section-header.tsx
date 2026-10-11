import {
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

export function ResumeSectionHeader({
  id,
  title,
  count,
}: {
  id: string
  title: string
  count?: number
}) {
  return (
    <PanelHeader>
      <PanelTitle>
        <a href={`#${id}`}>{title}</a>
        {count !== undefined && <PanelTitleSup>({count})</PanelTitleSup>}
        <PanelTitleCopy id={id} />
      </PanelTitle>
    </PanelHeader>
  )
}
