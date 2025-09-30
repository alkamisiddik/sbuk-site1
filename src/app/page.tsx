'use client';

import KeyServices from "@/components/keyServices/KeyService";
import Carousel from "@/components/home/Carousel";
import MiddleComponent from "@/components/home/MiddleComponent";

export default function Home() {


  return (
    <>
      <Carousel />
      <MiddleComponent />
      <KeyServices />
    </>
  );
}
