import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className="container mx-auto flex justify-between items-center">

          <Link  href="/">
            <h1 className='lg:text-4xl sm:text-2xl font-semibold' >Mathew Joseph <span className='text-accent'>.</span> </h1>
          </Link>

            <div className='hidden xl:flex items-center gap-8'>

              <Nav />
              <Link href="/Contact">
                <Button>Hire me</Button>
              </Link>
            </div>

            <div className='xl:hidden'>
              <MobileNav/>

            </div>

        </div>
    </header>
  )
}
