'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');

  return (
    <div className="m-auto mt-2 flex justify-center py-3 text-left">
      <input
        className="mr-3 w-[450px] rounded p-2 text-lg outline-none "
        type="text"
        placeholder="location, restaurant, cousine"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-8 py-2 font-medium text-white "
        onClick={() => {
          if (location === 'banana') return;
          router.push('/search');
        }}
      >
        Lets go
      </button>
    </div>
  );
};

export default SearchBar;
