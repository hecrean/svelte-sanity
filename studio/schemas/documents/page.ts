import blockContent from "../objects/block-content";

const page = {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your page.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};

export default page;
