"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export function SbukHeader() {
    return (
        <header className="w-full border-b bg-[var(--primary-500)] text-white px-22">
            <div className="container flex h-[74px] items-center justify-between px-4 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    {/* Logo */}
                    <img src="/images/logo.png" alt="logo" className="h-[42px] w-auto pb-[6px]" />

                    {/* Divider */}
                    <div className="hidden sm:block border-l border-gray-400 h-3 opacity-60 mt-4"></div>

                    {/* Company name */}
                    <span className="hidden sm:block text-[12px] font-medium leading-none mt-[16px]">
                        SONALI BANGLADESH (UK) LIMITED
                    </span>
                </Link>


                {/* Mobile menu button */}
                <button className="md:hidden p-2 rounded hover:bg-gray-700">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>


                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products & Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <div className="">Who We Serve</div>
                                        <div className="">Large Corporates</div>
                                        <div className="">Governments</div>
                                        <div className="">Financial Institutions</div>
                                        <div className="">Other Clients</div>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Knowledge & Research</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <div className="">Who We Serve</div>
                                        <div className="">Large Corporates</div>
                                        <div className="">Governments</div>
                                        <div className="">Financial Institutions</div>
                                        <div className="">Other Clients</div>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <div className="">Who We Serve</div>
                                        <div className="">Large Corporates</div>
                                        <div className="">Governments</div>
                                        <div className="">Financial Institutions</div>
                                        <div className="">Other Clients</div>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Investors</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <div className="">Who We Serve</div>
                                        <div className="">Large Corporates</div>
                                        <div className="">Governments</div>
                                        <div className="">Financial Institutions</div>
                                        <div className="">Other Clients</div>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header >
    )
}