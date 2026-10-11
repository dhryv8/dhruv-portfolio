import dynamic from "next/dynamic"

import { MeteorBackground } from "@/components/meteor-background"
import { SiteHeader } from "@/components/site-header"

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
)

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    // References:
    // - https://base-ui.com/react/overview/quick-start#portals
    // - https://base-ui.com/react/overview/quick-start#ios-26-safari
    <div className="group/layout relative isolate">
      <MeteorBackground />
      <SiteHeader />
      <main className="relative z-10 max-w-screen overflow-x-clip px-2">
        {children}
      </main>
      <ScrollToTop />
    </div>
  )
}
