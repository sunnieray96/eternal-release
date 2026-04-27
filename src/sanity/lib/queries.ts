import { groq } from "next-sanity";

export const ABOUT_QUERY = groq`*[_type == "about"][0]`;

export const FEATURED_POST_QUERY = groq`*[_type == "post" && featured == true][0]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  category,
  excerpt,
  body
}`;

export const RECENT_POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  category,
  excerpt
}`;

export const COURSES_QUERY = groq`*[_type == "course"] | order(_createdAt desc){
  _id,
  title,
  subtitle,
  description,
  modules
}`;
