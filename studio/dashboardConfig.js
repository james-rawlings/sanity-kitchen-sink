export default {
  widgets: [
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
                  buildHookId: '5fd462a7260f0545a130a928',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-sk4dr6if',
                  apiId: 'f800c8d1-5324-4508-9032-cda9aa6bc7fa'
                },
                {
                  buildHookId: '5fd462a7ae5523193751cd95',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b3gtr1es',
                  apiId: '2ea9a7bb-0e97-450a-b7f8-565ab06a7d22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/james-rawlings/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b3gtr1es.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
