import Head from "next/head";
import Home from "../components/Home/Home/Home";
import Footer from "../components/Shared/Footer/Footer";
import Navigation from "../components/Shared/Navigation/Navigation";

export default function index() {
  return (
    <>
      <Head>
        <script async src="https://kit.fontawesome.com/3d423388d3.js" crossOrigin="anonymous"></script>
      </Head>
      <Navigation />
      <Home />
      <Footer />
    </>
  )
}
