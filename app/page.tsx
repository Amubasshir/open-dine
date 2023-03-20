import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
        <nav className="bg-white p-2 flex justify-between items-center">
          <a className="font-bold text-gray-700 text-2xl w-56 h-14" href="">
            <img src="https://i.ibb.co/MGwCc2T/open-dine.png" alt="" />
          </a>
          <div>
            <div className="flex">
              <button className="bg-[#247F9E] text-white border py-1 px-4 rounded mr-2">
                Sign in
              </button>
              <button className="  border-2 py-1 px-4 rounded">Sign up</button>
            </div>
          </div>
        </nav>
        {/* navbar */}
        <main>
          {/* header */}
          <header></header>
          {/* header */}
        </main>
      </main>
    </main>
  );
}
