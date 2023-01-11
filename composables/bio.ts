export function useBio() {
  return useKql({
    query: 'page("bio")',
    select: {
      title: true,
      // description: true,
      subheadline: true,
      biotext: 'page.headline.kirbytext',
    },
  })
}
