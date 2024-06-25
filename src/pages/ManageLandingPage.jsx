import React from "react";
import Header from "../component/ManageLandingPage/Header";
import { Background } from "../component/ManageLandingPage/Background";
import BetterProducts from "../component/ManageLandingPage/BetterProducts.jsx";
import DifferentManage from "../component/ManageLandingPage/DifferentManage.jsx";
import TheySaid from "../component/ManageLandingPage/TheySaid.jsx";
import Simplify from "../component/ManageLandingPage/Simplify.jsx";
import Footer from "../component/ManageLandingPage/Footer.jsx";


const ManageLandingPage = () => {
  return (
    <div className="font-BeVietnamPro relative">
      <Background/>
      <Header/>
      <main className="flex flex-col gap-28">
        <BetterProducts/>
        <DifferentManage/>
        <TheySaid/>
        <Simplify/>
      </main>
      <Footer/>
    </div>
  )
}

export default ManageLandingPage