import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white p-2">
      <Link className="h-14 w-56 text-2xl font-bold text-gray-700" href="">
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
  );
}
