import { Inter } from 'next/font/google';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mt-10 flex flex-wrap py-3 px-36">
        <RestaurantCard />
      </div>
    </main>
  );
}
