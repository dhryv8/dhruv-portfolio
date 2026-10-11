import { Suspense } from "react"
import { decodeEmail } from "@/utils/string"
import { ArrowUpRightIcon, FileTextIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/registry/components/github-contributions/github-contributions"
import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"
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
    prominent: true,
  },
]

export function ProfileHeader() {
  return (
    <header className="screen-line-top screen-line-bottom relative isolate overflow-hidden border-x px-4 py-8 sm:px-6 sm:py-10">
      <div className="relative z-10 space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            {USER.displayName}
          </h1>
          <p className="text-muted-foreground">Software Engineer</p>
          <p className="text-sm text-muted-foreground">
            Open to internships and full-time roles
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-3 sm:gap-x-5 sm:gap-y-3">
          {CONTACT_LINKS.map(({ label, href, icon, external, prominent }) => (
            <li key={label}>
              {prominent ? (
                <Button
                  nativeButton={false}
                  variant="outline"
                  size="sm"
                  render={
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    />
                  }
                >
                  {icon}
                  View résumé
                  <ArrowUpRightIcon data-icon="inline-end" />
                </Button>
              ) : (
                <a
                  className="inline-flex min-h-9 items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  <span className="[&_svg]:size-4">{icon}</span>
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 border-t pt-5">
        <Suspense fallback={<GitHubContributionsFallback />}>
          <GitHubContributions
            contributions={getGitHubContributions()}
            githubProfileUrl={SOCIAL.github.href}
            periodLabel="in the last year"
            className="py-0"
          />
        </Suspense>
      </div>
    </header>
  )
}
