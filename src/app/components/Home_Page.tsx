import React from "react";
import Link from "next/link";

const Home_Page = () => {
  return (
    <div id="main1" className="m-4 bg-blue-100 p-4 text-white rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="md:ml-6 mt-9">
          <h1 className="text-4xl text-start">
            The <b>Best Medical</b> and Health Care Service for you
          </h1>
          <p className="mt-4 text-start">
            We understand the value of health and the importance of being
            healthy always. That's why we are always available to give you the
            best health care services you can ever need.
          </p>
          <Link href="/">
            <button className="btn btn-outline ml-10">Book Appointment</button>
          </Link>

          <div className="container mt-10 box-shadow1 p-6 rounded-xl grid grid-cols-3 text-center">
            <div>
              <p className="text-3xl">24/7</p>
              <small>Emergency Service</small>
            </div>
            <div>
              <p className="text-3xl">80+</p>
              <small>Specialist Doctor</small>
            </div>
            <div>
              <p className="text-3xl">100k+</p>
              <small>Happy Patient</small>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/doc.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home_Page;
