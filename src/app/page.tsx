'use client'
import Script from "next/script";
import { useState } from "react";
import CalificationFormDirect from "./components/CalificationFormDirect";

export default function Home() {

  return (
    <div>
      <header className="bg-[#005e05]">
        <div className="cf-container">
          <h3
            className="text-center text-white text-[18px] py-3 font-bold leading-[115%]"
          >
            SOLO PARA NEGOCIOS DE MATES
          </h3>
        </div>
      </header>
      <section className="pt-8 md:pt-14 pb-[60px] md:pb-[80px]">
        <div className="cf-container">
          <h1 className="text-center text-[24px] md:text-[32px] font-bold leading-[120%]">
            {/* POR ESTA RAZON ESTAS PERDIENDO VENTAS TODOS LOS DIAS EN TU NEGOCIO DE MATES */}
            SI SEGUIS ESTA ESTRUCTURA ESTAS JUGANDO A PERDER
          </h1>
          <section className="relative">
            <div
              className="border-4 overflow-clip rounded-[12px] md:rounded-[16px] border-[#005e05] mt-8 max-w-[750px] mx-auto"
            >
              <div className="p-2 text-center text-white font-bold bg-[#005e05]">
                CLIC PARA ACTIVAR EL SONIDO
              </div>
              <div
                className="bg-gray-300 aspect-video rounded-br-[8px] md:rounded-br-[12px] rounded-bl-[8px] md:rounded-bl-[12px]"
              >
                <iframe src="https://fast.wistia.net/embed/iframe/5dda5azh1k?web_component=true&seo=true" title="2025-08-02 17-06-03 Video" allow="autoplay; fullscreen" scrolling="no" className="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe>
                <script src="https://fast.wistia.net/player.js" async></script>
              </div>
            </div>
            <p className="mt-4 text-center max-w-[700px] mx-auto">
              <strong>Unite al club #1 en sistemas de ventas para negocios de mates:</strong> programamos, automatizamos y aplicamos estrategias internacionales para que tu marca crezca sin gastos innecesarios.
            </p>
            <div className="bg-[#005e05] size-[350px] md:size-[700px] top-0 md:-top-[100px] blur-[100px] opacity-[70%] rounded-full absolute left-[calc(50%-175px)] md:left-[calc(50%-350px)] -z-50"></div>
          </section>
          <div className="calendly-inline-widget w-full mt-8 
          h-full min-h-[800px] bg-white" style={{ minWidth: "320px", height: "800px" }} data-url="https://calendly.com/tomascostapp/club-ceibo?hide_gdpr_banner=1&primary_color=005e05"></div>
          <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>          
        </div>
      </section>
    </div>
  );
}
