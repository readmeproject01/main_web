import Link from "next/link";

export default function LibraryStudy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D9D9D9] p-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl">
        {/* 제목 */}
        <h1 className="text-2xl font-bold text-center mb-2 text-blue-900">
          Paiknam Academic Information Center & Library
        </h1>
        <p className="text-center text-gray-500 mb-8">백남학술정보관 이용 안내</p>

        <div className="space-y-6">
          {/* 24시간 시설 강조 */}
          <section className="bg-blue-50 p-5 rounded-2xl border-l-4 border-blue-500">
            <h2 className="text-lg font-bold text-blue-800 mb-1">🔥 24시간 상시 개방</h2>
            <p className="text-blue-700 font-medium">제3열람실 (3층)</p>
            <p className="text-xs text-blue-600 mt-1">* 연중무휴 상시 운영</p>
          </section>

          {/* 일반 열람실 */}
          <section>
            <h2 className="text-lg font-semibold border-b pb-2 mb-3">🕒 열람실 운영시간</h2>
            <div className="flex justify-between text-gray-700">
              <span>제1, 2, 4열람실 (B1, 3층)</span>
              <span className="font-medium">06:00 ~ 24:00</span>
            </div>
          </section>

          {/* 주제자료실 */}
          <section>
            <h2 className="text-lg font-semibold border-b pb-2 mb-3">📚 주제자료실 (대출/반납)</h2>
            <div className="flex justify-between text-gray-700">
              <span>2, 4, 5층 자료실 (평일)</span>
              <span className="font-medium">09:00 ~ 18:00</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">* 주말 및 공휴일 휴실</p>
          </section>

          {/* 편의 시설 */}
          <section>
            <h2 className="text-lg font-semibold border-b pb-2 mb-3">☕ 기타 시설</h2>
            <div className="flex justify-between text-gray-700">
              <span>1층 라운지 및 북카페</span>
              <span className="font-medium">07:00 ~ 24:00</span>
            </div>
          </section>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-10 flex justify-center">
          <Link href="/holmz-study">
            <button className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all font-medium shadow-md">
              메인으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
