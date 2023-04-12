const Header = () => {
  return (
    <div className="mt-5 flex">
      <img
        src="https://resizer.otstatic.com/v2/photos/legacy/2/31714457.jpg"
        alt=""
        className="h-18 w-32 rounded"
      />
      <div className="ml-4">
        <h1 className="text-3xl font-bold">Aiana Restaurant Collection</h1>
        <div className="mt-3 flex font-medium">
          <p className="mr-6">Tues, 07, 2023</p>
          <p className="mr-6">7:30</p>
          <p className="mr-6">3 people</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
