import { Inter } from 'next/font/google';
import Link from 'next/link';

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
                  Lets go
                </button>
              </div>

              {/* search bar */}
            </div>
          </header>
          {/* header */} {/* cards */}
          <div className="mt-10 flex flex-wrap py-3 px-36">
            {/* card */}
            <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
              <Link href="/restaurant/milestones-grill">
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/3/49623397.jpg"
                  alt=""
                  w-full
                  h-36
                />
                <div className="p-1">
                  <h3 className="mb-2 text-2xl font-bold">Milestone grill</h3>
                  <div className="flex items-start">
                    <div className="mb-2 flex">*****</div>
                    <p className="ml-2">77 reviews</p>
                  </div>
                  <div className="flex">
                    <p className="mr-3 text-base font-medium capitalize">
                      Maxican
                    </p>
                    <p className="mr-3 text-base font-medium">$999</p>
                    <p>Toronto</p>
                  </div>
                  <p className="mt-1 text-sm font-bold ">
                    Booked 3 times today
                  </p>
                </div>
              </Link>
            </div>
            {/* card */}
          </div>
          {/* cards */}
        </main>
      </main>
    </main>
  );
}
