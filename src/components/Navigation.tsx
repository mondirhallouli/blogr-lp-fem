// images
import logo from '../images/logo.svg'
import menuIcon from '../images/icon-hamburger.svg'
import arrowIconLight from '../images/icon-arrow-light.svg'

export default function Navigation() {
    return (
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center py-10 mb-16 md:mb-20">

            <ul className='flex justify-between items-center gap-6 font-ubuntu text-white/80 '>
                <li className='pr-10'>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </li>

                <li className='py-5 hidden md:inline-block transition-colors hover:text-white hover:underline'>
                    <a href="#" className='inline-block pr-2'>Product</a>
                    <img src={arrowIconLight} className='inline-block' />
                </li>

                <li className='py-5 hidden md:inline-block transition-colors hover:text-white hover:underline'>
                    <a href="#" className='inline-block pr-2'>Company</a>
                    <img src={arrowIconLight} className='inline-block' />
                </li>

                <li className='py-5 hidden md:inline-block transition-colors hover:text-white hover:underline'>
                    <a href="#" className='inline-block pr-2'>Connect</a>
                    <img src={arrowIconLight} className='inline-block' />
                </li>
            </ul>

            <ul className='hidden font-ubuntu md:flex justify-between items-center gap-6'>
                <li>
                    <a href="#" className='text-white/80 hover:text-white transition-colors'>
                        Login
                    </a>
                </li>
                <li>
                    <button className='px-9 py-3 rounded-full font-ubuntu font-medium bg-white text-light-red transition-colors hover:bg-very-light-red hover:text-white'>
                        Sign Up
                    </button>
                </li>
            </ul>

            <button className='md:hidden'>
                <img src={menuIcon} alt='menu icon' />
            </button>
        </nav>
    )
}