import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 p-5">
        <div>
          <h2 className="text-2xl ">
            <Link href="/" className="text-blue-500 font-bold" id="logo">
              Sure-Health_Care
            </Link>
          </h2>
          <small className="w-3/4 block mt-3">
            Online platform for healthcare services that make treatments closer
            to the people
          </small>

          <p className="mt-3 text-blue-500">
            <i className="fab fa-facebook mr-4"></i>
            <i className="fab fa-linkedin mr-4"></i>
            <i className="fab fa-instagram"></i>
          </p>
        </div>
        <div>
          <p className="md:ml-28 font-bold text-blue-500">Useful Links</p>
          <ul className="md:ml-36">
            <li>
              <small>
                <Link href="/about-us" className="">
                  About Us
                </Link>
              </small>
            </li>
            <li>
              <small>Our Doctors</small>
            </li>
            <li>
              <small>Diagnostic System</small>
            </li>
            <li>
              <small>
                <Link href="/services" className="">
                  Our Services
                </Link>
              </small>
            </li>
            <li>
              <small>Health Tips</small>
            </li>
            <li>
              <small>How It Work</small>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-blue-500 font-bold">Subscribe</p>
          <small>subscribe to get latest health news from us</small>
          <form action="/">
            <input
              type="email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-300 p-2 px-6 ml-1 rounded-md"
            >
              <i className="fas fa-bell text-white"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
