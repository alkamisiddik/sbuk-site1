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
import { Separator } from "@radix-ui/react-dropdown-menu"

export function SbukHeader() {
    return (
        <header className="w-full border-b bg-primary text-white sticky top-0">
            <div className="mx-auto flex h-[74px] items-center justify-between px-4 lg:px-8 max-w-9/10">
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
                                    <ul className="grid grid-cols-3">
                                        <li className="row-span-3 p-8">
                                            <h1 className="p-3">Who We Serve</h1>
                                            <hr />
                                            <div className="p-3">Large Corporates</div>
                                            <div className="p-3">Governments</div>
                                            <div className="p-3">Financial Institutions</div>
                                            <div className="p-3">Other Clients</div>
                                        </li>
                                        <li className="row-span-3">
                                            <div>Key Services</div>
                                            <div>Trade & Project Finacing</div>
                                            <div>Export Development</div>
                                            <div>Guarantees</div>
                                            <div>Trade Information & Advisory</div>
                                        </li>
                                        <li className="row-span-3">
                                            <div>Additional Services</div>
                                            <div>Supply Chain Financing Programs</div>
                                            <div>SME Financing Program</div>
                                            <div>Credit Insurance Offerings</div>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <div className="h-6 w-px bg-gray-300 opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Knowledge & Research</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-3 gap-4">
                                        <li>
                                            <div>Knowledge & Research</div>
                                            <div>Research & Statistics</div>
                                            <div>Trade Policy and Market Access</div>
                                            <div>Trade Intelligence Solutions</div>
                                            <div>Publications (Journals, Papers, Newsletters)</div>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <div className="h-6 w-px bg-gray-300 opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-3 gap-4">
                                        <li className="row-span-3">
                                            <div>About Us</div>
                                            <div>Vission & Mission</div>
                                            <div>Our Strategy</div>
                                            <div>Organizational Structure</div>
                                            <div>Board of Directors</div>
                                            <div>Management Team</div>
                                            <div>Corporate Governance</div>
                                            <div></div>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <div className="h-6 w-px bg-gray-300 opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Investors</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-3 gap-4">
                                        <li>
                                            <div>Who We Serve</div>
                                            <div>Large Corporates</div>
                                            <div>Governments</div>
                                            <div>Financial Institutions</div>
                                            <div>Other Clients</div>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile menu button */}
                    <button className="md:hidden p-2 rounded hover:bg-gray-700">
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