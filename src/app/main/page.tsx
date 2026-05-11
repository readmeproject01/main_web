import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D9D9D9]">
      <div className="bg-white rounded-3xl shadow-xl p-16 w-full max-w-4xl mx-8">
        <h1 className="text-center text-2xl font-semibold mb-14 tracking-wide">
          For Your Study
        </h1>

        <div className="flex gap-10 justify-center">
          {/* 카드 1 - Holmz */}
          <Link href="/holmz-study">
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-72 h-52 rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-200">
                <Image
                  src="/study-Holmz.jpg"
                  alt="Holmz"
                  width={224}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">Holmz</span>
            </div>
          </Link>

          {/* 카드 2 - Lib */}
          <Link href="/lib-study">
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-72 h-52 rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-200">
                <Image
                  src="/study-lib.jpg"
                  alt="lib"
                  width={224}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">Paiknam Academic Information Center & Library</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
