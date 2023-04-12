import Navbar from 'componemt/app/components/Navbar';
import Header from './components/Header';

export default function Reserve() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <div className="h-screen border-t">
          <div
            className="
m-auto w-3/5 py-9"
          >
            {/* header */}
            <h3 className="font-bold">You're almost done</h3>
            <Header />
            {/* header */}
            {/* form */}
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
