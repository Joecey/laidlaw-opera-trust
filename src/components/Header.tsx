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
                                <a
                                    href="#Grantees"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Grantees
                                </a>
                            </li>
                            <li>
                                <a href="#Mission" className="nav-link">
                                    Purpose
                                </a>
                            </li>

                            <li>
                                <a href="#Invest" className="nav-link">
                                    Invest
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
                            <li>
                                <a href="#Contact" className="nav-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
