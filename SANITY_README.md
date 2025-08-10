# Sanity CMS Patch for Gromatic

This bundle adds **Sanity v3** to your Next.js project, Studio at **/studio**, and replaces the blog to fetch from Sanity.

## Install deps
```
npm install sanity @sanity/vision next-sanity @portabletext/react @sanity/image-url
```

## Add env vars (Vercel → Project → Settings → Environment Variables)
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` = production
- `NEXT_PUBLIC_SANITY_API_VERSION` = 2025-08-01

## Upload these files to your repo (keep paths)
- `sanity.config.ts`
- `sanity/schemas/post.ts`
- `lib/sanity.client.ts`
- `lib/sanity.queries.ts`
- `lib/sanity.image.ts`
- `app/(studio)/studio/[[...index]]/page.tsx`
- `app/blog/page.tsx` (replaces existing)
- `app/blog/[slug]/page.tsx` (replaces existing)

## Seed content
- Deploy, open `/studio`, create a Post, publish.
- Blog index at `/blog`, post at `/blog/[slug]`.
