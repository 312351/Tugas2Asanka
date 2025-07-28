/**@type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'static.airasia.com',
      'storage.googleapis.com', // Tambahkan ini
    ],
  },
}

module.exports = nextConfig