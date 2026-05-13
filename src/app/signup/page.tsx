import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* 배경 로고 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/hanyang-tiger-logo.png" 
          alt="Hanyang University" 
          className="w-[1200px] h-[1200px] object-contain opacity-8"
        />
      </div>

      <div className="relative z-10 bg-white rounded-3xl shadow-xl p-12 w-full max-w-md">
        {/* 헤더 */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            For Your Study
          </h1>
          <p className="text-gray-500 text-sm">
            새로운 계정을 만들어보세요
          </p>
        </div>

        {/* 회원가입 폼 */}
        <form className="space-y-4 mb-6">
          <div>
            <input
              type="text"
              placeholder="새로운 ID"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors duration-200"
          >
            계정 만들기
          </button>
        </form>

        {/* 하단 링크 */}
        <div className="text-center border-t border-gray-200 pt-6">
          <div className="text-sm text-gray-600">
            이미 계정이 있으신가요?{' '}
            <Link
              href="/"
              className="text-gray-900 font-semibold hover:underline transition-all"
            >
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}