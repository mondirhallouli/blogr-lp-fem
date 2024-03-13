import logo from '../images/logo.svg';

export default function Footer() {
    return (
        <footer className='py-20 px-12 rounded-tr-[110px] bg-very-dark-black-blue'>

            <div className='max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-8 lg:flex-row lg:items-start lg:gap-52'>

                <a href='/' className='block mb-6'>
                    <img src={logo} alt="Blogr logo" />
                </a>

                <ul className='font-ubuntu text-center lg:text-left'>
                    <h3 className='text-white font-medium text-lg mb-6'>
                        Product
                    </h3>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Overview</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Pricing</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Marketplace</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Features</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Integrations</a>
                    </li>
                </ul>

                <ul className='font-ubuntu text-center lg:text-left'>
                    <h3 className='text-white font-medium text-lg mb-6'>
                        Company
                    </h3>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">About</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Team</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Blog</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Careers</a>
                    </li>
                </ul>

                <ul className='font-ubuntu text-center lg:text-left'>
                    <h3 className='text-white font-medium text-lg mb-6'>
                        Connect
                    </h3>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Contact</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">Newsletter</a>
                    </li>

                    <li className='text-grayish-blue mb-2'>
                        <a href="#">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}