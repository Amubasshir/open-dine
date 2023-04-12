import Link from 'next/link';

export default function RestaurantNavbar() {
  return (
    <nav className="flex border-b pb-2 text-base font-medium">
      <Link href="/restaurant/milestone-grill" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milestone-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
