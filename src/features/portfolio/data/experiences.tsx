import { DraftingCompassIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "geeksforgeeks",
    companyName: "GeeksforGeeks",
    location: "Remote",
    positions: [
      {
        id: "technical-writer-intern",
        title: "Technical Writer Intern",
        employmentPeriod: {
          start: "01.2024",
          end: "04.2024",
        },
        employmentType: "Internship",
        icon: <DraftingCompassIcon />,
        description:
          "Generated 125,000+ total views across technical publications by authoring clear, in-depth articles covering core Computer Science subjects including DBMS, Computer Networks, Operating Systems, Cloud Computing, and Cybersecurity. Designed custom system architecture diagrams and process flowcharts using draw.io to enhance reader comprehension and visual clarity. Synthesized complex theoretical CS concepts into structured, beginner-friendly technical documentation for a diverse developer audience.",
        isExpanded: true,
      },
    ],
  },
]
