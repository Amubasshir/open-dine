import { Inter } from 'next/font/google';
import Header from './components/Header';
import Navbar from './components/Navbar';
import RestaurantCard from './components/RestaurantCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <main>
          <Header />
          <div className="mt-10 flex flex-wrap py-3 px-36">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  );
}
