export default {
  name: "workProject",
  title: "My Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "url",
      title: "Link",
      type: "string",
    },
    {
      name: "role",
      title: "My role",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
    },
    {
      name: "overview",
      title: "Overview",
      type: "text",
    },
    {
      name: "problemStatement",
      title: "Problem Statement",
      type: "text",
    },
    {
      name: "process",
      title: "Process",
      type: "text",
    },
    {
      name: "outcomes",
      title: "Outcomes",
      type: "text",
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phoneImage_1",
      title: "Phone image 1",
      type: "image",
      options: {
        hotspot: false,
      },
    },
    {
      name: "phoneImage_2",
      title: "Phone image 2",
      type: "image",
      options: {
        hotspot: false,
      },
    },
    {
      name: "phoneImage_3",
      title: "Phone image 3",
      type: "image",
      options: {
        hotspot: false,
      },
    },
    {
      name: "phoneImage_4",
      title: "Phone image 4",
      type: "image",
      options: {
        hotspot: false,
      },
    },
    {
      name: "phoneImage_5",
      title: "Phone image 5",
      type: "image",
      options: {
        hotspot: false,
      },
    },
    {
      name: "phoneImage_6",
      title: "Phone image 6",
      type: "image",
      options: {
        hotspot: false,
      },
    },
    {
      name: "desktopImage_1",
      title: "Desktop Kép 1",
      type: "image",
      options: {
        hotspot: false,
      },
    },    {
      name: "desktopImage_2",
      title: "Desktop Kép 2",
      type: "image",
      options: {
        hotspot: false,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
