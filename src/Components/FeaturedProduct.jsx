import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturedProduct = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex w-full gap-14 items-center">

        {/* Left Side */}
        <div className="relative w-[1800px] h-[530px] rounded-xl overflow-hidden">

          {/* Background Image */}
          <img
            src="/Images/guide1.jpg"
            alt=""
            className="rounded-xl w-full h-[520px] object-cover "
          />

          {/* Product Image */}
          <div className="absolute right-0 bottom-8 bg-white shadow-xl rounded-md p-5 w-[360px] h-[400px] ">

            <img
              src="/Images/singlechair2.jpg"
              alt=""
              className="w-full h-[350px] object-contain"
            />

            {/* Slider Buttons */}

            <button className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:bg-yellow-400 duration-300">
              <FaChevronLeft />
            </button>

            <button className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:bg-yellow-400 duration-300">
              <FaChevronRight />
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="w-full h-[400px] flex flex-col justify-center">

          <h2 className="text-4xl font-bold leading-tight">
            Modern Beige Armchair with Wooden Legs
          </h2>

          <h3 className="text-3xl font-bold mt-5">
            $150.00
          </h3>

          <p className="text-gray-500 leading-8 mt-5 text-sm">
            Donec dapibus tellus sem, quis aliquam libero pharetra non.
            Nam vitae fermentum leo. Pellentesque bibendum dui eu mi
            tempor sodales. Integer gravida odio in sem laoreet tempus.
            Nunc vehicula nibh mauris, id bibendum metus facilisis iaculis.
            Phasellus suscipit dictum.
          </p>

          <div className="flex items-center gap-3 mt-5 text-green-600 font-semibold">
            <FaCheckCircle className="text-2xl" />
            <span>50 Products in stock</span>
          </div>

          <div className="flex gap-5 mt-8">

            <input
              type="number"
              defaultValue={0}
              className="border w-24 h-14 text-center outline-none rounded-sm"
            />

            <button className="bg-yellow-400 hover:bg-black hover:text-white duration-300 rounded-sm px-10 h-14 font-semibold">
              Add To Cart
            </button>

            

          </div>
          <button className="bg-black text-white py-4 mt-5 text-center justify-center hover:bg-yellow-400 hover:text-black
           duration-300 rounded-sm px-10 h-14 font-semibold">
              Buy Now
            </button>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProduct;