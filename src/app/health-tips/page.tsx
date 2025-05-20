"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "./style.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="service-main">
        <div className="service-main-overlay"></div>
        <div className="service-main-content">
          <h2 className="text-6xl font-bold">Health Tips</h2>
        </div>
      </div>

      <div className="block mx-auto w-3/4 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 box-shadow3 ">
          <div className="md:mt-16 lg:mt-0">
            <Image
              src="/images/malaria.jpg"
              className="w-full rounded-lg"
              alt="diagnose"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="text-start lg:mt-16 pr-5 pl-5 ">
            <h2 className="font-bold text-1xl text-blue-600">
              Let’s Talk About Malaria: What You Should Know
            </h2>
            <p>
              Hey there! Let’s have a quick study about something
              important—malaria. It’s something many of us are familiar with,
              especially if we live in tropical areas. But how much do we really
              know about it?
            </p>
            <Link href="/malaria" className="float-start">
              <button className="block mx-auto mt-3 btn btn-dash mb-3">
                View More
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 box-shadow3 ">
          <div className="md:mt-16 lg:mt-0">
            <Image
              src="/images/highBP.jpg"
              className="w-full rounded-lg"
              alt="diagnose"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="text-start lg:mt-16 pr-5 pl-5 ">
            <h2 className="font-bold text-1xl text-blue-600">
              Let’s Talk: High Blood Pressure – The Silent Danger
            </h2>
            <p>
              Hey friends, Have you ever heard someone say, “My BP is high”?
              It’s more common than we think. High blood pressure—also called
              hypertension—is one of those health issues that doesn’t always
              show clear signs, yet it can quietly damage your body over time.
            </p>
            <Link href="/high-bp" className="float-start">
              <button className="block mx-auto mt-3 btn btn-dash mb-3">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
