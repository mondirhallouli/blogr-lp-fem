import { useRef } from 'react';
import arrowIconDark from '../images/icon-arrow-dark.svg'

type MobileMenuProps = {
    open: boolean,
};

export default function MobileMenu({ open }: MobileMenuProps) {
    const productRef = useRef<HTMLDivElement>(null!);
    const companyRef = useRef<HTMLDivElement>(null!);
    const connectRef = useRef<HTMLDivElement>(null!);

    const productSubmenu = () => {
        if (productRef.current.style.visibility == 'hidden') {
            productRef.current.style.display = 'flex';
            productRef.current.style.visibility = 'visible';
        }
        else {
            productRef.current.style.visibility = 'hidden';
            productRef.current.style.display = 'none';
        }
    };

    const companySubmenu = () => {
        if (companyRef.current.style.visibility == 'hidden') {
            companyRef.current.style.display = 'flex';
            companyRef.current.style.visibility = 'visible';
        }
        else {
            companyRef.current.style.visibility = 'hidden';
            companyRef.current.style.display = 'none';
        }
    };

    const connectSubmenu = () => {
        if (connectRef.current.style.visibility == 'hidden') {
            connectRef.current.style.display = 'flex';
            connectRef.current.style.visibility = 'visible';
        }
        else {
            connectRef.current.style.visibility = 'hidden';
            connectRef.current.style.display = 'none';
        }
    };

    return (
        <div className={`absolute top-28 w-menu-width px-6 py-6 rounded-md flex flex-col justify-center items-center bg-white shadow-2xl ${open ? 'block' : 'hidden'}`}>

            <div className='w-full'>
                <button onClick={() => productSubmenu()} className='mx-auto pb-3 pt-4 flex justify-center items-center gap-2 font-overpass text-very-dark-blue font-medium text-[18px]'>

                    <span className='inline-block'>Product</span>
                    <img src={arrowIconDark} />
                </button>

                <div ref={productRef} className='py-4 rounded-md hidden invisible flex-col justify-center text-center text-very-dark-blue/80 bg-grayish-blue/50'>
                    <a href="#" className='py-2'>Overview</a>
                    <a href="#" className='py-2'>Pricing</a>
                    <a href="#" className='py-2'>Marketplace</a>
                    <a href="#" className='py-2'>Features</a>
                    <a href="#" className='py-2'>Integrations</a>
                </div>
            </div>

            <div className='w-full'>
                <button onClick={companySubmenu} className='mx-auto pb-3 pt-4 flex justify-center items-center gap-2 font-overpass text-very-dark-blue font-medium text-[18px]'>
                    <span className='inline-block'>Company</span>
                    <img src={arrowIconDark} />
                </button>

                <div ref={companyRef} className='py-4 rounded-md hidden invisible flex-col justify-center gap-2 text-center text-very-dark-blue/80 bg-grayish-blue/50'>
                    <a href="#" className='py-2'>About</a>
                    <a href="#" className='py-2'>Team</a>
                    <a href="#" className='py-2'>Blog</a>
                    <a href="#" className='py-2'>Careers</a>
                </div>
            </div>

            <div className='w-full'>
                <button onClick={connectSubmenu} className='mx-auto pb-3 pt-4 flex justify-center items-center gap-2 font-overpass text-very-dark-blue font-medium text-[18px]'>
                    <span className='inline-block'>Connect</span>
                    <img src={arrowIconDark} />
                </button>

                <div ref={connectRef} className='py-4 mb-4 rounded-md hidden invisible flex-col justify-center gap-2 text-center text-very-dark-blue/80 bg-grayish-blue/50'>
                    <a href="#" className='py-2'>Contact</a>
                    <a href="#" className='py-2'>Newsletter</a>
                    <a href="#" className='py-2'>LinkedIn</a>
                </div>
            </div>


            <ul className='w-full border-t-[1px] mt-4 pt-3 font-ubuntu flex flex-col justify-between items-center'>
                <li>
                    <a href="#" className='inline-block py-4 text-very-dark-blue font-medium text-[18px]'>
                        Login
                    </a>
                </li>
                <li>
                    <button className='px-9 py-3 rounded-full font-ubuntu font-medium transition-colors bg-very-light-red text-white'>
                        Sign Up
                    </button>
                </li>
            </ul>
        </div>
    )
}