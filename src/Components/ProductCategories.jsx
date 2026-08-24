import React from "react";

const categories = [
  {
    title: "Living Room",
    products: [
      {
        name: "Modern Beige Armchair With Wooden Legs",
        price: "$150.00",
        image: "/Images/singlechair2.jpg",
        alt: "Modern Beige Armchair With Wooden Legs"
      },
      {
        name: "Solid Wood TV Stand With Storage Drawers Design",
        price: "$135.00",
        image: "/Images/almirah3.jpg",
        alt: "Solid Wood TV Stand With Storage Drawers Design"
      },
      {
        name: "Wooden Frame Sofa Chair With Plush Cushion Seat",
        price: "$270.00",
        oldPrice: "$280.00",
        discount: "-3%",
        image: "/Images/sofa1.jpg",
        alt: "Wooden Frame Sofa Chair With Plush Cushion Seat"
      },
      {
        name: "Premium Solid Wood Chair With Comfortable Design",
        price: "$79.00",
        image: "/Images/chair2.jpg",
        alt: "Premium Solid Wood Chair With Comfortable Design"
      },
    ],
  },

  {
    title: "Plant Pots",
    products: [
      {
        name: "Compact Mini Plant Pot For Desk Or Shelf Display",
        price: "$37.00",
        image: "/Images/plant1.jpg",
        alt: "Compact Mini Plant Pot For Desk Or Shelf Display"
      },
      {
        name: "Decorative Cactus Plant Pot For Indoor Display",
        price: "$37.00",
        image: "/Images/plant4.jpg",
        alt: "Decorative Cactus Plant Pot For Indoor Display"
      },
      {
        name: "Durable Plastic Fiber Plant Pot For Indoor Decor",
        price: "$78.00",
        image: "/Images/plant3.jpg",
        alt: "Durable Plastic Fiber Plant Pot For Indoor Decor"
      },
      {
        name: "Mini Ceramic Flower Pot For Desk And Home Decor",
        price: "$15.00",
        image: "/Images/plant5.jpg",
        alt: "Mini Ceramic Flower Pot For Desk And Home Decor"
      },
    ],
  },

  {
    title: "Tables & Desks",
    products: [
      {
        name: "Wooden Office Desk With Drawers Open Storage",
        price: "$140.00",
        oldPrice: "$145.00",
        discount: "-3%",
        image: "/Images/table1.jpg",
      },
      {
        name: "Premium Solid Wood Chair With Comfortable Design",
        price: "$79.00",
        image: "/Images/chair2.jpg",
      },
      {
        name: "Classic Wooden Nightstand With Dual Storage Drawers",
        price: "$99.00",
        image: "/Images/sofa2.jpg",
      },
      {
        name: "Modern Beige Armchair With Wooden Legs",
        price: "$150.00",
        image: "/Images/bad1.jpg",
      },
    ],
  },

  {
    title: "Bedroom",
    products: [
      {
        name: "Solid Wood Bed Frame With Classic Vintage Design",
        price: "$300.00",
        image: "/Images/bed2.jpg",
      },
      {
        name: "Wooden Base Table Lamp With Fabric Shade Design",
        price: "$35.00",
        image: "/Images/lamp1.jpg",
      },
      {
        name: "Solid Wood Bedside Cabinet With Two Storage Drawers",
        price: "$265.00",
        image: "/Images/bed3.jpg",
      },
      {
        name: "Classic Wooden Nightstand With Dual Storage Drawers",
        price: "$99.00",
        image: "/Images/almirah3.jpg",
      },
    ],
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="flex gap-9 items-start min-h-[112px] ">
      {/* Product Image */}
      <div className="relative w-[80px] h-[80px] shrink-0 bg-[#f5f5f5] rounded-[3px] flex items-center justify-center overflow-hidden">
        {product.discount && (
          <span className="absolute top-0 right-0 z-10 bg-[#f15b40] text-white text-[10px] font-semibold px-3 py-1 rounded-full">
            {product.discount}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 pt-1">
        <h3 className="text-[11px] leading-[26px] font-normal text-[#292929]">
          {product.name}
        </h3>

        <div className="flex items-center gap-4 mt-4">
          <span className="text-[16px] font-bold text-[#111]">
            {product.price}
          </span>

          {product.oldPrice && (
            <span className="text-[14px] text-[#aaa] line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductCategories = () => {
  return (
    <section className="w-full bg-white px-5 sm:px-8 lg:px-8 py-9">
      <div className="max-w-[1900px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 xl:gap-x-20 gap-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              {/* Category Title */}
              <h2 className="text-[10px] md:text-[20px] font-bold text-[#222] pb-7 border-b border-[#e5e5e5]">
                {category.title}
              </h2>

              {/* Products */}
              <div className="pt-[72px] space-y-[14px]">
                {category.products.map((product, index) => (
                  <ProductCard
                    key={`${category.title}-${index}`}
                    product={product}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;