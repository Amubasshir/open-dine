const ReservationCard = () => {
  return (
    <div
      className="
          fixed w-[15%] p-3 shadow"
    >
      <div className="border-b pb-2 text-center font-bold ">
        <h4 className="mr-7 text-lg">Make a reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select className="border-b py-3 font-light " name="" id="">
          <option value="">1 person</option>
          <option value="">1 person</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Date</label>
          <input className="w-28 border-b py-3 font-light" type="text" />
        </div>
        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Time</label>
          <select name="" id="" className="border-b py-3 font-light">
            <option value="">7:30pm</option>
            <option value="">9:30pm</option>
          </select>
        </div>
      </div>
      <div className="mt-5 ">
        <button className="h-16 w-full bg-red-500 px-4 font-bold text-white ">
          Find a time
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
