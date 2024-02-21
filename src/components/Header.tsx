import './Navbar.css'
import WhiteLogo from './base64.ts'

export default function HeaderGlobal() {
    return (
        <header>
            <nav
                className={'z-10 flex w-full justify-center bg-laidlawRed'}
                id="navbar-default"
            >
                <div className="flex w-2/3 items-center justify-center gap-6 bg-laidlawRed p-6 text-white">
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="flex flex-row items-center justify-center text-xl font-semibold">
                            <li>
                                <a href="#Mission" className="nav-link">
                                    Purpose
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Grantees"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Grantees
                                </a>
                            </li>
                        </ul>
                    </div>

                    <a
                        href="#Home"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <div className="relative w-52">
                            <img
                                alt="lot_logo_landscape_white"
                                className="h-24"
                                src={WhiteLogo}
                            />
                        </div>
                    </a>

                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="flex flex-row items-center justify-center text-xl font-semibold">
                            <li>
                                <a
                                    href="#Trustees"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Trustees
                                </a>
                            </li>
                            <li>
                                <a href="#News" className="nav-link">
                                    News
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="under-construction" className=" w-full bg-boneWhite">
                <p className="p-2 text-center text-xl font-bold text-laidlawGrey">
                    This site is under construction and will be available to the
                    public in the coming weeks
                </p>
            </div>
        </header>
    )
}
