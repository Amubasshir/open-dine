import { PRICE, PrismaClient } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

const prisma = new PrismaClient();

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantByCity = (searchParams: SearchParams) => {
  const where: any = {};
  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocation = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantByCity(searchParams);

  const location = await fetchLocation();
  const cuisine = await fetchCuisines();

  return (
    <>
      <div className="bg-gradient-t0-r from-[#of1f47] to-[#5f6984]">
        <header className="h-24 bg-gradient-to-r from-[#142b3f] to-[#192854] p-2">
          <Header />
          <div className="m-a flex w-2/3 items-center justify-between py-4">
            <SearchSideBar
              locations={location}
              cuisines={cuisine}
              searchParams={searchParams}
            />
            <div className=" w-5/6">
              {restaurants.length ? (
                <>
                  {restaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                    />
                  ))}
                </>
              ) : (
                <p className="text-center text-lg font-medium">
                  Sorry, no restaurant found in this area
                </p>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
