const tocSection = {
  name: "tocSection",
  type: "object",
  title: "Section",
  fields: [
    {
      type: "reference",
      name: "target",
      title: "Target",
      to: [{ type: "page" }],
    },
    {
      type: "string",
      name: "title",
      title: "Title",
      // to override title from referenced items
    },
    {
      type: "array",
      name: "links",
      title: "Links",
      of: [{ type: "tocLink" }],
    },
  ],
};

export default tocSection;
