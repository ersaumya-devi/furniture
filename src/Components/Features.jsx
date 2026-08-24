import {
  FaMoneyBillWave,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

export default function Features() {
  const data = [
    {
      icon: <FaMoneyBillWave size={35} />,
      title: "Money Back Guarantee",
    },
    {
      icon: <MdOutlinePayments size={35} />,
      title: "Cash On Delivery",
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Secure Payment Systems",
    },
    {
      icon: <FaTools size={35} />,
      title: "Free Installation",
    },
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {[...data, ...data].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 min-w-max px-10"
            >
              {item.icon}
              <h2 className="uppercase text-lg font-semibold text-gray-700 whitespace-nowrap">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}