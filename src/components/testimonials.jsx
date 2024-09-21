import React from "react";

const testimonials = [
  {
    name: "Robert A. Voltaire",
    store: "Store link",
    review:
      "Printify has been an incredible service for us musicians unable to keep large amount of inventory... Thanks Printify!",
    rating: 5,
    image: "/person.jpg",
  },
  {
    name: "Quinten Barney",
    store: "Etsy Merchant",
    review:
      "We chose Printify because of their offerings as well as their incredibly low prices. After several years...",
    rating: 5,
    image: "/person.jpg",
  },
  {
    name: "Nikki",
    store: "Store link",
    review:
      "Printify has been amazing for us as we grow our business... Customer Service team has been great!",
    rating: 5,
    image: "/person.jpg",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array(rating)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 3.293l.951 1.947 2.146.312a1 1 0 01.554 1.707l-1.55 1.512.366 2.132a1 1 0 01-1.45 1.054L10 11.972l-1.927 1.013a1 1 0 01-1.45-1.054l.366-2.132-1.55-1.512a1 1 0 01.554-1.707l2.146-.312.951-1.947a1 1 0 011.798 0z" />
          </svg>
        ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mb-5">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Trusted by over 8M sellers around the world
      </h2>
      <div className="text-center text-gray-500 mb-12">
        Whether you are just getting started or run an enterprise-level
        e-commerce business, we do everything we can to ensure a positive
        merchant experience.
      </div>
      <div className="flex overflow-x-scroll space-x-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-80 flex-shrink-0"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {testimonial.name}
                </h3>
                <span className="text-sm text-green-500">
                  {testimonial.store}
                </span>
              </div>
            </div>
            <StarRating rating={testimonial.rating} />
            <p className="mt-4 text-sm text-gray-500">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
