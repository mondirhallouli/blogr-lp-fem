// images
import logo from '../images/logo.svg'
import menuIcon from '../images/icon-hamburger.svg'
import arrowIconLight from '../images/icon-arrow-light.svg'

export default function Navigation() {
    return (
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center py-10 mb-16 md:mb-20">

            <ul className='flex justify-between items-center font-ubuntu text-white/80 '>
                <li className='pr-10'>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </li>

                <li className='group relative py-5 pl-8 hidden md:inline-block transition-colors hover:text-white hover:underline'>
                    <a href="#" className='inline-block pr-2'>Product</a>
                    <img src={arrowIconLight} className='inline-block transition-all group-hover:rotate-180' />

                    <ul className='min-w-44 absolute top-full left-0 rounded-md bg-white px-6 py-6 shadow-2xl hidden group-hover:block'>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>Overview</a>
                        </li>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>Pricing</a>
                        </li>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>Marketplace</a>
                        </li>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>Features</a>
                        </li>
                        <li className='text-very-dark-blue'>
                            <a href="#" className='hover:font-medium'>Integrations</a>
                        </li>
                    </ul>
                </li>

                <li className='group relative py-5 pl-8 hidden md:inline-block transition-colors hover:text-white hover:underline'>
                    <a href="#" className='inline-block pr-2'>Company</a>
                    <img src={arrowIconLight} className='inline-block transition-all group-hover:rotate-180' />

                    <ul className='min-w-44 absolute top-full left-0 rounded-md bg-white px-6 py-6 shadow-2xl hidden group-hover:block'>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>About</a>
                        </li>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>Team</a>
                        </li>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>Blog</a>
                        </li>
                        <li className='text-very-dark-blue'>
                            <a href="#" className='hover:font-medium'>Careers</a>
                        </li>
                    </ul>
                </li>

                <li className='group relative py-5 pl-8 hidden md:inline-block transition-colors hover:text-white hover:underline'>
                    <a href="#" className='inline-block pr-2'>Connect</a>
                    <img src={arrowIconLight} className='inline-block transition-all group-hover:rotate-180' />

                    <ul className='min-w-44 absolute top-full left-0 rounded-md bg-white px-6 py-6 shadow-2xl hidden group-hover:block'>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>Contact</a>
                        </li>
                        <li className='text-very-dark-blue mb-3'>
                            <a href="#" className='hover:font-medium'>Newsletter</a>
                        </li>
                        <li className='text-very-dark-blue'>
                            <a href="#" className='hover:font-medium'>LinkedIn</a>
                        </li>
                    </ul>
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