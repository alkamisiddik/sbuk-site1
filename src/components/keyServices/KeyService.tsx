'use client';
import React, { useState } from 'react'
import ExpandableCard from './ExpandableCard';

const cards = [
    { id: 1, title: "Card One", image: "/images/keyService1.jpg", details: "This is card one’s details." },
    { id: 2, title: "Card Two", image: "/images/keyService2.jpg", details: "This is card two’s details." },
    { id: 3, title: "Card Three", image: "/images/keyService3.jpg", details: "This is card three’s details." },
    { id: 4, title: "Card Four", image: "/images/keyService4.jpg", details: "This is card four’s details." },
]

const KeyServices = () => {
    const [active, setActive] = useState<number | null>(null)
    return (
        <div className='relative w-full h-screen max-w-7/8 mx-auto mt-20'>
            <div className="flex justify-between">
                <div className='font-[700] text-[48px] leading-[132%]'>Key Services</div>
                <div className='w-1/3 text-justify font-[400] text-[16px]'>At Sikapuduo Bank, we're redefining the way you bank. With cutting-edge technology, innovative solutions, and a customer-centric approach, we're transforming the banking experience for the modern world.</div>
            </div>
            <div className="flex w-full gap-6 mx-auto mt-12">
                {cards.map((card) => (
                    <ExpandableCard
                        key={card.id}
                        {...card}
                        active={active}
                        setActive={setActive}
                    />
                ))}
            </div>
        </div>
    )
}

export default KeyServices