import Link from 'next/link';
import { FaHome, FaMicrophoneAlt, FaRegLightbulb , FaVideo, FaHeart, FaTrophy,  } from 'react-icons/fa';
import { LiaHashtagSolid } from "react-icons/lia";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { FaDev } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { FaBookOpen, FaCodeCompare } from "react-icons/fa6";
import { Home, } from 'react-feather';

const navItems = [
    { name: 'Home', icon: FaHome, href: '/' },
    { name: 'Podcasts', icon: FaMicrophoneAlt, href: '#' },
    { name: 'Videos', icon: FaVideo, href: '#' },
    { name: 'Tags', icon: LiaHashtagSolid, href: '#' },
    { name: 'DEV Help', icon: FaRegLightbulb , href: '#' },
    { name: 'Forem Shop', icon: RiShoppingBag4Fill , href: '#' },
    { name: 'Advertise on DEV', icon: FaHeart , href: '#' },
    { name: 'DEV Challenges', icon: FaTrophy , href: '#' },
    { name: 'DEV Showcase', icon: BsStars , href: '#' },
    { name: 'About', icon: FaDev , href: '#' },
    { name: 'Contact', icon: MdContactMail , href: '#' },
    { name: 'Guides', icon: FaBookOpen  , href: '#' },
    { name: 'Software comparisons', icon: FaCodeCompare, href: '#' },

  ];

export default function NavLinks() {
    return (
        <nav className="py-4">
            <ul className="space-y-2">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className="flex items-center px-4 py-2 text-gray-900 hover:bg-indigo-100 hover:text-indigo-700 hover:underline rounded-md">
                            <item.icon className='w-5 h-5 mr-2'/>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}