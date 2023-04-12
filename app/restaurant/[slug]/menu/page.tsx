import Navbar from 'componemt/app/components/Navbar';
import Header from '../components/Header';
import Menu from '../components/Menu';
import RestaurantNavbar from '../components/RestaurantNavbar';

export default function RestaurantMenu() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <Header />
        <div className="m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            <RestaurantNavbar />
            <Menu />
          </div>
        </div>
      </main>
      ;
    </main>
  );
}
