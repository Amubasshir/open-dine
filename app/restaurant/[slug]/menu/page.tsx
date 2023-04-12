import Link from 'next/link';

export default function RestaurantMenu() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        {/* navbar */}
        <nav className="flex items-center justify-between bg-white p-2">
          <Link href="/" className="h-14 w-56 text-2xl font-bold text-gray-700">
            <img src="https://i.ibb.co/MGwCc2T/open-dine.png" alt="" />
          </Link>
          <div>
            <div className="flex">
              <button className="mr-2 rounded border bg-[#247F9E] py-1 px-4 text-white">
                Sign in
              </button>
              <button className="  rounded border-2 py-1 px-4">Sign up</button>
            </div>
          </div>
        </nav>
        {/* navbar */} {/* header */}
        <div className="h-96 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center ">
            <h1 className="text-shadow text-center text-6xl capitalize text-white ">
              Milestone grill(Toronto)
            </h1>
          </div>
        </div>
        {/* header */}
        <div className="m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            {/* restaurant navbar section */}
            <nav className="flex border-b pb-2 text-base font-medium">
              <Link href="/restaurant/milestone-grill" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/milestone-grill/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* restaurant navbar section */} {/* menu */}
            <main className="mt-5 bg-white">
              <div>
                <div className="mt-4 mb-1 pb-1">
                  <h1 className="text-4xl font-bold">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* menu card */}
                  <div className="mb-3 w-[49%] rounded border p-3">
                    <h3 className="text-lg font-bold  ">Steak</h3>
                    <p className="mt-1 text-sm font-light">
                      A well done stack with potato and rice
                    </p>
                    <p className="mt-7">$90.00</p>
                  </div>
                  {/* menu card */}
                </div>
              </div>
            </main>
            {/* menu */}
          </div>
        </div>
      </main>
      ;
    </main>
  );
}
