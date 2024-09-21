import React from "react";

function Feature({ title, description, imgSrc }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img
        src={imgSrc}
        alt={title}
        className="w-20 h-20 mb-4 md:w-24 md:h-24"
      />
      <h2 className="text-base md:text-lg font-semibold">{title}</h2>
      <p className="text-xs md:text-sm text-gray-500">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-2 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <Feature
          imgSrc="/public/higher-profits.svg"
          title="Higher Profits"
          description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
        />
        <Feature
          imgSrc="/public/robust-scaling.svg"
          title="Robust Scaling"
          description="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
        />
        <Feature
          imgSrc="/public/best-selection.svg"
          title="Best Selection"
          description="With 900+ products and top quality brands, you can choose the best products for your business."
        />
      </div>
    </div>
  );
}

export default FeaturesSection;
