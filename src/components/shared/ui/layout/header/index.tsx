"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu"

export function SbukHeader() {
    return (
        <header className="w-full bg-primary text-white sticky top-0 z-10">
            <div className="mx-auto flex h-[75px] items-center justify-between px-4 lg:px-8 max-w-9/10">
                {/* Left side */}
                <Link href="/" className="flex items-center gap-3">
                    <img src="/images/logo.png" alt="logo" className="h-[42px] w-auto pb-[6px]" />
                    <div className="hidden sm:block border-l border-gray-400 h-3 opacity-60 mt-4"></div>
                    <span className="hidden sm:block text-[12px] font-medium leading-none mt-[16px]">
                        SONALI BANGLADESH (UK) LIMITED
                    </span>
                </Link>

                {/* Right side */}
                <div className="flex items-center">
                    {/* Desktop nav */}
                    <NavigationMenu viewport={false} className="hidden md:flex">
                        <NavigationMenuList className="md:gap-x-4">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Products & Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-3 gap-20 p-6">
                                        {/* Column 1 */}
                                        <li className="space-y-6">
                                            <h2 className="text-2xl font-semibold">Who We Serve</h2>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-6">
                                                <li className="cursor-pointer">Large Corporates</li>
                                                <li className="cursor-pointer">Governments</li>
                                                <li className="cursor-pointer">Financial Institutions</li>
                                                <li className="cursor-pointer">Other Clients</li>
                                            </ul>
                                        </li>

                                        {/* Column 2 */}
                                        <li className="space-y-6">
                                            <h2 className="text-2xl font-semibold">Key Services</h2>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-6">
                                                <li className="cursor-pointer">Trade & Project Financing</li>
                                                <li className="cursor-pointer">Export Development</li>
                                                <li className="cursor-pointer">Guarantees</li>
                                                <li className="cursor-pointer">Trade Information & Advisory</li>
                                            </ul>
                                        </li>

                                        {/* Column 3 */}
                                        <li className="space-y-6">
                                            <h2 className="text-2xl font-semibold">Additional Services</h2>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-6">
                                                <li className="cursor-pointer">Supply Chain Financing Programs</li>
                                                <li className="cursor-pointer">SME Financing Program</li>
                                                <li className="cursor-pointer">Credit Insurance Offerings</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>


                            <div className="h-6 w-px bg-gray-300 opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Knowledge & Research</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-3 gap-20 p-6">
                                        <li className="space-y-6">
                                            <h1 className="text-2xl font-semibold">Knowledge & Research</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-6">
                                                <li className="cursor-pointer">Research & Statistics</li>
                                                <li className="cursor-pointer">Trade Policy and Market Access</li>
                                                <li className="cursor-pointer">Trade Intelligence Solutions</li>
                                                <li className="cursor-pointer">Publications (Journals, Papers, Newsletters)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <div className="h-6 w-px bg-gray-300 opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-3 gap-20 p-6">
                                        <li className="space-y-6">
                                            <h1 className="text-2xl font-semibold">About Us</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-6">
                                                <li className="cursor-pointer">Vission & Mission</li>
                                                <li className="cursor-pointer">Our Strategy</li>
                                                <li className="cursor-pointer">Organizational Structure</li>
                                                <li className="cursor-pointer">Board of Directors</li>
                                                <li className="cursor-pointer">Management Team</li>
                                                <li className="cursor-pointer">Corporate Governance</li>
                                                <li className="cursor-pointer">Contact Us</li>
                                                <li className="cursor-pointer"></li>
                                            </ul>
                                        </li>
                                        <li className="space-y-6">
                                            <h1 className="text-2xl font-semibold">Career</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-6">
                                                <li className="cursor-pointer">Job Vacancies</li>
                                                <li className="cursor-pointer">Internship Opportunities</li>
                                                <li className="cursor-pointer">Employee Value Proposition</li>
                                                <li className="cursor-pointer">Board Of Directors</li>
                                                <li className="cursor-pointer">Management Team</li>
                                                <li className="cursor-pointer">Corporate Governance</li>
                                            </ul>
                                        </li>
                                        <li className="space-y-6">
                                            <h1 className="text-2xl font-semibold">News</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-6">
                                                <li className="cursor-pointer">Events (Upcoming and Past)</li>
                                                <li className="cursor-pointer">Press Releases</li>
                                                <li className="cursor-pointer">Insights</li>
                                                <li className="cursor-pointer">Management Team</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <div className="h-6 w-px bg-gray-300 opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Investors</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-3 gap-20 p-6">
                                        <li className="space-y-6">
                                            <h1 className="text-2xl font-semibold">Investors</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-6">
                                                <li className="cursor-pointer">Financial Information</li>
                                                <li className="cursor-pointer">Credit Ratings Reports</li>
                                                <li className="cursor-pointer">FAQs</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile menu button */}
                    <button className="md:hidden rounded hover:bg-gray-700">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header >
    )
}