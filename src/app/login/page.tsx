import Link from 'next/link';

export default function LoginPage() {
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
        {/* 로고 영역 */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            For Your Study
          </h1>
          <p className="text-gray-500 text-sm">
            로그인 후 학습을 시작하세요
          </p>
        </div>

        {/* 로그인 폼 */}
        <div className="space-y-4 mb-6">
          <div>
            <input
              type="text"
              placeholder="ID"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
            />
          </div>

          <Link
            href="/main"
            className="block w-full py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors duration-200 text-center"
          >
            로그인
          </Link>
        </div>

        {/* 소셜 로그인 */}
        <div className="mb-6">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>
          
          <Link
            href="/main"
            className="block w-full py-3 border border-gray-200 rounded-xl text-center font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            구글로 계속하기
          </Link>
        </div>

        {/* 하단 링크 */}
        <div className="text-center space-y-2 border-t border-gray-200 pt-6">
          <div className="text-sm text-gray-600">
            <Link
              href="#"
              className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div className="text-sm text-gray-600">
            아직 계정이 없으신가요?{' '}
            <Link
              href="/signup"
              className="text-gray-900 font-semibold hover:underline transition-all"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}