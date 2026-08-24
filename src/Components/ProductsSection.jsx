import {
  FaStar,
  FaRegHeart,
  FaEye,
  FaShoppingBag,
} from "react-icons/fa";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

import "../CSS/ProductsSection.css";

const products = [
  {
    image: "/Images/singlechair.jpg",
    title: "Modern Single Sofa Chair For Stylish Living Room",
    price: "$120.00",
  },
  {
    image: "/Images/plant1.jpg",
    title: "Decorative Cactus Plant Pot For Indoor Display",
    price: "$45.00",
  },
  {
    image: "/Images/almirah1.jpg",
    title: "Solid Wood TV Stand With Storage Drawers Design",
    price: "$135.00",
  },
  {
    image: "/Images/singlechair2.jpg",
    title: "Modern Wooden Lounge Chair With Wide Fabric Arms",
    price: "$155.00",
  },
];

// Infinite marquee ke liye duplicate data
const sliderProducts = [...products, ...products];

export default function ProductsSection() {
  return (
    <section className="py-2 bg-white overflow-hidden">

      {/* Heading */}
      <div className="flex items-center justify-between px-6 mb-12">

        <div className="flex items-center gap-6">

          <h2 className="text-3xl font-bold tracking-wide">
            HANDPICKED ELEGANCE
          </h2>

          <span className="w-28 h-[1px] bg-gray-300"></span>

          <p className="uppercase tracking-[4px] text-gray-400 text-sm">
            Timeless Elegance For Your Home
          </p>

        </div>

        <div className="flex gap-3">

          <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition">
            <MdKeyboardArrowLeft size={24} />
          </button>

          <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition">
            <MdKeyboardArrowRight size={24} />
          </button>

        </div>

      </div>

      {/* Marquee */}
      <div id="marquee">

        <div id="marquee-content">

          {sliderProducts.map((item, index) => (

            <div
              key={index}
              className="group w-[320px] shrink-0"
            >

              {/* Image Box */}

              <div className="relative bg-[#f5f5f5] rounded-xl overflow-hidden h-[380px]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                />

                {/* Right Icons */}

                <div className="absolute right-4 top-4 flex flex-col gap-3 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                  <button className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                    <FaRegHeart />
                  </button>

                  <button className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-yellow-400 hover:text-white transition">
                    <FaEye />
                  </button>

                </div>

                {/* Cart */}

                <button className="">
                  <FaShoppingBag />
                </button>

              </div>

              {/* Rating */}

              <div className="flex gap-1 text-gray-300 mt-5">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}

              </div>

              {/* Title */}

              <h3 className="mt-4 text-xl leading-8 font-medium">
                {item.title}
              </h3>

              {/* Price */}

              <p className="mt-4 text-2xl font-bold">
                {item.price}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}