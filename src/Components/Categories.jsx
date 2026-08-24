import { FaArrowRight } from "react-icons/fa";

const category = [
  {
    image: "/Images/lamp-2.jpg",
    title: "Lighting & Lamps",
  },
  {
    image: "/Images/sofa-1.jpg",
    title: "Lounge In Style",
  },

  {
    image: "/Images/lamp-2.jpg",
    title: "Lighting & Lamps",
  },
  {
    image: "/Images/sofa-2.jpg",
    title: "Sofas & Seating",
  },
  {
    image: "/Images/chair4.jpg",
    title: "Kids & Nursery Furniture",
  },
];

export default function Categories() {
  return (
    <section className="pb-24 bg-white overflow-hidden">
      <div id="marquee">
        <div id="marquee-content">
          {[...category, ...category].map((item, index) => (
            <div
              key={index}
              className="relative h-100 w-70 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 w-full bg-black hover:bg-yellow-400 text-white px-6 py-4 flex justify-between items-center">
                <h2 className="font-semibold text-ml">{item.title}</h2>

                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-black">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}