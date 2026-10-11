import { getSiteUrl } from "@/lib/site-url"

export { cn } from "cn"

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString()
}
