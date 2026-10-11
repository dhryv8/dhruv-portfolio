import { Panel } from "@/features/portfolio/components/panel"

import { ResumeSectionHeader } from "./resume-section-header"

const CERTIFICATIONS = [
  {
    title: "Fortinet NSE 1 Certified in Cybersecurity",
    issuer: "Fortinet",
  },
  {
    title: "Fortinet NSE 2 Certified in Cybersecurity",
    issuer: "Fortinet",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
  },
]

const ID = "certifications"

export function ResumeCertifications() {
  return (
    <Panel id={ID}>
      <ResumeSectionHeader id={ID} title="Certifications" />

      <ul>
        {CERTIFICATIONS.map((certification) => (
          <li
            key={certification.title}
            className="screen-line-bottom p-4 last:border-none"
          >
            <h3 className="font-medium">
              {certification.title}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                {certification.issuer}
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
