import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero 섹션 */}
      <section className="text-center py-20 border-b">
        <h1 className="text-xl md:text-5xl font-bold mb-4">
         컴퓨터구조론
        </h1>
        <p className="text-gray-500 mb-6">
          컴퓨터구조론 정리 페이지
        </p>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          과제
        </button>
      </section>

      {/* 카드 섹션 */}
      <section className="py-16 px-6">
        <h2 className="text-base md:text-2xl font-bold mb-8">
          Main Content
        </h2>
        
        <div className="grid grid-cols-3 gap-4">
          {/* Week 1 */}
          <Link href="">
            <div className="border rounded-lg p-6 text-center hover:border-black hover:shadow-md transition-all cursor-pointer h-full">
              <h3 className="font-bold mb-2">설웅</h3>
              <p className="text-sm text-gray-500">
                Git/Github
              </p>
            </div>
          </Link>

          {/* Week 2 */}
          <Link href="/posts/">
            <div className="border rounded-lg p-6 text-center hover:border-black hover:shadow-md transition-all cursor-pointer h-full">
              <h3 className="font-bold mb-2">이헌준</h3>
              <p className="text-sm text-gray-500">
                node.js
              </p>
            </div>
          </Link>

          {/* Week 3 */}
          <Link href="">
            <div className="border rounded-lg p-6 text-center hover:border-black hover:shadow-md transition-all cursor-pointer h-full">
              <h3 className="font-bold mb-2">coming soon</h3>
              <p className="text-sm text-gray-500">
                coming soon
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}