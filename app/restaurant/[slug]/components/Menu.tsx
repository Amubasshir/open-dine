import { Item } from '@prisma/client';
import MenuCard from './MenuCard';

const Menu = ({ menu }: { menu: Item }) => {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="mt-4 mb-1 pb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>
        {menu.length > 1 ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>Menu is updating. Please try again in a while. </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Menu;
