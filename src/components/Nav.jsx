import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks as navLinks } from '../constants/index'

const Nav = () => {

    const menuAnimation = () => {
        const nav = document.querySelector('nav ul')
        nav.classList.toggle('max-lg:mt-[-450px]')
        nav.classList.add('max-lg:mt-[50px]')

        if (nav.classList.contains('max-lg:mt-[-450px]')) {
            // document.querySelector('header').style.paddingLeft = '0'
            // document.querySelector('header').style.paddingRight = '0'

        }
    }

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container max-lg:items-start'>
                <a href="#home" id='custom-padding' className='custom-padding'>
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:flex-col  max-lg:mt-[-450px] transition-all duration-300'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray '>{item.label}</a>
                        </li>
                    ))}
                    <li><a href='#home' className='hidden font-montserrat leading-normal text-lg text-black max-lg:block '>Sign in</a></li>

                </ul>
                <a href='#home' className='font-montserrat leading-normal text-lg text-black max-lg:hidden wide:pr-10'>Sign in / Explore now</a>

                <div className='max-lg:w-[120px] flex justify-end'>
                    <img src={hamburger} onClick={menuAnimation} alt="menu" width={25} height={25} className='hidden max-lg:block' />
                </div>
            </nav>

        </header>
    )
}

export default Nav