import { Youtube, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    const keyServices = [
        "Trade & Project Financing",
        "Export Development",
        "Guarantees",
        "Trade Information & Advisory",
    ];

    const aboutUs = [
        "Vision & Mission",
        "Our Strategy",
        "Organizational Structure",
        "Board of Directors",
        "Management Team",
        "Corporate Governance",
    ];

    const media = [
        "News",
        "Events (Upcoming and Past)",
        "Press Releases",
        "Insights",
    ];

    const career = [
        "Job Vacancies",
        "Internship Opportunities",
        "Employee Value Proposition",
    ];

    const socialLinks = [
        { icon: Youtube, href: "#", label: "YouTube" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ];

    return (
        <footer className="bg-[#0E1B41] primary-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="text-[hsl(var(--footer-accent))] font-bold text-2xl">
                                <img src='/images/logo.png' alt="logo" />
                            </div>
                            <div>
                                <div className="text-xs">SONALI BANGLADESH (UK) LIMITED</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                        </p>
                    </div>

                    {/* Key Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Key Services</h3>
                        <ul className="space-y-2">
                            {keyServices.map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-gray-300 hover:text-[hsl(var(--footer-accent))] transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">About Us</h3>
                        <ul className="space-y-2">
                            {aboutUs.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-gray-300 hover:text-[hsl(var(--footer-accent))] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Media */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Media</h3>
                        <ul className="space-y-2">
                            {media.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-gray-300 hover:text-[hsl(var(--footer-accent))] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Career */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Career</h3>
                        <ul className="space-y-2">
                            {career.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-gray-300 hover:text-[hsl(var(--footer-accent))] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-300">
                        © 2025 Sonali Bangladesh (UK) Limited. All Right Reserved
                    </p>
                    <div className="flex gap-3">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="w-11 h-11 rounded-full bg-[#E3A91F] flex items-center justify-center hover:bg-[#E3A91F]/90 transition-colors"
                            >
                                <social.icon fill="text-primary-900" strokeWidth={0} className="w-5 h-5 text-primary-900" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-30">
                <div className="flex justify-around items-end h-full">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="relative w-24 h-24">
                            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-secondary-500"
                                style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }} />
                            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-secondary-500"
                                style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
