const tocLink = {
  title: "TOC link",
  name: "tocLink",
  type: "object",
  fields: [
    {
      type: "reference",
      name: "target",
      title: "Target",
      to: [
        { type: "page" },
        // etc
      ],
    },
    {
      type: "string",
      name: "title",
      title: "Title",
      // to override title from referenced items
    },
    {
      type: "array",
      name: "children",
      title: "Children",
      of: [{ type: "tocLink" }],
    },
  ],
};

export default tocLink;
