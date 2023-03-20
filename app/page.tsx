import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        {/* navbar */}
        <nav className="flex items-center justify-between bg-white p-2">
          <a className="h-14 w-56 text-2xl font-bold text-gray-700" href="">
            <img src="https://i.ibb.co/MGwCc2T/open-dine.png" alt="" />
          </a>
          <div>
            <div className="flex">
              <button className="mr-2 rounded border bg-[#247F9E] py-1 px-4 text-white">
                Sign in
              </button>
              <button className="  rounded border-2 py-1 px-4">Sign up</button>
            </div>
          </div>
        </nav>
        {/* navbar */}
        {/* header */}
        <div className="h-96 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center ">
            <h1 className="text-shadow text-center text-6xl capitalize text-white ">
              Milestone grill(Toronto)
            </h1>
          </div>
        </div>
        {/* header */}
        {/* description portion */}
        <div className="m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            {/* restaurant navbar section */}
            <nav className="flex border-b pb-2 text-base font-medium">
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* restaurant navbar section */}
            {/* title */}
            <div className="mt-4 border-b pb-6">
              <h1 className="text-6xl font-bold">Milestone Grill</h1>
            </div>
            {/* title */}
            {/* rating */}
            <div className="flex items-end">
              <div className="rating mt-2 flex items-center">
                <p>*****</p>
                <p className="ml-3 text-base">4.7</p>
              </div>
              <div>
                <p className="ml-4 text-base "> 577 Reviews</p>
              </div>
            </div>
            {/* rating */}
            {/* description */}
            <div className="mt-4">
              <p className="text-lg font-light">
                Ham Yard restaurant has a frequently changing menu revolving
                around the freshest, seasonal ingredients and the best of
                British produce. Dishes range from house-glazed Ham Yard ham and
                hand rolled pasta to chilli beans on toast and ice cream
                sandwiches
              </p>
            </div>
            {/* description */}
            {/* images */}
            <div>
              <h1 className="mt-10  mb-7 border-b pb-5 text-3xl font-bold">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className=" mr-1 mb-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/25344145.jpg"
                  alt=""
                />
                <img
                  className=" mr-1 mb-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/25606574.jpg"
                  alt=""
                />
                <img
                  className=" mr-1 mb-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/25631139.jpg"
                  alt=""
                />
                <img
                  className=" mr-1 mb-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/25740368.jpg"
                  alt=""
                />
                <img
                  className=" mr-1 mb-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/25344140.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* images */}
            {/* reviews */}
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium corporis tempore consectetur
                          blanditiis, ut vitae eligendi nam doloremque
                          asperiores omnis?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* review cart */}
              </div>
            </div>
            {/* reviews */}
          </div>
        </div>
        {/* description portion */}
      </main>
      ;
    </main>
  );
}
