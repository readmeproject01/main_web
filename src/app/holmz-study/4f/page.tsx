import Link from "next/link";

export default function Holmz4F() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D9D9D9] p-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-8">Holmz - 4층 상세 정보</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold border-b pb-2 mb-3">🕒 이용 시간 안내</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><strong>월~토</strong> <span>24시간 상시 개방 (토요일 18시까지)</span></li>
              <li className="flex justify-between text-red-500"><strong>일요일</strong> <span>10:00 ~ 18:00</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold border-b pb-2 mb-3">📍 주요 시설</h2>
            <p className="text-gray-600">컨텐츠 팩토리, 멀티미디어 존 등 PC 및 제작 공간</p>
          </section>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/holmz-study">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
              ← 뒤로가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}