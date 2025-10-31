"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/shadcn-ui/navigation-menu"
import Image from "next/image";
import { HeaderProps } from "@/library/types";

export function SbukHeader({ headerData }: HeaderProps) {
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
                    <Image
                        src={headerData.site.siteLogo}
                        alt={headerData.site.logoAlt}
                        width={96.48}
                        height={45.22}
                        className="object-contain"
                        priority
                    />
                    <span className="hidden font-family-helvetica sm:block text-[8.08px] leading-[160%] uppercase">
                        {headerData.site.siteTitle}
                    </span>
                </Link>

                {/* Right side */}
                <div className="flex items-center py-[17px]">
                    {/* Desktop nav */}
                    <NavigationMenu viewport={false} className="hidden lg:flex">
                        <NavigationMenuList className="lg:gap-x-2 xl:gap-x-4 2xl:gap-x-8">
                            {headerData.menuItems.map((items, index) => (
                                <React.Fragment key={index}>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>{items.title}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12 2xl:gap-20 py-10 px-12 w-[90vw] xl:w-auto max-w-full font-family-helvetica">
                                                {items.contents.map((content, index) => (
                                                    <li key={index} className="space-y-4 xl:space-y-6">
                                                        <h4 className="text-[22px] leading-[120%] font-semibold">{content.contentTitle}</h4>
                                                        <div className="h-px bg-amber-500 opacity-50" />
                                                        <ul className="space-y-3 xl:space-y-4 2xl:space-y-6">
                                                            {content.contentItems.map((contentItem, index) => (
                                                                <li key={index} className="cursor-pointer text-sm xl:text-base">{contentItem.name}</li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    {index !== headerData.menuItems.length - 1 && (
                                        <div className="h-[26px] w-px bg-white opacity-40" />
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
                <div className="lg:hidden bg-primary-500 border-t border-white/20 z-999">
                    <nav className="global-px py-4 space-y-4 max-h-[calc(100vh-var(--header-Height))] overflow-y-auto">
                        {headerData.menuItems.map((item, index) => (
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