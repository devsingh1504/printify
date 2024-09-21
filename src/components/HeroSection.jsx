import React from "react";
import { CirclePlay } from "lucide-react";

function HeroSection() {
  return (
    <div className="max-w-screen-xl mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16 md:my-28">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-semibold pt-5 space-y-5">
          Create and sell <br />
          custom products
        </h1>
        <ul className="list-disc space-y-2 pl-5 text-base md:text-lg pt-3">
          <li>100% Free to use</li>
          <li>900+ High-Quality Products</li>
          <li>Largest global print network</li>
        </ul>
        <div className="space-x-0 md:space-x-4 pt-6 flex flex-row gap-3">
          <button className="bg-green-500 text-white px-6 py-2 rounded w-full md:w-auto">
            Start for free
          </button>
          <button className="flex items-center text-black border border-gray-600 hover:text-green-500 px-6 py-2 rounded w-full md:w-auto hover:bg-green-100">
            <CirclePlay className="mr-0" /> How it works?
          </button>
        </div>

        <p className="text-green-500 pt-4 md:pt-0">
          Trusted by over 8M sellers around the world
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:ml-32 flex justify-center">
        <img
          src="/poster.gif"
          alt="Custom Product"
          className="w-60 md:w-80 lg:w-96"
        />
      </div>
    </div>
  );
}

export default HeroSection;
