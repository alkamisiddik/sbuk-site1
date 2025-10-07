import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { AnimatedQuote } from './Quote';

interface LinkItem {
    label: string;
    href: string;
    iconOffset?: string;
}

interface LinkSection {
    title: string;
    items: LinkItem[];
}

const sections: LinkSection[] = [
    {
        title: "WHO WE SERVE",
        items: [
            { label: "Large Corporates", href: "/" },
            { label: "Governments", href: "/" },
            { label: "Financial Institutions", href: "/" },
            { label: "Other Clients", href: "/" },
        ],
    },
    {
        title: "ADDITIONAL SERVICES",
        items: [
            {
                label: "Supply Chain Financing Solutions",
                href: "/",
                iconOffset: "mr-[-93px]",
            },
            { label: "SME Financing Programs", href: "/", iconOffset: "mr-[-34px]" },
            {
                label: "Credit Insurance Offerings",
                href: "/",
                iconOffset: "mr-[-40px]",
            },
        ],
    },
    {
        title: "INVESTORS",
        items: [
            { label: "Financial Information", href: "/", iconOffset: "mr-[-2px]" },
            {
                label: "Credit Ratings Reports",
                href: "/credit-ratings-reports",
                iconOffset: "mr-[-15px]",
            },
            { label: "FAQs", href: "/" },
        ],
    },
    {
        title: "KNOWLEDGE & RESEARCH",
        items: [
            { label: "Research & Statistics", href: "/", iconOffset: "mr-[-5px]" },
            {
                label: "Trade Policy and Market Access",
                href: "/",
                iconOffset: "mr-[-82px]",
            },
            {
                label: "Trade Intelligence Solutions",
                href: "/",
                iconOffset: "mr-[-49px]",
            },
            {
                label: "Publications (Journals, Papers, Newsletters)",
                href: "/",
                iconOffset: "mr-[-167px]",
            },
        ],
    },
];

const ServiceList = () => {
    return (
        <section className="flex flex-col w-full items-start justify-center global-px pt-28 bg-white">
            <div className="flex flex-col items-center gap-2.5 w-full">
                <div className="flex flex-wrap justify-between w-full gap-">
                    {sections.map((section) => (
                        <nav
                            key={section.title}
                            aria-labelledby={section.title.replace(/\s+/g, "-").toLowerCase()}
                            className="flex flex-col items-start gap-6 px-6 py-8 flex-1 bg-white rounded-2xl overflow-hidden"
                        >
                            <h2
                                id={section.title.replace(/\s+/g, "-").toLowerCase()}
                                className="text-[22px] font-semibold leading-[120%] uppercase text-neutral-900 font-family-helvetica"
                            >
                                {section.title}
                            </h2>
                            <ul className="flex flex-col items-start gap-6 w-full">
                                {section.items.map((item) => (
                                    <li key={item.label} className="flex items-center">
                                        <Link
                                            href={item.href}
                                            className="group inline-flex items-center gap-4 text-base text-black font-medium hover:underline hover:underline-offset-8 hover:text-secondary-500 hover:-translate-y-[2px] transition-all duration-100"
                                        >
                                            <span className="opacity-70 group-hover:opacity-100 font-family-helvetica font-normal text-md leading-[160%]">{item.label}</span>
                                            <ArrowUpRight className="translate-x-[-4px] transition-all duration-100 group-hover:translate-x-0 text-primary-500 group-hover:text-secondary-500" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </div>

            <div className="mt-28 h-[570px] w-full pt-[22px] pl-[99px]">
                <AnimatedQuote
                    imageSrc="/images/sbuk_md.jpg"
                    imageAlt="Portrait"
                />
            </div>
        </section>
    )
}

export default ServiceList