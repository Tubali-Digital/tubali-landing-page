import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    address: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "Home",
            url: "#hero"
        },
        {
            text: "About Us",
            url: "#about"
        },
        {
            text: "Our Services",
            url: "#services"
        }
    ],
    address: 'No. 33 MYCA7 Plaza, Zoo Road, Kano, Nigeria',
    email: ' support@tubalidigital.com',
    telephone: '+234 8033850440',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/@Z9Trade',
        facebook: 'https://facebook.com/Z9Trade',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/Z9Trade',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/Z9Trade',
    }
}