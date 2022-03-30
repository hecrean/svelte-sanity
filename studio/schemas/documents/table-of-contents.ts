const toc = {
  name: "toc",
  type: "document",
  title: "Table of Contents",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "array",
      name: "sections",
      title: "Sections",
      of: [{ type: "tocSection" }],
    },
  ],
};

export default toc;
