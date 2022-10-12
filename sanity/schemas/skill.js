export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the skill",
      type: "string",
    },
    {
      name: "image",
      title: "TechNamImagees",
      type: "image",
      options: [{ hotspot: true }],
    },
  ],
};
