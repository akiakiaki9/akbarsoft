/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["akbarsoft.uz"],
    },
    // experimental секция больше не нужна для appDir
    // App Router теперь включен по умолчанию в Next.js 13+
};

export default nextConfig;