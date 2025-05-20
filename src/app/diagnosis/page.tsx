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
          <h2 className="text-6xl font-bold">Diagnosis Systems</h2>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-2xl font-bold">Use Any Of Our Diagnostic System</h3>
        <div className="block mx-auto w-3/4">
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
            <div className="text-start lg:mt-10 pr-5 pl-5 ">
              <h2 className="font-bold text-1xl text-blue-600">
                Malaria Diagnosis
              </h2>
              <p>
                This system helps you check for signs of malaria by answering a
                few health-related questions. It gives a likely diagnosis,
                recommends suitable drug prescriptions, and offers advice on
                what to do next. You’ll also get helpful prevention tips.
                Simple, fast, and easy to use — it’s a smart first step before
                seeing a doctor.
              </p>
              <Link href="/diagnosis" className="float-start">
                <button className="block mx-auto mt-3 btn btn-dash mb-3">
                  Diagnose Yourself Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
