import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { GitHubIcon } from "@/components/icons"
import type { Project } from "@/features/portfolio/types/projects"

export function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="space-y-3 p-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        {project.link && (
          <a
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            href={addQueryParams(project.link, UTM_PARAMS)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
          >
            <GitHubIcon className="size-5" />
          </a>
        )}
      </div>
      {project.description && (
        <p className="text-sm/6 text-muted-foreground">{project.description}</p>
      )}
    </article>
  )
}
