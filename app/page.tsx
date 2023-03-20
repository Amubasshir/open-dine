import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
        <nav className="bg-white p-2 flex justify-between"></nav>
        {/* navbar */}
      </main>
    </main>
  );
}
