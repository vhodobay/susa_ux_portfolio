export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
  ],
  
  preview: {
    select: {
      title: 'author',
    },
  },
}
