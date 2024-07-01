"use client";
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {CiMenuFries} from 'react-icons/ci'

const links=[
    {
        name:"home",
        path:"/"
    },
    {
        name:"About",
        path:"/About"
    },
    {
        name:"Works",
        path:"/Works"
    },
    {
        name:"Contact",
        path:"/Contact"
    },
]


const MobileNav = () => {
    const pathname=usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text=[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'> 

            <div className='mb-40 mt-32 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold' >
                        Mathew <span className='text-accent'>.</span>
                    </h1>
                </Link>
            </div>
            <nav className='flex flex-col items-center gap-8'>
                {links.map((link,index)=>{
                return <Link key={index} href={link.path} className={`${link.path===pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all `}>{link.name}</Link>
            })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
