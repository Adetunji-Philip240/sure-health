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
          <h2 className="text-6xl font-bold">Our Services</h2>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-2xl font-bold">What We Offer On This Platform</h3>
        <div className="block mx-auto w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 box-shadow3 ">
            <div className="md:mt-16 lg:mt-0">
              <Image
                src="/images/diagnose.jpg"
                className="w-full rounded-lg"
                alt="diagnose"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="text-start lg:mt-5 pr-5 pl-5 ">
              <h2 className="font-bold text-1xl text-blue-600">
                Conduct a Symptom Checkup
              </h2>
              <p>
                Begin a guided assessment to help identify potential health
                conditions based on the symptoms you are experiencing. Our
                intelligent system analyzes your responses to provide a
                preliminary diagnosis along with recommended treatment options.
                Based on the outcome of the assessment, the system may also
                suggest appropriate drug prescriptions to assist in symptom
                relief or condition management. Please note that this tool is
                intended to offer initial insights and should not replace
                consultation with a qualified healthcare professional.
              </p>
              <Link href="/" className="float-start">
                <button className="block mx-auto mt-3 btn btn-dash mb-3">
                  Diagnose Yourself Now!
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 box-shadow3 ">
              <div className="text-start lg:mt-5 pr-5 pl-5 ">
                <h2 className="font-bold text-1xl text-blue-600">
                  Get Daily Health Tips
                </h2>
                <p>
                  Receive expert-recommended health tips every day to support
                  your overall well-being. Our system delivers practical advice
                  on nutrition, physical activity, mental health, sleep, stress
                  management, and preventive care. These daily insights are
                  designed to help you make informed lifestyle choices, improve
                  long-term health outcomes, and stay motivated in your wellness
                  journey. While these tips are beneficial, they are intended
                  for general guidance and do not replace personalized medical
                  advice from a licensed healthcare professional.
                </p>
                <Link href="/" className="float-start">
                  <button className="block mx-auto mt-3 btn btn-dash mb-3">
                    Get Tips Now!
                  </button>
                </Link>
              </div>
              <div className="md:mt-16 lg:mt-0">
                <Image
                  src="/images/health-tips.jpg"
                  className="w-full rounded-lg"
                  alt="diagnose"
                  width={500}
                  height={300}
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 box-shadow3 ">
              <div className="md:mt-16 lg:mt-0">
                <Image
                  src="/images/doctor (1).jpg"
                  className="w-full rounded-lg"
                  alt="diagnose"
                  width={500}
                  height={300}
                  layout="responsive"
                />
              </div>
              <div className="text-start lg:mt-2 pr-5 pl-5 ">
                <h2 className="font-bold text-1xl text-blue-600">
                  Have a Direct Medical Consultation
                </h2>
                <p>
                  Connect directly with a licensed medical professional for a
                  personalized consultation regarding your health concerns. This
                  service enables real-time interaction, allowing you to discuss
                  symptoms, receive expert medical advice, and obtain
                  professional guidance on diagnosis and treatment options.
                  Through secure and confidential communication, our platform
                  ensures you get the care you need from the comfort of your
                  home. Please note that while virtual consultations are highly
                  effective for many conditions, certain cases may still require
                  in-person evaluation or follow-up.
                </p>
                <Link href="/" className="float-start">
                  <button className="block mx-auto mt-3 btn btn-dash mb-2">
                    Book A Consultation Now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-2xl text-blue-600">
          We offer smart symptom checkups, daily health tips, and direct
          consultations with licensed doctors—providing you with personalized
          care, expert guidance, and reliable health support all in one place.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default page;
