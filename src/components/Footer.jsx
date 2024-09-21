import React from "react";
import { Instagram, Youtube, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Printify Text */}
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <img className="w-12" src="/printify.png" alt="Printify logo" />
          <span className="text-4xl text-green-500 font-bold">Printify</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-2 text-green-500">
          <Instagram />
          <Youtube />
          <Linkedin />
          <Facebook />
          <Twitter />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            {/* Integrations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Integrations
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Shopify</li>
                <li>Etsy</li>
                <li>eBay</li>
                <li>Amazon</li>
                <li>TikTok Shop</li>
                <li>BigCommerce</li>
                <li>Wix</li>
                <li>WooCommerce</li>
                <li>Printify API</li>
                <li>Printify Pop-Up Store</li>
                <li>Shutterstock</li>
              </ul>
            </div>

            {/* Discover */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Discover
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Blog</li>
                <li>Guides</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Shipping Rates</li>
                <li>Mockup Generator</li>
                <li>Etsy print-on-demand</li>
                <li>Shopify print-on-demand</li>
                <li>Wix print-on-demand</li>
                <li>Squarespace print-on-demand</li>
              </ul>
            </div>

            {/* Start Selling */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Start Selling
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Custom T-shirts</li>
                <li>Custom Hoodies</li>
                <li>Custom Mugs</li>
                <li>Custom Backpacks</li>
                <li>Custom Branding</li>
                <li>Sell on Etsy</li>
                <li>Sell on Social Media</li>
                <li>Free T-shirt Designs</li>
                <li>Custom All-Over Print Hoodies</li>
                <li>Start a Clothing Line</li>
              </ul>
            </div>

            {/* Printify */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Printify
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Print on Demand</li>
                <li>Print Providers</li>
                <li>Experts Program</li>
                <li>Printify Express Delivery</li>
                <li>Become a Partner</li>
                <li>About</li>
                <li>Printify Quality Promise</li>
                <li>Jobs</li>
                <li>Webinars</li>
                <li>Printing Profits Podcast</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500 text-center">
            <p className="mb-4">© 2024 Printify, Inc. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:underline">
                Intellectual Property Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
