import Link from 'next/link';

export default function search() {
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
      </main>
      {/* header */}
      <div className="bg-gradient-t0-r from-[#of1f47] to-[#5f6984]">
        <header className="h-24 bg-gradient-to-r from-[#142b3f] to-[#192854] p-2">
          <div className="mt-2 text-center">
            {/* search bar */}
            <div className="m-auto  flex justify-center py-3 text-left">
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
          <div className="m-a flex w-2/3 items-center justify-between py-4">
            <div className="w-1/5">
              <div className="border-b pb-4">
                <h1 className="mb-2 text-lg font-medium">Region</h1>
                <p className="text-lg font-normal">Toronto</p>
                <p className="text-lg font-normal">Ohama</p>
                <p className="text-lg font-normal">Black sea</p>
                <p className="text-lg font-normal">7th kingdom</p>
                <p className="text-lg font-normal">Devils alle</p>
              </div>
              <div className="mt-3 border-b pb-4">
                <h1 className="mb-2 text-lg  font-medium">Cousine</h1>
                <p className="text-lg font-light">Italian</p>
                <p className="text-lg font-light">Mexican</p>
                <p className="text-lg font-light">Chinese</p>
                <p className="text-lg font-light">Bengali</p>
                <p className="text-lg font-light">Continental</p>
              </div>
              <div className="mt-3 pb-4">
                <h1 className="mb-2"></h1>
                <div className="flex">
                  <button className=" w-full rounded-lg border p-2 text-base font-light ">
                    $
                  </button>
                  <button className=" w-full  border-r border-t border-b p-2 text-base font-light ">
                    $$
                  </button>
                  <button className=" w-full rounded-lg border p-2 text-base font-light ">
                    $$$
                  </button>
                  <button className=" w-full rounded-lg border p-2 text-base font-light ">
                    $$$$
                  </button>
                </div>
              </div>
            </div>
            {/* search side bar */}
            <div className=" w-5/6">
              {/* restaurant card */}
              <div className="flex  border-b pb-5">
                <img
                  className="w-44 rounded"
                  src="https://resizer.otstatic.com/v2/photos/legacy/3/46946429.jpg"
                  alt=""
                />
                <div className="pl-5 ">
                  <h2 className="text-3xl">Aiana Restaurant Collection</h2>
                  <div className="flex items-start">
                    <div className="mb-2 flex">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                  </div>
                  <div className="mb-9">
                    <div className="flex text-lg font-light">
                      <p className="mr-4">$$$</p>
                      <p className="mr-4">Mexican</p>
                      <p className="mr-4">Ottoa</p>
                    </div>
                  </div>
                  <div className="text-red-600">
                    <a href="">View more information</a>
                  </div>
                </div>
              </div>
              {/* restaurant card */}
              <div className="flex  border-b pb-5">
                <img
                  className="w-44 rounded"
                  src="https://resizer.otstatic.com/v2/photos/legacy/3/46946429.jpg"
                  alt=""
                />
                <div className="pl-5 ">
                  <h2 className="text-3xl">Aiana Restaurant Collection</h2>
                  <div className="flex items-start">
                    <div className="mb-2 flex">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                  </div>
                  <div className="mb-9">
                    <div className="flex text-lg font-light">
                      <p className="mr-4">$$$</p>
                      <p className="mr-4">Mexican</p>
                      <p className="mr-4">Ottoa</p>
                    </div>
                  </div>
                  <div className="text-red-600">
                    <a href="">View more information</a>
                  </div>
                </div>
              </div>
              {/* restaurant card */}
              <div className="flex  border-b pb-5">
                <img
                  className="w-44 rounded"
                  src="https://resizer.otstatic.com/v2/photos/legacy/3/46946429.jpg"
                  alt=""
                />
                <div className="pl-5 ">
                  <h2 className="text-3xl">Aiana Restaurant Collection</h2>
                  <div className="flex items-start">
                    <div className="mb-2 flex">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                  </div>
                  <div className="mb-9">
                    <div className="flex text-lg font-light">
                      <p className="mr-4">$$$</p>
                      <p className="mr-4">Mexican</p>
                      <p className="mr-4">Ottoa</p>
                    </div>
                  </div>
                  <div className="text-red-600">
                    <a href="">View more information</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* header */}
    </main>
  );
}
