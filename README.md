This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### PostHog error tracking source maps

`next.config.ts` uses `@posthog/nextjs-config` to upload source maps during
production builds to the LuxOps EU project (`174036`). It preserves the existing
Next Intl configuration and supports the default Next.js build.

Before deploying, set `POSTHOG_API_KEY` as a **sensitive, server-only** environment
variable in the Vercel project, for the deployment environments that should upload
maps. Use a PostHog personal API key restricted to this project with the required
Error Tracking write permission. Never use a `NEXT_PUBLIC_` prefix for this key,
and never commit it. The public capture key cannot upload source maps.

The release is named `luxops` and uses `VERCEL_GIT_COMMIT_SHA` on Vercel.
Source maps are deleted after upload so they are not served as public assets.
When the private key is absent, this integration is skipped and does not enable
browser source maps; a successful build without the key does **not** fix the alert.

Verify the deployment logs show a successful upload and check the new release's
stack traces in PostHog. Previously recorded errors may still reference older
bundles with no uploaded maps; allow the health check's reporting window to roll
forward. Do not dismiss the warning as a substitute for verifying the upload.

Documentation: https://posthog.com/docs/error-tracking/upload-source-maps/nextjs

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
