/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/webp"],
        domains: [
            "127.0.0.1",
            process.env.NEXT_PUBLIC_BACKEND_URL,
            "www.pexels.com",
            "media.cdnws.com",
            "media.deparis.me",
        ],
    },
};

module.exports = nextConfig;
