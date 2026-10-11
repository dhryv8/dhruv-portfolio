import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

const SECTION_LINKS = [
  { title: "About", href: "#about" },
  { title: "Education", href: "#education" },
  { title: "Technical skills", href: "#technical-skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Certifications", href: "#certifications" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center justify-between border-x px-4 sm:px-6 md:max-w-3xl">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open section navigation"
              />
            }
          >
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            {SECTION_LINKS.map(({ title, href }) => (
              <DropdownMenuItem key={href} render={<a href={href} />}>
                {title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
      </div>
    </header>
  )
}
