import phonesImg from '../images/illustration-phones.svg';
import circlesIllustration from '../images/bg-pattern-circles.svg';

export default function Infrastructure() {
    return (
        <section id='infrastructure-section'>

            <img src={phonesImg} className='' />

            <div id='infrastructure-content' className=''>

                <img src={circlesIllustration} className='absolute -top-28 scale-[1.62] -z-10 md:scale-100 md:-top-72 lg:-left-52 lg:-top-[500px]' />

                <div id="infra-text">
                    <h3 className='mb-7 font-overpass font-semibold text-4xl text-white text-center lg:text-left'>State of the Art Infrastructure</h3>

                    <p className='font-overpass font-light text-white text-center leading-7 lg:text-left'>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </div>
        </section >
    )
}