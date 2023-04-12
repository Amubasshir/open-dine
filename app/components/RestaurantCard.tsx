import Link from 'next/link';

export default function RestaurantCard() {
  return (
    <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
      <Link href="/restaurant/milestones-grill">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/3/49623397.jpg"
          alt=""
          w-full
          h-36
        />
        <div className="p-1">
          <h3 className="mb-2 text-2xl font-bold">Milestone grill</h3>
          <div className="flex items-start">
            <div className="mb-2 flex">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex">
            <p className="mr-3 text-base font-medium capitalize">Maxican</p>
            <p className="mr-3 text-base font-medium">$999</p>
            <p>Toronto</p>
          </div>
          <p className="mt-1 text-sm font-bold ">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
