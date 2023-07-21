// schemas/main.js

export default {
  name: 'main',
  title: 'Main',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
    {
      name: 'location',
      type: 'object',
      fields: [
        {
          title: 'Locate',
          name: 'locate',
          type: 'reference',
          to: [{ type: 'location' }]
        }
      ]
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: function (doc) {
          const titleSlug = doc.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
          const locationSlug = doc.location && doc.location.locate
            ? `${doc.location.locate.city}-${doc.location.locate.state}`.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            : '';
          // Combine the titleSlug and locationSlug to generate the final slug
          return `${titleSlug}-${locationSlug}`;
        },
        maxLength: 400, // Specify the maximum length of the slug if desired
      }
    },
  ]
};

