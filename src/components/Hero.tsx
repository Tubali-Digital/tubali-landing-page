import React from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data/hero';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-red-600 ring-1 ring-red-900/10 hover:ring-red-900/20">
                        Comming Soon.{' '}
                        <a href="#cta" className="font-semibold text-indigo-600">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Join waiting List...<span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                {/* <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div> */}
                <button
                    // type="submit"
                    className="flex-none rounded-md bg-[#050a02] mt-4 px-10 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#2b3a22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    <Link href="#cta">
                        join Waiting List
                    </Link>
                </button>

                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-12 md:mt-16 mx-auto '
                />
            </div>
        </section>
    );
};

export default Hero;
