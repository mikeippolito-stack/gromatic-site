import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post"] | order(date desc) {
    _id, title, "slug": slug.current, excerpt, date, cover
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, excerpt, date, cover, body
  }
`;
