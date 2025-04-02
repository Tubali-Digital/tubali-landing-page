import React from 'react'

const links = [
    { name: 'Services', href: '#features' },
    { name: 'join Us', href: '#join' },
    { name: 'Contact Us', href: '#join' },
]
const stats = [
    { name: 'Save in Naira, USD, USDT, and Gold.', value: 'Multi-Currency Savings' },
    { name: 'All transactions are protected with top-tier security measures.', value: ' Secure & Transparent' },
    { name: 'We provide competitive profit-sharing opportunities.', value: 'High Returns on Investments' },
    { name: 'Learn, invest, and grow with expert-backed financial education.', value: 'Financial Growth' },
    { name: ' A platform built for members to support and uplift each other financially', value: ' Community-Driven' },
]


export default function About() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div className="h-full w-full">
                <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 id='about' className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Who We Are</h2>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                            Tubali is a cooperative financial platform designed to empower individuals and businesses through innovative savings and investment opportunities. We provide a secure and transparent system where members can save in Naira, USD, USDT, and Gold, invest strategically, and access financial education to grow their wealth.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl id='why-us' className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse gap-1">
                                    <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div >
    )
}

