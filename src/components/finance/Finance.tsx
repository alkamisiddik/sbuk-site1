import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FinanceCard from "./FinanceCard"

const projects = [
  {
    title: "Individuals",
    subtitle: "The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank",
    hoverPara: "Welcome to Pinnacle Bank, where your financial security is our top priority! We leverage the latest technology to ensure your transactions are safe and secure. Our dedication to transparency and open communication fosters trust, making us the ideal partner for all your banking needs. Join us and discover a banking experience that puts you first, with a strong focus on your financial well-being. Here keeping your money safe is our top priority! We use the latest tech to make sure your transactions are secure. We believe in being open and honest, which helps us build trust with you. Come join us for a banking experience that puts you first and focuses on your financial well-being!",
    image: "/images/finance1.jpg",
  },
  {
    title: "Startups",
    subtitle: "The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank",
    hoverPara: "Welcome to Pinnacle Bank, where your financial security is our top priority! We leverage the latest technology to ensure your transactions are safe and secure. Our dedication to transparency and open communication fosters trust, making us the ideal partner for all your banking needs. Join us and discover a banking experience that puts you first, with a strong focus on your financial well-being. Here keeping your money safe is our top priority! We use the latest tech to make sure your transactions are secure. We believe in being open and honest, which helps us build trust with you. Come join us for a banking experience that puts you first and focuses on your financial well-being!",
    image: "/images/finance2.jpg",
  },
  {
    title: "Enterprises",
    subtitle: "The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank",
    hoverPara: "Welcome to Pinnacle Bank, where your financial security is our top priority! We leverage the latest technology to ensure your transactions are safe and secure. Our dedication to transparency and open communication fosters trust, making us the ideal partner for all your banking needs. Join us and discover a banking experience that puts you first, with a strong focus on your financial well-being. Here keeping your money safe is our top priority! We use the latest tech to make sure your transactions are secure. We believe in being open and honest, which helps us build trust with you. Come join us for a banking experience that puts you first and focuses on your financial well-being!",
    image: "/images/finance3.jpg",
  },
]

export default function Finance() {
  return (
    <div className="w-full global-px pt-28">
      <div className="max-h-[910px] w-full bg-primary-500 rounded-[20px] p-4 md:pl-[46px] md:pr-16 pt-10 md:pt-[65.61px]">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-[77px]">
          <div className="w-full md:w-[752px] md:py-[13px]">
            <h1 className="font-family-helvetica text-white text-2xl md:text-5xl font-medium leading-[124%]">It has never been easier to manage your finances</h1>
          </div>
          <div className="w-full md:w-[510px]">
            <p className="text-title1-regular leading-[160%] text-white font-family-helvetica">The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank</p>
            <Button className="h-13 w-[147px] bg-secondary-500 text-white rounded-xs gap-2 mt-4 px-6 py-3 text-base font-medium hover:bg-[#AB782B29] hover:border hover:border-secondary-500 hover:text-secondary-500 group group">
              Get Started
              <ArrowUpRight className="w-6 h-6 group-hover:hidden" />
              <ArrowRight className="w-6 h-6 hidden group-hover:inline" />
            </Button>
          </div>
        </header>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FinanceCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
