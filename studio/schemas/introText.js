export default {
  name: 'introText',
  title: 'Introduction',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Text',
      type: 'text',
    },
  ],
  
  preview: {
    select: {
      title: 'title',
    },
    
  },
}
