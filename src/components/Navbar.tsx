"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // '/login' 또는 '/signup' 경로일 때 Navbar를 안 보이게 합니다.
  if (pathname === '/login' || pathname === '/signup') return null;

  return (
    <nav className="border-b px-6 py-4 grid grid-cols-3 items-center">
      <span className="font-bold text-xl"></span>
      <div className="flex gap-6 justify-center">
        <Link href="/login">
            <button>| Hanyang University |</button> 
        </Link>
      </div>
    </nav>
  );
}