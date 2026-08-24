import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaCcPaypal,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
} from "react-icons/fa";

const Footer = () => {
  const customerCare = [
    "FAQS",
    "TERMS OF SERVICE",
    "PRIVACY POLICY",
    "CONTACT US",
    "GIFT CARD",
  ];

  const helpSupport = [
    "SHIPPING INFO",
    "RETURNS",
    "HOW TO ORDER",
    "HOW TO TRACK",
    "SIZE GUIDE",
  ];

  const companyInfo = [
    "ABOUT US",
    "OUR BLOG",
    "CAREERS",
    "STORE LOCATIONS",
    "TESTIMONIAL",
  ];

  return (
    <footer className="bg-black text-white">

      {/* ================= TOP FOOTER ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[38%_62%]">

        {/* LEFT SIDE */}
        <div
          className="relative min-h-[530px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/banner-3.jpg')"       
           }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75"></div>

          <div className="relative z-10 px-6 py-12 md:px-10">

            {/* Logo */}
            <div className="mb-8 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 text-xl text-black">
                🪑
              </div>

              <h2 className="text-xl font-semibold">
                Minicom
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-[500px] text-[13px] leading-6 text-white">
              At Minicom, we bring style, comfort, and quality to your home
              with carefully curated furniture collections. Designed for
              modern living, our pieces blend functionality with timeless
              aesthetics. Experience exceptional craftsmanship and elevate
              your space with us!
            </p>

            {/* Social Icons */}
            <div className="mt-10 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-black transition hover:bg-yellow-400"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-black transition hover:bg-yellow-400"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-black transition hover:bg-yellow-400"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-black transition hover:bg-yellow-400"
              >
                <FaTiktok />
              </a>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-6 py-15 md:px-12 lg:px-14">

          {/* Newsletter */}
          <div className="flex grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-[62%]">

            <div>
              <h3 className="text-md font-bold">
                SUBSCRIBE NEWSLETTER
              </h3>

              <p className="mt-5 text-[10px] text-white/70">
                STAY UPDATED WITH THE LATEST TRENDS
              </p>
            </div>

            <div className="flex h-14 w-110 border border-white text-[13px]">

              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="min-w-0 flex-1 bg-transparent px-5 text-[12px] text-white outline-none placeholder:text-white"
              />

              <button className="w-28 bg-white font-semibold text-black transition hover:bg-yellow-400">
                SUBMIT
              </button>

            </div>

          </div>

          {/* Links */}
          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">

            {/* Customer Care */}
            <div>
              <h3 className="mb-5 text-xl font-bold">
                CUSTOMER CARE
              </h3>

              <ul className="space-y-2 text-[8px]">
                {customerCare.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12px] transition hover:text-yellow-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="mb-5 text-xl font-bold">
                HELP & SUPPORT
              </h3>

              <ul className="space-y-2">
                {helpSupport.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12px] transition hover:text-yellow-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-5 text-xl font-bold">
                COMPANY INFO
              </h3>

              <ul className="space-y-2">
                {companyInfo.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12px] transition hover:text-yellow-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-white/20 px-6 py-8 md:px-10">

        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">

          {/* Copyright */}
          <div className="text-center text-[12px] leading-7 md:text-left">
            <p>COPYRIGHT © 2025 NOVA-CREATIVE.</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-16 items-center justify-center rounded bg-white">
              <FaCcPaypal className="text-3xl text-blue-600" />
            </div>

            <div className="flex h-10 w-16 items-center justify-center rounded bg-white">
              <FaCcMastercard className="text-3xl text-red-500" />
            </div>

            <div className="flex h-10 w-16 items-center justify-center rounded bg-white">
              <span className="font-bold text-purple-600">
                QPay
              </span>
            </div>

            <div className="flex h-10 w-16 items-center justify-center rounded bg-white">
              <FaCcVisa className="text-3xl text-blue-800" />
            </div>

            <div className="flex h-10 w-16 items-center justify-center rounded bg-white">
              <FaCcAmex className="text-3xl text-blue-500" />
            </div>

          </div>

          {/* Back To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-400 text-xl text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            <FaArrowUp />
          </button>

        </div>
      </div>

    </footer>
  );
};

export default Footer;