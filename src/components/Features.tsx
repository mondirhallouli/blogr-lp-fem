import laptopMobile from '../images/illustration-laptop-mobile.svg';
import laptopDesktop from '../images/illustration-laptop-desktop.svg';

export default function Features() {
    return (
        <section className='max-w-[1440px] px-6 mb-20 lg:mb-24 lg:min-h-[790px] lg:px-0 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:items-center'>

            <img src={laptopMobile} className='block w-screen min-h-[330px] object-cover mb-12 xl:hidden' />
            <img src={laptopDesktop} className='hidden w-full h-full object-none object-[110%] xl:block xl:' />

            <div className='xl:pl-32'>

                <div className='font-overpass text-center mb-12 lg:text-left'>
                    <h3 className='font-semibold text-very-dark-blue text-3xl mb-5'>
                        Free, open, simple
                    </h3>

                    <p className='font-light text-very-dark-grayish-blue leading-7'>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                </div>

                <div className='font-overpass text-center lg:text-left'>
                    <h3 className='font-semibold text-very-dark-blue text-3xl mb-5'>
                        Powerful tooling
                    </h3>

                    <p className='font-light text-very-dark-grayish-blue leading-7'>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>
        </section>
    )
}