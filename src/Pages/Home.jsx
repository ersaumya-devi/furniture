import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Categories from "../Components/Categories";
import ProductsSection from "../Components/ProductsSection";
import GuideSection from "../Components/GuideSection";
import FeaturedProduct from "../Components/FeaturedProduct";
import OfficeFurniture from "../Components/OfficeFurniture";
import ProductCategories from "../Components/ProductCategories";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Categories/>
      <ProductsSection />
      <GuideSection/>
      <FeaturedProduct />
      <OfficeFurniture />
      <ProductCategories/>
      <Footer />
    </>
  );
}