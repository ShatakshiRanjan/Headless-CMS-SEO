// schemas/location.js
export default {
  name: 'location',
  type: 'document',
	title: 'Location',
  fields: [
    {
      name: 'city',
      type: 'string',
      title: 'City'
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: function (doc) {
          // Combine the city and state fields to generate the slug
          return `${doc.city} ${doc.state}`;
        },
        maxLength: 200, // Specify the maximum length of the slug if desired
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200) // Customize slug generation as needed
      }
    },
  ]
}