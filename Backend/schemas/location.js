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
    }
  ]
}