"use client";
import React from "react";
import { useState } from "react";

const Service = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Define the section titles and their corresponding content and button
  const sections = [
    {
      title: "Easy Online Appointment",
      content:
        "Booking your healthcare visit has never been easier! With our easy online appointment system, you can schedule, reschedule, or cancel appointments anytime, anywhere. Skip the long waits and get the care you need at your convenience—fast, simple, and hassle-free.",
      button: (
        <button className="bg-blue-400 p-3 rounded-md text-white text-1xl font-bold">
          Book an Appointment
        </button>
      ),
    },

    {
      title: "Health Diagnosis & Drug Prescription",
      content:
        "Get accurate diagnosis and the right prescription in just a few clicks. Our expert system helps identify your symptoms and provides trusted solutions, including recommended medications. Quick, reliable, and tailored to your health needs.",
      button: (
        <button className="bg-blue-400 p-3 rounded-md text-white text-1xl font-bold">
          Check Yourself
        </button>
      ),
    },
    {
      title: "Simple Tips for a Healthier You",
      content:
        "Stay informed and feel your best with our daily health tips. From nutrition and fitness to mental wellness and preventive care, we share simple, practical advice to help you lead a healthier lifestyle—one day at a time. Your journey to better health starts here!",
      button: (
        <button className="bg-blue-400 p-3 rounded-md text-white text-1xl font-bold">
          Get Health Tips
        </button>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 service">
        <div className="bg-blue-300 w-80 h-80 rounded-full p-5 mx-auto text-center mb-4 box-shadow2">
          <img src="/images/med.png" className="mx-auto" width={50} alt="" />
          <p>Diagnosis and Prescription</p>
          <small>
            We offer effective diagnostic systems to help you assess your
            symptoms and obtain an accurate diagnosis by answering a series of
            related questions, followed by authentic drug prescriptions or
            treatments based on the results.
          </small>
        </div>
        <div className="bg-blue-300 w-80 h-80 rounded-full p-5 mx-auto text-center mb-4 box-shadow2">
          <img src="/images/med2.png" className="mx-auto" width={50} alt="" />
          <p>Daily Health Tips</p>
          <small>
            We provide daily health tips to help you improve your well-being and
            make informed lifestyle choices through practical advice and
            wellness strategies. <br />
            Stay connected always.
          </small>
        </div>
        <div className="bg-blue-300 w-80 h-80 rounded-full p-5 mx-auto text-center box-shadow2">
          <img src="/images/med3.png" className="mx-auto" width={50} alt="" />
          <p>Direct Medical Consultation</p>
          <small>
            We offer direct medical consultations to connect you with the best
            healthcare professionals for personalized advice and timely support
            based on your health needs. <br />
            We are 24/7 active.
          </small>
        </div>
      </div>

      <div className="bg-blue-300 p-5">
        <div className="container mt-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <img
                src="/images/doc-pat.jpg"
                className="mx-auto md:w-[90%] w-[80%] rounded-lg"
                width={50}
                alt=""
              />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-extrabold border-b-4  border-b-black">
                Best Care For Your Good Health
              </h2>
              <p className="mt-5 text-black">
                At <b>Sure Health Care</b>, your health is our top priority. We
                are dedicated to providing exceptional medical services with
                compassion, professionalism, and personalized attention. Our
                team of experienced healthcare professionals ensures you receive
                the highest standard of care, helping you stay healthy and live
                better every day. Trust us to be your partner in
                wellness—because your good health deserves the best care.
              </p>
              <div className="container text-black mt-5">
                <div className=" bg-white border border-gray-300 ">
                  {sections.map((section, index) => (
                    <div key={index}>
                      <div className="border-b">
                        <button
                          className="w-full text-left p-4 focus:outline-none bg-blue-400 text-white font-bold"
                          onClick={() => toggleAccordion(index)}
                        >
                          {section.title}
                        </button>
                      </div>
                      <div
                        className={`accordion-content p-4 bg-gray-50 ${
                          openIndex === index ? "block" : "hidden"
                        }`}
                      >
                        <p>{section.content}</p>
                        <p>{section.button}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
