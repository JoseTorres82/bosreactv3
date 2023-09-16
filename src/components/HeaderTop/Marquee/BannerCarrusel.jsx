import React from "react";
import Marquee from "react-fast-marquee";
import { TfiTruck } from "react-icons/tfi";

function BannerCarrusel() {
  return (
    <Marquee>
    <div className="container">
    <TfiTruck /> <p style={{color:"white"}} typeof="left" speed="20px" display="flex" overflow="hidden" ><b> ENVÍO GRATIS</b>  en compras superiores a $24900 <span>•</span> PAGA EN CUOTAS  con Visa, Master y Amex a través de MercadoPago. <span>•</span>  </p>
    </div>
    </Marquee>
    
    
    );

};
    export default BannerCarrusel
