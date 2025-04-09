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
        twitter: 'https://x.com/Tubali_Digital',
        facebook: 'https://www.facebook.com/share/1C1oqoDxkh/',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/tubali-digital/',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/tubali_digital',
    }
}