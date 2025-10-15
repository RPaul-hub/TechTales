'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import { HomeIcon, EnvelopeIcon, UserGroupIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const links = [
  { href: '/', label: 'Home' , icon: HomeIcon},
  { href: '/blog', label: 'Articles', icon: DocumentDuplicateIcon},
  { href: '/blog/contact', label: 'Contact Us', icon: EnvelopeIcon},
  { href: '/blog/about', label: 'About Us', icon: UserGroupIcon}
];

export default function NavLinks() {
    const pathname = usePathname();
    return ( 
        <div className="flex flex-row items-center h-20 bg-purple-900 text-white">
            <div className='flex flex-row items-center mx-20'>
                {
                    links.map(({href,label,icon}) => {
                        const LinkIcon = icon;
                        return (
                            <Link 
                                key={label} 
                                href={href} 
                                className={`flex flex-row mr-8 hover:font-semibold ${pathname === href ? 'font-semibold' : 'font-medium'}`}>
                                    <LinkIcon className="h-5 w-5 mr-2"/>
                                    <p className="hidden md:block">{label}</p>
                            </Link>
                        )
                    })           
                }
            </div>
        </ div>
    )
}

