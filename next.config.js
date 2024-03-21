/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        domains: [
            "127.0.0.1",
            // process.env.NEXT_PUBLIC_API_USER,
        ],
    },
}

module.exports = nextConfig
