import Link from 'next/link';
import { SlLike } from "react-icons/sl";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { PiEyesFill } from "react-icons/pi";


const navItems = [
    { name: 'Code of Conduct', icon: SlLike , href: '#' },
    { name: 'Privacy Policy', icon: MdOutlinePrivacyTip, href: '#' },
    { name: 'Terms of use', icon: PiEyesFill , href: '#' },
  ];

export default function OtherLinks() {
    return (
        <div className="py-4 px-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-950 ">Other</h2>
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
        </div>
    )
}