// Map a URL (regex) to a selector to use to uncover the product name
export const extractors = [
  () => {
    if (!/www.amazon.com/.test(window.location.href))
      return null
    // find the product name from the uRL
    const url = new URL(window.location.href)
    // Find the keywords from the URL keyword param
    return url.searchParams.get('keywords')
      || url.searchParams.get('k')
      || null
  },
]
