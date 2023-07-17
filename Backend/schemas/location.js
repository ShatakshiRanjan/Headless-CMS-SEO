// schemas/location.js
export default {
  name: 'location',
  type: 'document',
	title: 'Location',
  fields: [
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: function (loc) {
          // Combine the city and state fields to generate the slug
          return `${loc.city} ${loc.state}`;
        },
        maxLength: 200, // Specify the maximum length of the slug if desired
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200) // Customize slug generation as needed
      }
    },
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
  ]
}