import { decodeEmail } from "@/utils/string"
import { FileTextIcon, MailIcon } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

const email = decodeEmail(USER.emailB64)

const CONTACT_LINKS = [
  {
    label: email,
    href: `mailto:${email}`,
    icon: <MailIcon />,
  },
  {
    label: SOCIAL.linkedin.title,
    href: SOCIAL.linkedin.href,
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: SOCIAL.github.title,
    href: SOCIAL.github.href,
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1ipo6GxsogvKQLAQLXYXlRcdDzZ4hxUZk/view?usp=sharing",
    icon: <FileTextIcon />,
    external: true,
  },
]

export function ProfileHeader() {
  return (
    <header className="screen-line-top screen-line-bottom border-x px-4 py-8 sm:px-6 sm:py-10">
      <div className="space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            {USER.displayName}
          </h1>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {CONTACT_LINKS.map(({ label, href, icon, external }) => (
            <li key={label}>
              <a
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <span className="[&_svg]:size-4">{icon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
