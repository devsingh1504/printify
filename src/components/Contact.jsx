import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-gray-50 mb-10 ">
      {/* Left Side: Content */}
      <div className="w-full lg:w-1/2 bg-gray-900 text-white p-8 min-h-full h-full rounded-lg flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Make Money, Risk-Free</h2>
        <p className="mb-6 text-gray-400">
          You pay for fulfillment only when you make a sale.
        </p>

        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <div className="flex justify-between items-center mb-2">
            <span>You sell a t-shirt</span>
            <span>$30</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>You pay for its production</span>
            <span>$12</span>
          </div>
          <hr className="border-gray-700 mb-2" />
          <div className="flex justify-between items-center text-green-500 font-bold">
            <span>Your profit</span>
            <span>$18</span>
          </div>
        </div>

        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
          Start Selling
        </button>

        <p className="text-sm text-gray-500 mt-4">
          100% Free to use • 900+ Products • Largest print network
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block w-full lg:w-1/2 p-0">
        <img
          src="/money.svg"
          alt="Money Growth"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;
