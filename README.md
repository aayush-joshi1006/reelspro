# ReelsPro

ReelsPro is a web application for uploading and viewing short video reels. It is built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/reelspro.git
cd reelspro
npm install
```

Then, run the development server:

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

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
NEXT_PUBLIC_PUBLIC_KEY=your_public_key
PRIVATE_KEY=your_private_key
NEXT_PUBLIC_URL_ENDPOINT=your_url_endpoint
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_nextauth_secret
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Live Demo

Check out the live demo of the project at [ReelsPro](https://reelspro-theta.vercel.app/).
