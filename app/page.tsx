import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';

const inter = Inter({ subsets: ['latin'] });

export interface RestaurantCardType {
  map(arg0: (restaurant: any) => JSX.Element): import('react').ReactNode;
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  console.log({ restaurants });

  return (
    <main>
      <Header />
      <div className="mt-10 flex flex-wrap py-3 px-36">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
