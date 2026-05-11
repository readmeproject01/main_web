import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',          // 사용자가 localhost:3000/ (메인)으로 접속하면
        destination: '/login', // /login 페이지로 자동으로 보내버림
        permanent: true,       // 영구적인 이동 처리
      },
    ]
  },
};
module.exports = nextConfig
export default nextConfig;
