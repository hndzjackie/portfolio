// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.documentTypeListItem('pageInfo').title('PageInfo'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('social').title('Socials'),
      S.documentTypeListItem('experience').title('Experiences'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['pageInfo', 'skill', 'project', 'social', 'experience'].includes(item.getId()),
      ),
    ])
