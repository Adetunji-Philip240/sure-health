"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "./style.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Slider from "react-slick";

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700, // Increased speed for smoother transition
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out", // Smooth easing
    swipeToSlide: true, // Allow swiping to slide
    responsive: [
      {
        breakpoint: 640, // Mobile screen size
        settings: {
          slidesToShow: 1, // Show one slide on mobile
        },
      },
      {
        breakpoint: 768, // Tablet screen size
        settings: {
          slidesToShow: 2, // Show two slides on tablet
        },
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="about-main">
        <div className="about-main-overlay"></div>
        <div className="about-main-content">
          <h2 className="text-6xl font-bold">About Us</h2>
        </div>
      </div>
      <div className="mt-5">
        <div className="block mx-auto w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="md:mt-40 lg:mt-20">
              <Image
                src="/images/about.jpg"
                className="w-full rounded-lg"
                alt="about"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div>
              <small>About Us</small>
              <h2 className="text-4xl text-blue-400 font-bold mt-2">
                Healing Happens Here—Every Day, Digitally
              </h2>
              <p className="mt-6">
                At Sure Health Care, we bring healthcare to your fingertips.
                From smart symptom checkers to expert consultations and
                personalized health tips, our digital platform is designed to
                support your wellness journey—anytime, anywhere. Experience the
                future of healthcare, where healing meets technology.
              </p>
              <div className="mt-5">
                <div className="grid grid-cols-4">
                  <div className="col-span-1">
                    <Image
                      src="/icons/heart-rate.png"
                      width={50}
                      height={50}
                      className="float-right mx-4"
                      alt="heart-rate"
                    />
                  </div>
                  <div className="col-span-3">
                    <p className="font-bold text-blue-500">
                      Health Meets Innovation
                    </p>
                    <small>
                      We combine modern technology with expert healthcare
                      solutions to deliver fast, reliable, and personalized
                      care—all in one digital platform. Your well-being,
                      upgraded.
                    </small>
                  </div>
                </div>
                <div className="grid grid-cols-4 mt-3">
                  <div className="col-span-1">
                    <Image
                      src="/icons/medical-team.png"
                      width={50}
                      height={50}
                      className="float-right mx-4"
                      alt="heart-rate"
                    />
                  </div>
                  <div className="col-span-3">
                    <p className="font-bold text-blue-500">
                      Professionals in the field
                    </p>
                    <small>
                      We are a team of dedicated healthcare professionals
                      committed to providing quality medical care and support.
                      Our team includes doctors, nurses, pharmacists, and other
                      specialists who work together to ensure the well-being of
                      every patient.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 back text-white p-20">
        <div className="block mx-auto w-3/2">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="box-shadow2 p-5 transition-transform duration-300 hover:scale-105">
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-1">
                  <Image
                    src="/icons/heart.png"
                    width={50}
                    height={50}
                    className="float-right mx-4"
                    alt="heart-rate"
                  />
                </div>
                <div className="col-span-3">
                  <p className="font-bold  mt-3">Get Fast Reply</p>
                </div>
              </div>
              <small>
                Our platform ensures patients get quick responses—diagnose
                illnesses, receive instant results, and book consultations with
                ease and speed.
              </small>
            </div>
            <div className="box-shadow2 p-5 transition-transform duration-300 hover:scale-105">
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-1">
                  <Image
                    src="/icons/healthy.png"
                    width={50}
                    height={50}
                    className="float-right mx-4"
                    alt="heart-rate"
                  />
                </div>
                <div className="col-span-3">
                  <p className="font-bold  mt-3">Your Health First</p>
                </div>
              </div>
              <small>
                At the heart of everything we do is you. We prioritize your
                health with fast, reliable, and compassionate care—every step of
                the way.
              </small>
            </div>
            <div className="box-shadow2 p-5 transition-transform duration-300 hover:scale-105">
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-1">
                  <Image
                    src="/icons/checkup.png"
                    width={50}
                    height={50}
                    className="float-right mx-4"
                    alt="heart-rate"
                  />
                </div>
                <div className="col-span-3">
                  <p className="font-bold  mt-3">Healthy & Informed</p>
                </div>
              </div>
              <small>
                We provide reliable health tips and updates to keep you informed
                and empowered to make better choices for a healthier life.
              </small>
            </div>
            <div className="box-shadow2 p-5 transition-transform duration-300 hover:scale-105">
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-1">
                  <Image
                    src="/icons/medical-team2.png"
                    width={50}
                    height={50}
                    className="float-right mx-4"
                    alt="heart-rate"
                  />
                </div>
                <div className="col-span-3">
                  <p className="font-bold  mt-3">First Class</p>
                </div>
              </div>
              <small>
                Our team is made up of first-class practitioners—highly skilled,
                experienced, and dedicated to delivering exceptional healthcare
                with a personal touch.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="block mx-auto w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Image
                width={500}
                height={300}
                src="/images/aboutUS.jpg"
                className="w-full rounded-lg"
                alt="about"
                layout="responsive"
              />
            </div>
            <div>
              <small className="text-blue-500">MISSION</small>
              <h2 className="text-4xl font-bold">Missions & Visions</h2>
              <p>
                At Sure Health Care, we aim to make healthcare accessible and
                reliable for everyone through technology. Our goal is to empower
                individuals with easy self-diagnosis tools, access to certified
                doctors, and trusted health education — building a healthier and
                more informed society.
              </p>
              <div className="bg-blue-600 text-white p-3 rounded-xl mt-3 hover:bg-blue-500 box-shadow3">
                <p className="font-bold ">Health Centric</p>
                <small>
                  This means placing your well-being at the core of our services
                  — from intelligent self-diagnosis tools to real-time doctor
                  consultations and personalized health tips. Our platform is
                  built to prioritize your health needs, promote preventive
                  care, and support your journey toward a better, healthier
                  life.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center back p-5 text-white">
        <small className="font-bold">OUR DOCTORS</small>
        <h2 className="text-4xl font-bold text-blue-800">
          Meet Our Professional Doctors
        </h2>
        <p>
          Get to know the dedicated physicians who form the backbone of
          Sure-Health-Care
        </p>

        <div className="block w-80 md:w-2/3 mx-auto mt-5">
          <Slider {...settings}>
            <div className="text-center">
              <div className="bg-blue-700 p-10 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-blue-500 box-shadow3 block w-80 mx-auto">
                <Image
                  src="/images/doctor (1).jpg"
                  width={300}
                  height={300}
                  className="block mx-auto"
                  alt="doc"
                />
                <p className="text-1xl font-bold">Dr. Robert Philips</p>
                <small>Neurologist</small>
                <button className="block mx-auto mt-3 btn btn-dash">
                  Book Appointment
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 p-10 rounded-3xl  transition-transform duration-300 hover:scale-105 hover:bg-blue-500 box-shadow3 block w-80 mx-auto">
                <Image
                  src="/images/doctor (2).jpg"
                  width={300}
                  height={300}
                  className="block mx-auto"
                  alt="doc"
                />
                <p className="text-1xl font-bold">Dr. Elizabeth Blackwell</p>
                <small>Cardiologist</small>
                <button className="block mx-auto mt-3 btn btn-dash">
                  Book Appointment
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-blue-700 p-10 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-blue-500 box-shadow3 block w-80 mx-auto">
                <Image
                  src="/images/doctor (2).jpg"
                  width={300}
                  height={300}
                  className="block mx-auto"
                  alt="doc"
                />
                <p className="text-1xl font-bold">Dr. Elizabeth Blackwell</p>
                <small>Cardiologist</small>
                <button className="block mx-auto mt-3 btn btn-dash">
                  Book Appointment
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-blue-700 p-10 rounded-3xl  transition-transform duration-300 hover:scale-105 hover:bg-blue-500 box-shadow3 block w-80 mx-auto">
                <Image
                  src="/images/doctor (3).jpg"
                  width={300}
                  height={300}
                  className="block mx-auto"
                  alt="doc"
                />
                <p className="text-1xl font-bold">Emily Ben</p>
                <small>Anesthesiologist</small>
                <button className="block mx-auto mt-3 btn btn-dash">
                  Book Appointment
                </button>
              </div>
            </div>
          </Slider>
        </div>

        <p className="text-end text-blue-800 font-bold">View More Doctors</p>
      </div>

      <Footer />
    </div>
  );
};

export default page;
