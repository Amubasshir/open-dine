export default function Header() {
  return (
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
  );
}
