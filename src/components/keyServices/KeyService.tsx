"use client"
import { useState } from "react"
import ExpandableCard from "./ExpandableCard"

const cards = [
  {
    id: 1,
    title: "Trade & Project Financing",
    image: "/images/keyService1.jpg",
    details:
      "We specialize in assisting businesses in obtaining the necessary capital to successfully undertake large-scale trade and infrastructure projects. Our goal is to ensure that these ventures are executed with maximum efficiency and effectiveness, enabling companies to thrive in a competitive market. By leveraging our expertise and resources, we help organizations navigate the complexities of financing, allowing them to focus on their core operations and achieve their strategic objectives.",
    boxDetails: [
      {
        boxTitle: "Trade Financing",
        boxDescription: "Enabling smooth international and domestic trade.",
        listData: [
          { id: 1, text: "Letter of Credit" },
          { id: 2, text: "Bill Discounting" },
          { id: 3, text: "Export Financing" },
        ],
      },
      {
        boxTitle: "Project Financing",
        boxDescription: "Helping businesses bring big ideas to life.",
        listData: [
          { id: 1, text: "Infrastructure Projects" },
          { id: 2, text: "Public-Private Partnerships" },
          { id: 3, text: "Long-Term Financing" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Export Development",
    image: "/images/keyService2.jpg",
    details:
      "We empower businesses to expand into international markets with comprehensive export development solutions. From market research to financial support, we provide the tools, strategies, and guidance needed to make your exports successful and sustainable.",
    boxDetails: [
      {
        boxTitle: "Export Readiness & Strategy",
        boxDescription: "Laying the foundation for global success.",
        listData: [
          { id: 1, text: "Market Assessment" },
          { id: 2, text: "Business Readiness Check" },
          { id: 3, text: "Strategic Planning" },
        ],
      },
      {
        boxTitle: "Export Financing & Support",
        boxDescription: "Ensuring smooth financial operations for exporters.",
        listData: [
          { id: 1, text: "Pre-Shipment Finance" },
          { id: 2, text: "Post-Shipment Finance" },
          { id: 3, text: "Export Credit Insurance" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Guarantees",
    image: "/images/keyService3.jpg",
    details:
      "We provide a wide range of guarantee solutions designed to build trust, reduce financial risk, and ensure the smooth execution of trade and project commitments. Our guarantees serve as strong financial backing, giving businesses and their partners the confidence to move forward with security and assurance.",
    boxDetails: [
      {
        boxTitle: "Types of Guarantees",
        boxDescription: "Providing assurance for every stage of business operations.",
        listData: [
          { id: 1, text: "Performance Guarantee" },
          { id: 2, text: "Bid Bond Guarantee" },
          { id: 3, text: "Advance Payment Guarantee" },
        ],
      },
      {
        boxTitle: "Key Features",
        boxDescription: "",
        listData: [
          { id: 1, text: "Backed by trusted institutions" },
          { id: 2, text: "Flexible terms" },
          { id: 3, text: "Fast issuance" },
          { id: 4, text: "Local & international coverage" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Trade Information & Advisory",
    image: "/images/keyService4.jpg",
    details:
      "We provide businesses with expert advisory and up-to-date trade information to help them navigate complex markets, comply with regulations, and make informed decisions. Our advisory services are designed to reduce risks, identify opportunities, and support sustainable trade growth.",
    boxDetails: [
      {
        boxTitle: "Advisory Services",
        boxDescription: "Guiding businesses with reliable expertise.",
        listData: [
          { id: 1, text: "Market Research & Analysis" },
          { id: 2, text: "Regulatory Advisory" },
          { id: 3, text: "Trade Policy Updates" },
        ],
      },
      {
        boxTitle: "Trade Information Support",
        boxDescription: "Timely access to accurate trade information.",
        listData: [
          { id: 1, text: "Export & Import Data" },
          { id: 2, text: "Industry Reports" },
          { id: 3, text: "Trade Procedures Guide" },
        ],
      },
    ],
  },
]

const KeyServices = () => {
  const [active, setActive] = useState<number | null>(null)
  
  return (
    <div className="relative w-full global-px my-[68px]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl leading-[132%]">Key Services</div>
        <div className="w-full lg:w-[550px] text-justify font-normal text-sm md:text-base">
          At Sonali Bangladesh (UK) Limited, we're redefining the way you bank. With cutting-edge technology, innovative
          solutions, and a customer-centric approach, we're transforming the banking experience for the modern world.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-6 mx-auto pt-8 lg:pt-12">
        {cards.map((card) => (
          <ExpandableCard key={card.id} {...card} active={active} setActive={setActive} />
        ))}
      </div>
    </div>
  )
}

export default KeyServices
