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
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="w-full bg-primary-500 h-[var(--header-Height)] text-white sticky top-0 z-10">
            <div className="h-full flex items-center justify-between global-px py-[14px]">
                {/* Left side */}
                <Link href="/" className="flex flex-col gap-[3.59px]">
                    <img 
                        src="/images/logo_footer.png" 
                        alt="logo" 
                        className="h-[30px] w-[64px] sm:h-[35px] sm:w-[75px] md:h-[40px] md:w-[85px] lg:h-[45.22px] lg:w-[96.48px]" 
                    />
                    <span className="hidden sm:block text-[6px] sm:text-[7px] md:text-[8.08px] font-medium leading-[160%] uppercase">
                        SONALI BANGLADESH (UK) LIMITED
                    </span>
                </Link>

                {/* Right side */}
                <div className="flex items-center py-[17px]">
                    {/* Desktop nav */}
                    <NavigationMenu viewport={false} className="hidden lg:flex">
                        <NavigationMenuList className="lg:gap-x-4 xl:gap-x-6 2xl:gap-x-8">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-xs xl:text-sm 2xl:text-base">Products & Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12 2xl:gap-20 p-6 w-[90vw] xl:w-auto max-w-7xl">
                                        {/* Column 1 */}
                                        <li className="space-y-4 xl:space-y-6">
                                            <h2 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">Who We Serve</h2>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                <li className="cursor-pointer text-sm xl:text-base">Large Corporates</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Governments</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Financial Institutions</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Other Clients</li>
                                            </ul>
                                        </li>

                                        {/* Column 2 */}
                                        <li className="space-y-4 xl:space-y-6">
                                            <h2 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">Key Services</h2>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                <li className="cursor-pointer text-sm xl:text-base">Trade & Project Financing</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Export Development</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Guarantees</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Trade Information & Advisory</li>
                                            </ul>
                                        </li>

                                        {/* Column 3 */}
                                        <li className="space-y-4 xl:space-y-6">
                                            <h2 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">Additional Services</h2>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                <li className="cursor-pointer text-sm xl:text-base">Supply Chain Financing Programs</li>
                                                <li className="cursor-pointer text-sm xl:text-base">SME Financing Program</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Credit Insurance Offerings</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <div className="h-[26px] w-px bg-white opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-xs xl:text-sm 2xl:text-base">Knowledge & Research</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-1 gap-8 xl:gap-12 2xl:gap-20 p-6 w-[90vw] xl:w-auto max-w-7xl">
                                        <li className="space-y-4 xl:space-y-6">
                                            <h1 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">Knowledge & Research</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                <li className="cursor-pointer text-sm xl:text-base">Research & Statistics</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Trade Policy and Market Access</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Trade Intelligence Solutions</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Publications (Journals, Papers, Newsletters)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <div className="h-[26px] w-px bg-white opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-xs xl:text-sm 2xl:text-base">Company</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12 2xl:gap-20 p-6 w-[90vw] xl:w-auto max-w-7xl">
                                        <li className="space-y-4 xl:space-y-6">
                                            <h1 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">About Us</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                <li className="cursor-pointer text-sm xl:text-base">Vission & Mission</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Our Strategy</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Organizational Structure</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Board of Directors</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Management Team</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Corporate Governance</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Contact Us</li>
                                            </ul>
                                        </li>
                                        <li className="space-y-4 xl:space-y-6">
                                            <h1 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">Career</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                <li className="cursor-pointer text-sm xl:text-base">Job Vacancies</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Internship Opportunities</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Employee Value Proposition</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Board Of Directors</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Management Team</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Corporate Governance</li>
                                            </ul>
                                        </li>
                                        <li className="space-y-4 xl:space-y-6">
                                            <h1 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">News</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                <li className="cursor-pointer text-sm xl:text-base">Events (Upcoming and Past)</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Press Releases</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Insights</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Management Team</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <div className="h-[26px] w-px bg-white opacity-50" />

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-xs xl:text-sm 2xl:text-base">Investors</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-1 gap-8 xl:gap-12 2xl:gap-20 p-6 w-[90vw] xl:w-auto max-w-7xl">
                                        <li className="space-y-4 xl:space-y-6">
                                            <h1 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">Investors</h1>
                                            <div className="h-px bg-amber-500 opacity-50" />
                                            <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                <li className="cursor-pointer text-sm xl:text-base">Financial Information</li>
                                                <li className="cursor-pointer text-sm xl:text-base">Credit Ratings Reports</li>
                                                <li className="cursor-pointer text-sm xl:text-base">FAQs</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile menu button */}
                    <button 
                        className="lg:hidden p-2 rounded hover:bg-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-primary-500 border-t border-white/20">
                    <nav className="global-px py-4 space-y-4 max-h-[calc(100vh-var(--header-Height))] overflow-y-auto">
                        <details className="group">
                            <summary className="cursor-pointer py-2 font-medium list-none flex justify-between items-center">
                                Products & Services
                                <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="pl-4 pt-2 space-y-4 text-sm">
                                <div>
                                    <h3 className="font-semibold mb-2">Who We Serve</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>Large Corporates</li>
                                        <li>Governments</li>
                                        <li>Financial Institutions</li>
                                        <li>Other Clients</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Key Services</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>Trade & Project Financing</li>
                                        <li>Export Development</li>
                                        <li>Guarantees</li>
                                        <li>Trade Information & Advisory</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Additional Services</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>Supply Chain Financing Programs</li>
                                        <li>SME Financing Program</li>
                                        <li>Credit Insurance Offerings</li>
                                    </ul>
                                </div>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer py-2 font-medium list-none flex justify-between items-center">
                                Knowledge & Research
                                <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="pl-4 pt-2 space-y-2 text-sm text-white/80">
                                <div>Research & Statistics</div>
                                <div>Trade Policy and Market Access</div>
                                <div>Trade Intelligence Solutions</div>
                                <div>Publications (Journals, Papers, Newsletters)</div>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer py-2 font-medium list-none flex justify-between items-center">
                                Company
                                <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="pl-4 pt-2 space-y-4 text-sm">
                                <div>
                                    <h3 className="font-semibold mb-2">About Us</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>Vission & Mission</li>
                                        <li>Our Strategy</li>
                                        <li>Organizational Structure</li>
                                        <li>Board of Directors</li>
                                        <li>Management Team</li>
                                        <li>Corporate Governance</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Career</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>Job Vacancies</li>
                                        <li>Internship Opportunities</li>
                                        <li>Employee Value Proposition</li>
                                        <li>Board Of Directors</li>
                                        <li>Management Team</li>
                                        <li>Corporate Governance</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">News</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>Events (Upcoming and Past)</li>
                                        <li>Press Releases</li>
                                        <li>Insights</li>
                                        <li>Management Team</li>
                                    </ul>
                                </div>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer py-2 font-medium list-none flex justify-between items-center">
                                Investors
                                <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="pl-4 pt-2 space-y-2 text-sm text-white/80">
                                <div>Financial Information</div>
                                <div>Credit Ratings Reports</div>
                                <div>FAQs</div>
                            </div>
                        </details>
                    </nav>
                </div>
            )}
        </header>
    )
}