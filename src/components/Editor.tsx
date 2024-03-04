import editorSvgMobile from '../images/illustration-editor-mobile.svg';
// import editorSvgDesktop from '../images/illustration-editor-desktop.svg';

export default function Editor() {
    return (
        <section className='px-6 py-20 lg:px-0 lg:min-h-[1010px] lg:pt-36 lg:pb-28 lg:bg-editorBg lg:bg-no-repeat lg:bg-origin-border lg:[background-position:_125%] lg:[background-size:_50%]'>

            <h2 className='font-overpass font-medium text-very-dark-blue text-center text-2xl mb-10 lg:text-5xl'>
                Designed for the future
            </h2>

            <div className='max-w-[1440px] mx-auto lg:py-32'>

                <img src={editorSvgMobile} className='block w-screen min-h-[330px] object-cover mb-12 lg:hidden' />
                {/* <img src={editorSvgDesktop} className='hidden relative lg:block lg:order-2 lg:col-start-3 lg:col-end-[-1] lg:bottom-[10%] lg:left-[30%]' /> */}

                <div className='max-w-[540px] mx-auto lg:mx-0 xl:max-w-[700px]'>
                    <div className='mb-12'>
                        <h3 className='font-overpass font-medium text-very-dark-blue text-center text-2xl px-8 mb-4 lg:px-0 lg:text-left lg:text-3xl'>
                            Introducing an extensible editor
                        </h3>

                        <p className='font-overpass font-light text-very-dark-grayish-blue text-center lg:text-left lg:text-base'>
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                        </p>
                    </div>

                    <div>
                        <h3 className='font-overpass font-medium text-very-dark-blue text-center text-2xl px-8 mb-4 lg:px-0 lg:text-left lg:text-3xl'>
                            Robust content management
                        </h3>
                        <p className='font-overpass font-light text-very-dark-grayish-blue text-center lg:text-left lg:text-base'>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full controll.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}