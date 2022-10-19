export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '634fbe8e0b16887c4cd60a62',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4z48n29t',
                  apiId: '2b6591a0-89db-4496-8d8b-9ce58efa778c'
                },
                {
                  buildHookId: '634fbe8e33f3047738ad896d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xw85bw2p',
                  apiId: '043541f5-3112-4459-a285-801fe44179a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ErikJareback/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xw85bw2p.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
