/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
        port: '',
        pathname: '/images/featured/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Agregar Unsplash
        port: '',
        pathname: '/**', // Permitir cualquier ruta dentro de Unsplash
      },
    ],
  },
};

module.exports = nextConfig;
