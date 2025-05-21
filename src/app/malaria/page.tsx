"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "./style.css";
import Image from "next/image";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="service-main">
        <div className="service-main-overlay"></div>
        <div className="service-main-content">
          <h2 className="text-6xl font-bold">MALARIA</h2>
        </div>
      </div>

      <div className="mt-5 block mx-auto w-3/4">
        <Image
          src="/images/malaria.jpg"
          className="w-fit rounded-lg float-start lg:mx-3 md:mx-3"
          alt="diagnose"
          width={300}
          height={300}
        />
        <h1 className="text-3xl font-bold text-blue-600">
          Let’s Talk About Malaria: What You Should Know
        </h1>
        <p>
          Hey there! Let’s have a quick chat about something important—malaria.
          It’s something many of us are familiar with, especially if we live in
          tropical areas. But how much do we really know about it?
        </p>
        <h3 className="text-2xl">💬 So, What Actually Causes Malaria?</h3>
        <p>
          Malaria is caused by parasites <i>(called Plasmodium)</i> that are
          passed to humans through the bite of infected{" "}
          <b>female Anopheles mosquitoes</b>. Once the parasite enters your
          body, it heads to your liver, multiplies, and then attacks your red
          blood cells. That’s when the real trouble starts.
        </p>
        <h3 className="text-2xl">🤒 How Do I Know If It’s Malaria?</h3>
        <ul>
          Some common signs to watch out for include:
          <li className="list-disc">High fever</li>
          <li className="list-disc">Chills and sweating</li>
          <li className="list-disc">Headache</li>
          <li className="list-disc">Tiredness or weakness</li>
          <li className="list-disc">Nausea or vomiting</li>
        </ul>
        <p>
          If you notice any of these, especially after a mosquito bite, don’t
          wait—get tested quickly.
        </p>
        <h3 className="text-2xl">🛡️ How Can I Protect Myself?</h3>
        <ul>
          Good question! Here are some simple but effective tips:
          <li className="list-disc">
            Sleep under a mosquito net (especially one treated with
            insecticide).
          </li>
          <li className="list-disc">Use mosquito repellent on your skin.</li>
          <li className="list-disc">Wear long clothes in the evenings.</li>
          <li className="list-disc">
            Keep your environment clean—don’t let water collect in containers or
            gutters.
          </li>
          <li className="list-disc">
            If you're traveling to a malaria zone, take preventive medicine if
            advised.
          </li>
        </ul>

        <h3 className="text-2xl">💡 Any Final Advice?</h3>
        <p>
          Yes—don’t ignore symptoms. Malaria can get serious fast. Early
          detection and treatment can save lives. And always help spread
          awareness in your home, school, or community. <br /> Stay safe and
          take care! 🦟💪
        </p>

        <h3 className="text-2xl">🦟 Malaria Quick Self-Check Quiz</h3>
        <ul>
          Answer Yes or No:
          <li className="list-disc">
            Have you had a fever, chills, or sweating in the past few days?
          </li>
          <li className="list-disc">
            Are you feeling very weak or tired without doing much?
          </li>
          <li className="list-disc">
            Have you had headaches, body pains, or joint aches lately?
          </li>
          <li className="list-disc">
            Have you recently been bitten by mosquitoes, especially at night?
          </li>
          <li className="list-disc">
            Are you sleeping without a mosquito net or repellent?
          </li>
          <li className="list-disc">
            Do you live in or recently travel to a malaria-prone area?
          </li>
          <li className="list-disc">
            Have you experienced nausea, vomiting, or diarrhea recently?
          </li>
        </ul>

        <h3 className="text-2xl">💡 What Your Answers Mean:</h3>
        <ul>
          <li className="list-disc">
            <b>Yes to 3 or more?</b>: <br /> You could be showing signs of
            malaria. It’s best to get tested immediately.
          </li>
          <li className="list-disc">
            <b>Yes to 1 or 2?:</b> <br /> Monitor your symptoms and take
            preventive steps (nets, repellents, hygiene).
          </li>
          <li className="list-disc">
            <b> All No? Great!:</b> <br /> But still stay protected—use nets,
            avoid stagnant water, and keep checking.
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default page;
