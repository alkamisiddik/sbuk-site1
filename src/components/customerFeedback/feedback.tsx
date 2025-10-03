import Image from "next/image"

export default function Feedback() {
    const services = [
        {
            feedback: "I signed up in minutes, and now I can manage everything from my phone. No hidden fees, no stress—just pure convenience!",
            image: "/images/customer1.png",
            name: "Aulia Morgan.",
            title: "Officer",
        },
        {
            feedback: "As someone new to digital banking, I love how simple and transparent the services are. Plus, the rewards are a great bonus!",
            image: "/images/customer2.png",
            name: "Daniel K",
            title: "Small Business Owner",
        },
        {
            feedback: "From quick money transfers to round-the-clock support, this bank has everything I need. I feel safe and in control.",
            image: "/images/customer3.png",
            name: "Carlos H",
            title: "Travel Blogger",
        },
    ]

    return (
        <div className="w-full max-w-[1680px] ml-30 mr-30 mt-28">
            <h2 className="text-5xl font-medium text-center mb-20 uppercase">What our customers are saying</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#E9ECF5] rounded-[20px] p-8 flex flex-col">
                        {/* Quote marks icon */}
                        <div className="mb-6">
                            <svg
                                width="60"
                                height="48"
                                viewBox="0 0 60 48"
                                fill="none"
                                className="text-[#99A7D1]"
                            >
                                <path
                                    d="M27.429 30.063V16.797L40.162 0H47.003L39.655 14.497L46.116 15.032V30.063H27.429ZM0 30.063V16.797L12.796 0H19.637L12.289 14.497L18.687 15.032V30.063H0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        {/* Subtitle */}
                        <p className="text-sm text-gray-600 mb-8">{service.feedback}</p>

                        {/* Divider */}
                        <div className="border-t border-[#D1D3D8] mb-8" />

                        {/* Profile section */}
                        <div className="flex items-center gap-4 mt-auto">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">{service.name}</p>
                                <p className="text-xs text-gray-500">{service.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
