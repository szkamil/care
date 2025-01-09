'use client'

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-blue-50">
      <header className="w-full bg-pastel-red text-white py-4 flex justify-between items-center px-4 rounded-t-lg">
        <div className="text-2xl font-bold">eterna.care</div>
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hi</h1>
      </div>
      <footer className="w-full bg-pastel-red text-white py-4 flex justify-center items-center px-4 rounded-b-lg">
        <div className="text-sm">© 2023 eterna.care, Inc.</div>
      </footer>
    </main>
  );
}