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

const menuItems = [
    {
        title: "Products & Services",
        contents: [
            {
                contentTitle: 'Who We Serve',
                contentItems: [
                    { name: 'Large Corporates', href: '' },
                    { name: 'Governments', href: '' },
                    { name: 'Financial Institutions', href: '' },
                    { name: 'Other Clients', href: '' },
                ]
            }, {
                contentTitle: 'Key Services',
                contentItems: [
                    { name: 'Trade & Project Financing', href: '' },
                    { name: 'Export Development', href: '' },
                    { name: 'Guarantees', href: '' },
                    { name: 'Trade Information & Advisory', href: '' },
                ]
            }, {
                contentTitle: 'Additional Services',
                contentItems: [
                    { name: 'Supply Chain Financing Programs', href: '' },
                    { name: 'SME Financing Program', href: '' },
                    { name: 'Guarantees', href: '' },
                    { name: 'Credit Insurance Offerings', href: '' },
                ]
            }
        ]
    },
    {
        title: "Knowledge & Research",
        contents: [
            {
                contentTitle: 'Knowledge & Research',
                contentItems: [
                    { name: 'Research & Statistics', href: '' },
                    { name: 'Trade Policy and Market Access', href: '' },
                    { name: 'Trade Intelligence Solutions', href: '' },
                    { name: 'Publications (Journals, Papers, Newsletters)', href: '' },
                ]
            }
        ]
    },
    {
        title: "Company",
        contents: [
            {
                contentTitle: 'About Us',
                contentItems: [
                    { name: 'Vission & Mission', href: '' },
                    { name: 'Our Strategy', href: '' },
                    { name: 'Organizational Structure', href: '' },
                    { name: 'Board of Directors', href: '' },
                    { name: 'Management Team', href: '' },
                    { name: 'Corporate Governance', href: '' },
                    { name: 'Contact Us', href: '' },
                ]
            },
            {
                contentTitle: 'Career',
                contentItems: [
                    { name: 'Job Vacancies', href: '' },
                    { name: 'Internship Opportunities', href: '' },
                    { name: 'Employee Value Proposition', href: '' },
                    { name: 'Board Of Directors', href: '' },
                    { name: 'Management Team', href: '' },
                    { name: 'Corporate Governance', href: '' },
                ]
            },
            {
                contentTitle: 'News',
                contentItems: [
                    { name: 'Events (Upcoming and Past)', href: '' },
                    { name: 'Press Releases', href: '' },
                    { name: 'Insights', href: '' },
                    { name: 'Management Team', href: '' },
                ]
            }
        ]
    },
    {
        title: "Investors",
        contents: [
            {
                contentTitle: 'Investors',
                contentItems: [
                    { name: 'Financial Information', href: '' },
                    { name: 'Credit Ratings Reports', href: '' },
                    { name: 'FAQs', href: '' },
                ]
            }
        ]
    },
];

export function SbukHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [openMobileItem, setOpenMobileItem] = React.useState<number | null>(null)

    const toggleMobileItem = (index: number) => {
        setOpenMobileItem(openMobileItem === index ? null : index)
    }

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
                            {menuItems.map((items, index) => (
                                <React.Fragment key={index}>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>{items.title}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12 2xl:gap-20 py-10 px-12 w-[90vw] xl:w-auto max-w-full">
                                                {items.contents.map((content) => (
                                                    <li className="space-y-4 xl:space-y-6">
                                                        <h2 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">{content.contentTitle}</h2>
                                                        <div className="h-px bg-amber-500 opacity-50" />
                                                        <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                            {content.contentItems.map((contentItem) => (
                                                                <li className="cursor-pointer text-sm xl:text-base">{contentItem.name}</li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    {index !== menuItems.length - 1 && (
                                        <div className="h-[26px] w-px bg-white opacity-50" />
                                    )}
                                </React.Fragment>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200 active:scale-95"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`h-6 w-6 text-white transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "rotate-90 scale-90 opacity-80" : "rotate-0 scale-100 opacity-100"
                                }`}
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
                        {menuItems.map((item, index) => (
                            <div key={index} className="border-b border-white/10 last:border-b-0">
                                <button
                                    onClick={() => toggleMobileItem(index)}
                                    className="w-full cursor-pointer py-2 font-medium flex justify-between items-center text-left"
                                >
                                    {item.title}
                                    <svg
                                        className={`w-4 h-4 transition-transform ${openMobileItem === index ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openMobileItem === index && (
                                    <div className="pl-4 pb-4 pt-2 space-y-4 text-sm">
                                        {item.contents.map((content, contentIndex) => (
                                            <div key={contentIndex}>
                                                <h1 className="font-semibold text-xl mb-3">{content.contentTitle}</h1>
                                                <ul className="space-y-2 text-white/80">
                                                    {content.contentItems.map((contentItem, itemIndex) => (
                                                        <li key={itemIndex} className="cursor-pointer hover:text-white transition-colors">
                                                            {contentItem.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header >
    )
}