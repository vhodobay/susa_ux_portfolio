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
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
