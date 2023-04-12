export default function Header() {
  return (
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
  );
}
