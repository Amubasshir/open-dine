import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="h-64 bg-gradient-to-r from-[#142b3f] to-[#192854] p-2">
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-white">
          Find your table for any occasion{' '}
        </h1>
        {/* search bar */}
        <SearchBar />

        {/* search bar */}
      </div>
    </header>
  );
}
