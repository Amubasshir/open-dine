import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        {/* navbar */}
        <nav className="flex items-center justify-between bg-white p-2">
          <a className="h-14 w-56 text-2xl font-bold text-gray-700" href="">
            <img src="https://i.ibb.co/MGwCc2T/open-dine.png" alt="" />
          </a>
          <div>
            <div className="flex">
              <button className="mr-2 rounded border bg-[#247F9E] py-1 px-4 text-white">
                Sign in
              </button>
              <button className="  rounded border-2 py-1 px-4">Sign up</button>
            </div>
          </div>
        </nav>
        {/* navbar */}
        <main>
          {/* header */}
          <header className="h-64 bg-gradient-to-r from-[#142b3f] to-[#192854] p-2">
            <div className="mt-10 text-center">
              <h1 className="text-5xl font-bold text-white">
                Find your table for any occasion{' '}
              </h1>
              {/* search bar */}
              <div className="m-auto mt-2 flex justify-center py-3 text-left">
                <input
                  className="mr-3 w-[450px] rounded p-2 text-lg outline-none "
                  type="text"
                  placeholder="location, restaurant, cousine"
                />
                <button className="rounded bg-red-600 px-8 py-2 font-medium text-white ">
                  Let's go
                </button>
              </div>

              {/* search bar */}
            </div>
          </header>
          {/* header */}
        </main>
      </main>
    </main>
  );
}
