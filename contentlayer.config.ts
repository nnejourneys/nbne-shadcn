import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeImgSize from 'rehype-img-size'

/** @type {import('contentlayer/source-files').ComputedFields} */

// const computedFields: import('contentlayer/source-files').ComputedFields = {
//   slug: {
//     type: "string",
//     resolve: (doc: { _raw: { flattenedPath: any; }; }) => `${doc._raw.flattenedPath}`,
//   },
// };

export const Tours = defineDocumentType(() => ({
  name: "Tours",
  filePathPattern: `tours/*.mdx`,
  contentType: "mdx",
  fields: {
    date: {
      type: "date",
    },
    draft: {
      type: "boolean",
    },
    keywords: {
      type: "string",
    },
    title: {
      type: "string",
    },
    subtitle: {
      type: "string",
    },
    days: {
      type: "string",
    },
    description: {
      type: "string",
    },
    bg_image: {
      type: "string",
    },
    image: {
      type: "string",
    },
    type: {
      type: "string",
    },
    tourtype: {
      type: "string",
    },
    category: {
      type: "string",
    },
    cat: {
      type: "string",
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    weight: {
      type: "number",
    },
    touricon: {
      type: "string",
    },
    overview: {
      type: "list",
      of: { type: "string" },
    },
    overs: {
      type: "list",
      of: { type: "string" },
    },
    highlights: {
      type: "list",
      of: { type: "string" },
    },
    inclusions: {
      type: "list",
      of: { type: "string" },
    },
    exclusions: {
      type: "list",
      of: { type: "string" },
    },
    accommodation: {
      type: "string",
    },
    meals: {
      type: "string",
    },
    refreshments: {
      type: "string",
    },
    faq: {
      type: "list",
      of: { type: "string" },
    },
    galleryimages: {
      type: "list",
      of: { type: "string" },
    },
    othertours: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  },
}));

export const Posts = defineDocumentType(() => ({
  name: "Posts",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    draft: {
      type: "boolean",
    },
    date: {
      type: "string",
    },
    title: {
      type: "string",
    },
    excerpt: {
      type: "string",
    },
    coverImage: {
      type: "string",
    },
    author: {
      type: "list",
      of: { type: "string" },
    },
    ogImage: {
      type: "string",
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Tours, Posts],
  mdx: {
    rehypePlugins: [[rehypeImgSize, { dir: "public" }]], 
  },
});


