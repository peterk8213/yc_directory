import { UserIcon } from "lucide-react";
import { defineType, defineField } from "sanity";

export const startup = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "category",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
