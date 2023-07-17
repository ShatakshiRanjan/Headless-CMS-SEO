// ./schemas/sub.js

export default {
    name: 'sub',
    title: 'Subject',
    type: 'document',
    fields: [
      {
        name: 'fullName',
        title: 'Full name',
        type: 'string',
      },
      {
        name: 'portrait',
        title: 'Portrait',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'metadesc',
        type: 'string',
        title: 'Meta Description'
      },
    ]
  }