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
        <div className="block w-3/4 mx-auto">
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 box-shadow3 ">
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
            <div className="pl-5 pr-5 text-start lg:mt-10 ">
              <h2 className="font-bold text-blue-600 text-1xl">
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
              <Link href="/malaria_diagnosis" className="float-start">
                <button className="block mx-auto mt-3 mb-3 btn btn-dash">
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
