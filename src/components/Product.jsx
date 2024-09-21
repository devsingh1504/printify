import React from "react";

function Products({ title, description, imgSrc, heading }) {
  return (
    <div className="flex flex-col items-center text-center p-4 min-w-[80%] sm:min-w-[30%] md:min-w-0">
      <img src={imgSrc} alt={title} className="w-24 h-24 mb-4" />
      <h1 className="text-xl font-bold text-green-500 ">{heading}</h1>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

function Product() {
  return (
    <>
      <div className="bg-gray-100 hero max-w-screen-xl mx-auto px-2 py-8">
        <div className="hero-content flex-col lg:flex-row bg-base-100 shadow-xl max-h-auto overflow-hidden">
          <img
            src="/public/shirt.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Easily add your design to a wide range of products
            </h2>
            <p>
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <a
              href="#"
              className="text-green-500 hover:text-green-600 font-semibold"
            >
              All products →
            </a>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-100 max-w-screen-xl mx-auto px-2 py-8">
        {/* For mobile scrolling */}
        <div className="flex md:grid md:grid-cols-3 gap-8 mt-12 overflow-x-auto md:overflow-visible">
          <Products
            imgSrc="/public/custom-products.webp"
            heading="CREATE"
            title="custom products"
            description="Easily add your design to a wide range of products using our free tools"
          />
          <Products
            imgSrc="/public/your-products.webp"
            heading="SELL"
            title="on your terms"
            description="You choose the products, sale price , and where to sell"
          />
          <Products
            imgSrc="/public/fullfillment.webp"
            heading="WE HANDLE"
            title="fulfillment"
            description="Once an order is placed, we automatically handle all the printing and delivery logistics"
          />
        </div>
      </div>
    </>
  );
}

export default Product;
