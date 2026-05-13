import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e5ba8] via-[#2563eb] to-[#3b82f6] py-16 px-4">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            For Your Study
          </h1>
          <p className="text-xl text-blue-100">
            최고의 학습 공간을 선택하고 시작하세요
          </p>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {/* Holmz 카드 */}
          <Link href="/holmz-study">
            <div className="group cursor-pointer h-full">
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-2xl h-72 bg-gray-900">
                <Image
                  src="/study-Holmz.jpg"
                  alt="Holmz"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* 그래디언트 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 배지 */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                  운영 정보
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                  Holmz
                </h3>
                <p className="text-blue-100 text-base mb-4">
                  편안한 학습공간
                </p>
                <div className="inline-flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">시작하기</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Lib 카드 */}
          <Link href="/lib-study">
            <div className="group cursor-pointer h-full">
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-2xl h-72 bg-gray-900">
                <Image
                  src="/study-lib.jpg"
                  alt="Library"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* 그래디언트 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 배지 */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                  도서관 정보
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                  Paiknam Library
                </h3>
                <p className="text-blue-100 text-base mb-4">
                  학술정보센터 & 도서관 통합 플랫폼
                </p>
                <div className="inline-flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">시작하기</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* 하단 섹션 */}
        <div className="mt-20 text-center border-t border-white/10 pt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-semibold">로그아웃</span>
          </Link>
        </div>
      </div>
    </div>
  );
}