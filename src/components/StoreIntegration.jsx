import React from "react";

const platforms = [
  {
    name: "Wix",
    img: "/WIX.png",
    subheading: "Wix Integration",
    link: "#",
  },
  {
    name: "Squarespace",
    img: "/square.jpg",
    subheading: "Squarespace Integration",
    link: "#",
  },
  {
    name: "Woo",
    img: "/woo.png",
    subheading: "WooCommerce Integration",
    link: "#",
  },
  {
    name: "Shopify",
    img: "/shopify.png",
    subheading: "Shopify Integration",
    link: "#",
  },
  {
    name: "Etsy",
    img: "/etsy.webp",
    subheading: "Etsy Integration",
    link: "#",
  },
  {
    name: "API",
    img: "/api.jpg",
    subheading: "API Integration",
    link: "#",
  },
];

const PlatformCard = ({ img, name, subheading, link }) => (
  <a
    href={link}
    className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 cursor-pointer text-center"
  >
    <img src={img} alt={`${name} logo`} className="h-16 w-16 mx-auto mb-4" />
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="text-sm text-gray-500">{subheading}</p>
  </a>
);

const StoreIntegration = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-3">
        Connect your store
      </h1>
      <span className="text-gray-500 pt-5 text-center px-4 md:px-0">
        Printify easily integrates with major e-commerce platforms and
        marketplaces
      </span>

      {/* Central Icon */}
      <div className="relative p-8 bg-white rounded-full shadow-lg mt-5 mb-8">
        <img
          src="/printify.png"
          alt="Central Logo"
          className="h-16 w-16 md:h-24 md:w-24"
        />
      </div>

      {/* Grid for platform cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 max-w-6xl mb-10">
        {platforms.map((platform, index) => (
          <PlatformCard
            key={index}
            img={platform.img}
            name={platform.name}
            subheading={platform.subheading}
            link={platform.link}
          />
        ))}
      </div>

      {/* Small Box for Custom Solutions */}
      <div className="relative bg-green-100 p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto overflow-hidden mb-12 min-h-[150px]">
        {/* Text Section */}
        <div className="flex-1 z-10 mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-green-800">
            Are you a large business looking for custom solutions?
          </h3>
        </div>

        {/* Button Section */}
        <div className="flex-none z-10">
          <button className="bg-white text-green-800 font-medium py-2 px-4 rounded shadow hover:bg-gray-100 transition">
            Talk to sales
          </button>
        </div>

        {/* Background Decoration */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-r from-green-300 to-green-500 transform rotate-12 translate-x-1/4 z-0" />
      </div>
    </div>
  );
};

export default StoreIntegration;
