import Link from 'next/link';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        {/* <FaFingerprint className="min-w-fit w-5 h-5 md:w-7 md:h-7" /> */}
                        <Image height={30} width={30} src="/images/tubali-logo.png" alt="logo" />

                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    {footerDetails.address && <a href="#" className="block text-foreground-accent hover:text-foreground">Address: {footerDetails.address}</a>}
                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">Email: {footerDetails.email}</a>}


                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground">Phone: {footerDetails.telephone}</a>}
                    <button>
                        <Link target='_blank' href="https://forms.gle/bm21UxA8rpubtoaK8" className="block mt-5 text-sm font-semibold text-white bg-primary hover:bg-primary-accent px-8 py-3 rounded-[10px] my-1 transition-colors">
                            Send Message Us A
                        </Link>
                    </button>
                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <hr className='my-3 mx-5' />
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                {/* <p className="text-sm mt-2 text-gray-500">Made with &hearts; by <a href="https://nexilaunch.com" target="_blank">Nexi Launch</a></p>
                <p className="text-sm mt-2 text-gray-500">UI kit by <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank">Youthmind</a></p> */}
            </div>
        </footer>
    );
};

export default Footer;
