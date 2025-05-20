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
          <h2 className="text-6xl font-bold">HYPERTENSION</h2>
        </div>
      </div>

      <div className="mt-5 block mx-auto w-3/4">
        <Image
          src="/images/highBP.jpg"
          className="w-fit rounded-lg float-start lg:mx-3 md:mx-3"
          alt="diagnose"
          width={300}
          height={300}
        />
        <h1 className="text-3xl font-bold text-blue-600">
          Let’s Talk: High Blood Pressure – The Silent Danger
        </h1>
        <p>
          Hey friends, Have you ever heard someone say, “My BP is high”? It’s
          more common than we think. High blood pressure—also called
          <b>hypertension</b>—is one of those health issues that doesn’t always
          show clear signs, yet it can quietly damage your body over time.
        </p>
        <h3 className="text-2xl">
          💢 So, What Exactly Is High Blood Pressure?
        </h3>
        <p>
          Your blood pressure is the force of your blood pushing against the
          walls of your arteries. When it stays too high for too long, it
          becomes a problem. It puts extra stress on your heart and can lead to
          serious issues like <b>stroke</b>, <b>heart attack</b>, or{" "}
          <b>kidney failure</b>.
        </p>
        <p>
          {" "}
          It’s often called a <b>“silent killer”</b> because many people don’t
          even know they have it until something serious happens.
        </p>
        <h3 className="text-2xl">🩺 Common Causes</h3>
        <ul>
          <li className="list-disc">Eating too much salt or fatty food</li>
          <li className="list-disc">Lack of exercise</li>
          <li className="list-disc">Obesity or being overweight</li>
          <li className="list-disc">Smoking or drinking too much alcohol</li>
          <li className="list-disc">Stress</li>
          <li className="list-disc">
            Family history (genetics also play a role)
          </li>
        </ul>

        <h3 className="text-2xl">🛡️ How to Prevent or Manage It</h3>
        <ul>
          Good news is, you can prevent or control high blood pressure with
          simple lifestyle changes:
          <li className="list-disc">Eat more fruits and vegetables</li>
          <li className="list-disc">Reduce salt and processed foods</li>
          <li className="list-disc">
            Stay physically active (even a 30-minute walk daily helps)
          </li>
          <li className="list-disc">Maintain a healthy weight</li>
          <li className="list-disc">Avoid smoking and limit alcohol</li>
          <li className="list-disc">
            Learn to relax—stress management matters!
          </li>
        </ul>

        <h3 className="text-2xl">👂 Final Word</h3>
        <p>
          Please, don’t wait until there’s a problem. Check your blood pressure
          regularly, especially if you're over 30 or have a family history of
          hypertension. It’s quick, it’s easy, and it could save your life.
          <br />
          Let’s take care of our hearts—one healthy step at a time. ❤️
        </p>

        <h3 className="text-2xl">🎯 Quick Self-Check Quiz (For Readers)</h3>
        <ul>
          Answer Yes or No:
          <li className="list-disc">Do you often feel tired or dizzy?</li>
          <li className="list disc">
            Do you get headaches or blurred vision sometimes?
          </li>
          <li className="list-disc">Do you add a lot of salt to your meals?</li>
          <li className="list-disc">
            Do you exercise less than 3 times a week?
          </li>
          <li className="list-disc">
            Do you have family members with high BP?
          </li>
        </ul>
        <p>
          👉 If you answered “Yes” to 3 or more, it’s time to check your BP and
          talk to a doctor.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default page;
