import Head from "next/head";
import Navbar from "./components/Navbar";
import Home_Page from "./components/Home_Page";
import Service from "./components/Service";
import Customer from "./components/Customer";
import Doctors from "./components/Doctors";
import ContactTeam from "./components/ContactTeam";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta
          name="Health Care Service"
          content="Health Care Service Website"
        />
        <link rel="icon" type="image/x-icon" href="/icon.png" />
      </Head>
      <Navbar />
      <Home_Page />
      <Service />
      <Customer />
      <Doctors />
      <ContactTeam />
      <Footer />
    </div>
  );
}
