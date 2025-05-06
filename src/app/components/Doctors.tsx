import React from "react";
import Image from "next/image";

const Doctors = () => {
  return (
    <div className="container w-80% block mx-auto mt-5">
      <h2 className="text-4xl font-bold border-b-4  border-b-blue-400">
        Our Certified Doctors
      </h2>
      <p className="md:w-1/2 px-8 block  float-end">
        Healthcare serves as a cornerstone of any thriving society, promoting
        individual well-being and extending life through medical care,
        preventive measures, and health awareness.
      </p>

      <div className="block w-4/5 mx-auto mt-36">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="text-center">
            <div className="bg-blue-300 p-10 rounded-3xl w-80 block mx-auto mb-4">
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
            <div className="bg-blue-300 p-10 rounded-3xl w-80 block mx-auto mb-4">
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
            <div className="bg-blue-300 p-10 rounded-3xl w-80 block mx-auto mb-4">
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
        </div>{" "}
      </div>
    </div>
  );
};

export default Doctors;
