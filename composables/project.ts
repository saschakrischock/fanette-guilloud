export function useProject() {
  return useKql({
    query: `page("${useRoute().path}")`,
    isProject: true,
    select: {
      id: true,
      title: true,
      // description: true,
      subheadline: true,
      text: true,
      gallery: {
        query: 'page.images.sortBy("sort", "filename")',
        select: {
          resized: {
            query: 'file.resize(800)',
            select: ['url'],
          },
          width: true,
          height: true,
          url: true,
          alt: true,
        },
      },
    },
  })
}
