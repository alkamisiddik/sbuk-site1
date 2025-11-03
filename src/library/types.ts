// header
interface MenuLink {
    name: string
    href: string
}

interface MenuItem {
    title: string
    contents: MenuLink[]
}

interface HeaderData {
    site: {
        siteTitle: string
        siteLogo: string
        logoAlt: string
    };
    menuItems: MenuItem[]
}

export interface HeaderProps {
    headerData: HeaderData;
}

// Home / Carousel
interface Slide {
    id: number;
    src: string
    alt: string
}

export interface CarouselProps {
    slides: Slide[]
}

// Home / Middle Component
export interface MiddleComponentProps {
    middleComponent: {
        title: string
        highlight: string
        text: string
        buttonText: string
    }
}

// Key Services
interface ListData {
    id: number
    text: string
}

interface BoxDetails {
    boxTitle: string
    boxDescription: string
    listData: ListData[]
}

interface Card {
    id: number
    title: string
    image: string
    details: string
    boxDetails: BoxDetails[]
    buttonText: string
}

interface KeyServicesData {
    title: string
    text: string
    cards: Card[]
}

export interface KeyServicesProps {
    keyServices: KeyServicesData
}

export interface ExpandableCardProps extends Card {
    active: number | null;
    setActive: (id: number | null) => void;
}

// Aboout Us
interface Images {
    src: string
    alt: string
}

export interface AboutUsProps {
    title: string
    finance: {
        main: string
        highlight: string
        suffix: string
    }
    para1: string
    para2: string
    buttonText: string
    aboutUsImages: Images[]
}

// Services List
interface Items {
    label: string;
    href: string
}

interface Services {
    title: string;
    items: Items[]
}

export interface Quote {
    imgSrc: string;
    imageAlt: string;
    start: string;
    highlight: string;
    end: string;
    title: string
}

interface ServiceList {
    services: Services[]
    quote: Quote
}

export interface ServiceListProps {
    serviceList: ServiceList
}


// Finance
export interface FinanceCardPros {
    title: string
    subtitle: string
    hoverPara: string
    image: string
    buttonText: string
}

export interface FinanceProps {
    leftTitle: string
    rightText: string
    buttonText: string
    financeCards: FinanceCardPros[]
}

// Feedback
export interface FeedbackProps {
    feedback: string
    image: string
    name: string
    title: string
}

// Annouoncement 
export interface AnnouncementData {
    title: string
    announcements: Announcement[]
}

export interface Announcement {
    id: number;
    image: string
    title: string
    description: string
    hoverPara: string[]
}

// Contact
export interface ContactProps {
    videoSrc: string
    title: string
    para1: string
    boxData: BoxData[]
}

interface BoxData {
    title: string
    listData: {
        data: string
    }[]
}

// Footer
interface FooterLink {
    label: string
    href: string
}

interface FooterItem {
    title: string
    items: FooterLink[]
}

interface SocialLinks {
    instagram: string
    facebook: string
    twitter: string
    linkedin: string
}

interface FooterData {
    footerLogo: string
    logoTitle: string
    logoAlt: string
    footerText: string
    copywriteText: string
    socialLinks: SocialLinks;
    footerItems: FooterItem[]
}

export interface FooterProps {
    footerData: FooterData;
}
