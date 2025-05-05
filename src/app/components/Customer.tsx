"use client";

import React from "react";
import Slider from "react-slick";

const Customer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: "/images/custmr (1).jpg",
      description: (
        <div>
          <p className="font-bold text-2xl">John Smith</p>
          <i className="fas fa-quote-left text-3xl mx-3 text-gray-300"></i>
          <small className="font-bold">
            I recently had the opportunity to experience the healthcare
            services. I was impressed with their efficiency and patient care
          </small>{" "}
          <br />
          <i className="fas fa-quote-right text-3xl mx-3 text-gray-300"></i>
        </div>
      ),
    },
    {
      image: "/images/custmr (2).jpg",
      description: (
        <div>
          <p className="font-bold text-2xl">Clara Brown</p>
          <i className="fas fa-quote-left text-3xl mx-3 text-gray-300"></i>
          <small className="font-bold">
            "I recently made use of their healthcare platform and was truly
            pleased with the level of professionalism and attention to detail.
            The staff were courteous, and the entire process was smooth and
            reassuring."
          </small>
          <br />
          <i className="fas fa-quote-right text-3xl mx-3 text-gray-300"></i>
        </div>
      ),
    },
    {
      image: "/images/custmr (3).jpg",
      description: (
        <div>
          <p className="font-bold text-2xl">Alex Johnson</p>
          <i className="fas fa-quote-left text-3xl mx-3 text-gray-300"></i>
          <small className="font-bold">
            "My experience with the healthcare services was exceptional. The
            team was attentive, the process was seamless, and I felt genuinely
            cared for from start to finish."
          </small>
          <br />
          <i className="fas fa-quote-right text-3xl mx-3 text-gray-300"></i>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-blue-200 p-10">
      <div className="container  ">
        <div className="lg:w-1/3 w-full block mx-auto py-8">
          <h2 className="text-center text-4xl font-bold">
            What Our Customers Said About Us
          </h2>
          <p className="text-center mt-5 ">
            A strong healthcare system focuses on patient-centered care,
            emphasizes prevention, and utilizes digital technologies to enhance
            service delivery.
          </p>
        </div>
        <div className="container lg:w-1/2 block mx-auto w-80 mt-5 bg-blue-300 text-white p-10 rounded-3xl box-shadow2">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  style={{ width: "100px" }}
                  className="block mx-auto"
                />
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontSize: "16px",
                  }}
                >
                  {slide.description}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Customer;
