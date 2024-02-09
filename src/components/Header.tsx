import "./Navbar.css";
import WhiteLogo from "./base64.ts";

export default function HeaderGlobal() {
	return (
		<header>
			<nav
				className={"bg-laidlawRed z-10 w-full flex justify-center"}
				id="navbar-default"
			>
				<div className="w-2/3 flex justify-center items-center p-6 gap-6 bg-laidlawRed text-white">
					<div className="hidden w-full md:block md:w-auto">
						<ul className="text-xl font-semibold flex flex-row justify-center items-center">
							<li>
								<a
									href="#Home"
									className="nav-link"
									aria-current="page"
								>
									Home
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
						href="/"
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
						<ul className="text-xl font-semibold flex flex-row justify-center items-center">
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
	);
}
