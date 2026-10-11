const DEFAULT_SITE_URL = "https://dhryv8folio.vercel.app"

export function getSiteUrl(value = process.env.NEXT_PUBLIC_APP_URL) {
  const configuredUrl = value?.trim()

  if (!configuredUrl) {
    return DEFAULT_SITE_URL
  }

  const urlWithProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(configuredUrl)
    ? configuredUrl
    : `https://${configuredUrl}`

  return new URL(urlWithProtocol).origin
}
