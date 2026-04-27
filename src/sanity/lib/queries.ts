export const COURSES_QUERY = `*[_type == "course"]{
  _id,
  title
}`;

export const FEATURED_POST_QUERY = `*[_type == "post" && featured == true][0]{
  _id,
  title,
  slug,
  mainImage,
  excerpt
}`;

export const RECENT_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  mainImage,
  excerpt
}`;