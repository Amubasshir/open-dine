import Link from 'next/link';

export default function RestaurantCard() {
  return (
    <div className="flex  border-b pb-5">
      <img
        className="w-44 rounded"
        src="https://resizer.otstatic.com/v2/photos/legacy/3/46946429.jpg"
        alt=""
      />
      <div className="pl-5 ">
        <h2 className="text-3xl">Aiana Restaurant Collection</h2>
        <div className="flex items-start">
          <div className="mb-2 flex">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex text-lg font-light">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottoa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/poredimu">View more information</Link>
        </div>
      </div>
    </div>
  );
}
