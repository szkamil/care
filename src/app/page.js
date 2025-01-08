'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-blue-50">
      <header className="w-full bg-dark-blue text-white py-4 flex justify-between items-center px-4 rounded-t-lg">
        <div className="text-2xl font-bold">eterna.care</div>
        <div className="flex items-center space-x-4">
          <Link href="/registration" legacyBehavior>
            <a className="bg-white text-dark-red py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white font-bold">
              Register
            </a>
          </Link>
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </header>
      <div className="flex-grow flex flex-col items-center justify-center space-y-4">
        <Image src="/logo.jpg" alt="Logo" width={600} height={600} />
      </div>
      <footer className="w-full bg-dark-blue text-white py-4 flex justify-center items-center px-4 rounded-b-lg">
        <div className="text-sm">© 2023 eterna.care, Inc.</div>
      </footer>
    </main>
  );
}