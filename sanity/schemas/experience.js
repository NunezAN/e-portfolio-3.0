export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "techNames",
      title: "TechNames",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
