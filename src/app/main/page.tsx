import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D9D9D9] px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-5xl">
        {/* 헤더 */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            For Your Study
          </h1>
          <p className="text-gray-500">
            학습 공간을 선택하고 시작하세요
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Holmz 카드 */}
          <Link href="/holmz-study">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100">
                <Image
                  src="/study-Holmz.jpg"
                  alt="Holmz"
                  width={500}
                  height={350}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="px-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  Holmz
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  집처럼 편안한 학술 공간
                </p>
              </div>
            </div>
          </Link>

          {/* Lib 카드 */}
          <Link href="/lib-study">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100">
                <Image
                  src="/study-lib.jpg"
                  alt="Library"
                  width={500}
                  height={350}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="px-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  Paiknam Library
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  학술정보센터 & 도서관
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* 하단 텍스트 */}
        <div className="text-center border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            로그아웃하시겠어요?{' '}
            <Link href="/" className="text-gray-900 font-semibold hover:underline transition-all">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}