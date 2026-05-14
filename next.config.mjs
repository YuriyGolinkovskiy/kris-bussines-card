/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // port: '', // порт не нужен для HTTPS по умолчанию
        // pathname: '/**', // разрешаем все пути на этом хосте
      },
    ],
  }
};

export default nextConfig;
