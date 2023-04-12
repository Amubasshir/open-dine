import Link from 'next/link';

export default function Reserve() {
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
        {/* navbar end */}
        <div className="h-screen border-t">
          <div
            className="
m-auto w-3/5 py-9"
          >
            {/* header */}
            <h3 className="font-bold">You're almost done</h3>
            <div className="mt-5 flex">
              <img
                src="https://resizer.otstatic.com/v2/photos/legacy/2/31714457.jpg"
                alt=""
                className="h-18 w-32 rounded"
              />
              <div className="ml-4">
                <h1 className="text-3xl font-bold">
                  Aiana Restaurant Collection
                </h1>
                <div className="mt-3 flex font-medium">
                  <p className="mr-6">Tues, 07, 2023</p>
                  <p className="mr-6">7:30</p>
                  <p className="mr-6">3 people</p>
                </div>
              </div>
            </div>
            {/* header */} {/* form */}
            <div className="mt-10 flex w-[660px] flex-wrap justify-between">
              <input
                className="mb-4 w-80 rounded border p-3"
                type="text
              "
                placeholder="First name"
              />
              <input
                className="mb-4 w-80 rounded border p-3"
                type="text
              "
                placeholder="Last name"
              />
              <input
                className="mb-4 w-80 rounded border p-3"
                type="text
              "
                placeholder="Phone number"
              />
              <input
                className="mb-4 w-80 rounded border p-3"
                type="text
              "
                placeholder="Email"
              />
              <input
                className="mb-4 w-80 rounded border p-3"
                type="text
              "
                placeholder="Occasion(optional)"
              />
              <input
                className="mb-4 w-80 rounded border p-3"
                type="text
              "
                placeholder="Special request(optional)"
              />
              <button className="w-full rounded bg-red-600 p-3 font-bold text-white disabled:bg-gray-400">
                Complete reservations
              </button>
              <p className="mt-5 text-sm font-light">
                By clicking “Complete reservation” you agree to the OpenTable
                Terms of Use and Privacy Policy. Standard text message rates may
                apply. You may opt out of receiving text messages at any time.
              </p>
            </div>
            {/* form */}
          </div>
        </div>
      </main>
    </main>
  );
}
