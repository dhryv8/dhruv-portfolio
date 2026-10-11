import { format, parse } from "date-fns"

import type { Experience } from "@/features/portfolio/types/experiences"

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article
      id={`experience-${experience.id}`}
      className="screen-line-bottom space-y-4 py-4 last:border-none"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 px-4">
        <h3 className="text-xl font-medium">{experience.companyName}</h3>
        {experience.location && (
          <p className="text-sm text-muted-foreground">{experience.location}</p>
        )}
      </div>

      <div className="space-y-4 px-4">
        {experience.positions.map((position) => (
          <section key={position.id} className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="font-medium">{position.title}</h4>
              <p className="text-sm text-muted-foreground">
                {formatEmploymentDate(position.employmentPeriod.start)}
                {position.employmentPeriod.end &&
                  ` – ${formatEmploymentDate(position.employmentPeriod.end)}`}
              </p>
            </div>
            {position.description && (
              <p className="text-sm/6 text-muted-foreground">
                {position.description}
              </p>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}

function formatEmploymentDate(value: string) {
  return format(parse(value, "MM.yyyy", new Date()), "MMM. yyyy")
}
