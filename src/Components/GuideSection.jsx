const steps = [
  {
    number: "1",
    title: "Choose Your Furniture",
    desc: "Browse our wide selection of stylish and high-quality furniture. Compare designs, colors, and sizes to find the perfect fit for your home.",
    active: true,
  },
  {
    number: "2",
    title: "Secure Checkout",
    active: false,
  },
  {
    number: "3",
    title: "Fast & Safe Delivery",
    active: false,
  },
  {
    number: "4",
    title: "Installation & Enjoy",
    active: false,
  },
];

export default function GuideSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xlmx-auto px-6 grid lg:grid-cols-2 gap-5 items-center">

        {/* Left */}
        <div className="">

          <p className="uppercase tracking-[3px] text-gray-400 text-sm mb-5">
            Step To Buy – Simple & Hassle-Free
          </p>

          <h2 className="text-3xl leading-tight">
            YOUR GUIDE TO A 
            SEAMLESS <br />
            SHOPPING EXPERIENCE
          </h2> <br />

          <div className="space-y-1">

            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">

                <div className="flex flex-col items-center">

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                    ${
                      step.active
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </div>

                  {index !== steps.length - 1 && (
                    <div
                      className={`w-[2px] h-20 ${
                        step.active ? "bg-yellow-400" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>

                <div className="pt-2">
                  <h3
                    className={`text-md font-semibold ${
                      step.active ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {step.desc && (
                    <p className="text-gray-500 mt-4 leading-9 text-sm">
                      {step.desc}
                    </p>
                  )}
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Right */}

        <div className="">
          <img
            src="/Images/guide1.jpg"
            alt="Guide"
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>

      </div>
    </section>
  );
}