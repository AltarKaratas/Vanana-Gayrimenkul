/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['images.unsplash.com','*.com','public.blob.vercel-storage.com'],

//       },
// }
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
module.exports = nextConfig
