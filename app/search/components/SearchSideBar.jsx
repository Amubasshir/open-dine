export default function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2 text-lg font-medium">Region</h1>
        <p className="text-lg font-normal">Toronto</p>
        <p className="text-lg font-normal">Ohama</p>
        <p className="text-lg font-normal">Black sea</p>
        <p className="text-lg font-normal">7th kingdom</p>
        <p className="text-lg font-normal">Devils alle</p>
      </div>
      <div className="mt-3 border-b pb-4">
        <h1 className="mb-2 text-lg  font-medium">Cousine</h1>
        <p className="text-lg font-light">Italian</p>
        <p className="text-lg font-light">Mexican</p>
        <p className="text-lg font-light">Chinese</p>
        <p className="text-lg font-light">Bengali</p>
        <p className="text-lg font-light">Continental</p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2"></h1>
        <div className="flex">
          <button className=" w-full rounded-lg border p-2 text-base font-light ">
            $
          </button>
          <button className=" w-full  border-r border-t border-b p-2 text-base font-light ">
            $$
          </button>
          <button className=" w-full rounded-lg border p-2 text-base font-light ">
            $$$
          </button>
          <button className=" w-full rounded-lg border p-2 text-base font-light ">
            $$$$
          </button>
        </div>
      </div>
    </div>
  );
}
