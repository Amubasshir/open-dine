const Reviews = () => {
  return (
    <div>
      <h1 className="mt-10 mb-7 border-b pb-5 text-3xl font-bold ">
        What people are saying?
      </h1>
      <div>
        {/* review cart */}
        <div className="mb-7 border-b pb-7">
          <div className="flex">
            <div className="flex w-16 flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
                <h2 className="text-2xl text-white">MA</h2>
              </div>
              <p className="text-center">Mubasshir Ahmed</p>
            </div>

            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="mr-5 flex ">*****</div>
              </div>
              <div className="mt-5">
                <p className="text-lg font-light">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium corporis tempore consectetur blanditiis, ut vitae
                  eligendi nam doloremque asperiores omnis?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* review cart */}
      </div>
    </div>
  );
};

export default Reviews;
