// src/app/Holmz-study/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function HolmzStudy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D9D9D9]">
      <div className="bg-white rounded-3xl shadow-xl p-16 w-full max-w-4xl mx-8">
        <h1 className="text-center text-2xl font-semibold mb-14 tracking-wide">
        Holmz
        </h1>

        <div className="flex gap-10 justify-center">
          {/* 2층 */}
          <Link href="/holmz-study/2f">
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-72 h-52 rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-200">
                <Image
                  src="/holmz-2f.png"
                  alt="Holmz 2층"
                  width={288}
                  height={208}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">2층</span>
            </div>
          </Link>

          {/* 4층 */}
          <Link href="/holmz-study/4f">
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-72 h-52 rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-200">
                <Image
                  src="/holmz-4f.png"
                  alt="holmz 4층"
                  width={288}
                  height={208}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">4층</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}