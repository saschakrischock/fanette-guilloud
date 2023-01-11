export function useBio() {
  return useKql({
    query: 'page("bio")',
    select: {
      title: true,
      biotext: 'page.headline.kirbytext',
    },
  })
}
