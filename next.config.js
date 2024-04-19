/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/webp"],
        domains: [
            "127.0.0.1",
            "www.pexels.com",
            "media.cdnws.com",
            "media.deparis.me",
            "media.istockphoto.com",
            "images.pexels.com",
            "picsum.photos",
            "img.freepik.com"
        ],
    },
};

module.exports = nextConfig;
