// Map a URL (regex) to a selector to use to uncover the product name
export const selectors = [
  {
    match: /www\.amazon\.com/,
    selector: 'input[id="twotabsearchtextbox"]',
  },
]
export function createLinkToFacebook(search: string, location: string) {
  const link = document.createElement('a')
  link.href = `https://www.facebook.com/marketplace/${encodeURIComponent(location)}/search?query=${encodeURIComponent(search)}`
  return link
}
