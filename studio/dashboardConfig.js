export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df41ebbac7317d935e0977e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qmmv33y1',
                  apiId: '0444f85a-ef0e-406c-971e-29c6f71aea4f'
                },
                {
                  buildHookId: '5df41ebbb041c7e496f32ccd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-igi65u6n',
                  apiId: 'daa701aa-0340-4f16-973a-640ed35718d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jolares/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-igi65u6n.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
