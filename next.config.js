/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Mengubah Next.js menjadi static HTML/CSS/JS (Wajib untuk GitHub Pages)
  images: {
    unoptimized: true, // Mematikan optimasi gambar bawaan karena static export tidak menggunakan server Node.js
  },
};

module.exports = nextConfig;