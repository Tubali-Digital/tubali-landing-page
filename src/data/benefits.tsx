import { FiBarChart2, FiTarget, FiTrendingUp, } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Our Services",
        description: "We offer a range of services designed to help you achieve your financial goals. Our platform is user-friendly and secure, making it easy for you to manage your finances.",
        bullets: [
            {
                title: "Flexible Savings",
                description: "Members can save in multiple currencies(Naira, USD, USDT, and Gold) with competitive returns and easy access to funds.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Investment Opportunities",
                description: "We provide profitable and secure investment plans tailored to members' financial goals, ensuring wealth growth over time.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Business & Financial Education",
                description: "We offer financial literacy programs to educate members on smart money management, business growth, and wealth - building strategies.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Profit - Sharing & Rewards",
                description: "Members benefit from a transparent profit - sharing model, where a portion of earnings is distributed among contributors.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Quick & Secure Withdrawals",
                description: "Members can withdraw funds seamlessly through our digital platform with reliable customer support.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/tubali-ui-p2.jpg"
    },
]