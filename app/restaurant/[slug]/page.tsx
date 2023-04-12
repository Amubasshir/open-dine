import Navbar from 'componemt/app/components/Navbar';
import Description from './components/Description';
import Header from './components/Header';
import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantNavbar from './components/RestaurantNavbar';
import Reviews from './components/Reviews';
import Title from './components/Title';

export default function RestaurantDetails() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <Header />
        <div className="m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            <RestaurantNavbar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className="relative w-[27%] text-base">
            <ReservationCard />
          </div>
        </div>
      </main>
      ;
    </main>
  );
}
