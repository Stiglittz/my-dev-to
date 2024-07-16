import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaGithub, FaInstagram, FaTwitch } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

const socialLinks = [
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/thepracticaldev' },
  { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/thepracticaldev' },
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/thepracticaldev' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/thepracticaldev/' },
  { name: 'Twitch', icon: FaTwitch, href: 'https://www.twitch.tv/thepracticaldev' },
  { name: 'Medium', icon: SiMedium, href: 'https://medium.com/dev-to' },
];

const SocialLinks = () => {
  return (
    <div className=" px-2">
      <div className="flex flex-wrap">
        <ul className="flex">
            {socialLinks.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className="flex items-center px-3 py-2 text-gray-900 hover:bg-indigo-100 hover:text-indigo-700 hover:underline rounded-md">
                        <link.icon className='w-5 h-5 '/>
                    </Link>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;