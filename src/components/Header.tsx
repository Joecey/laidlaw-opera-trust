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
						<ul className="text-xl flex flex-row justify-center items-center">
							<li>
								<a
									href="/"
									className="nav-link"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a href="/" className="nav-link">
									About
								</a>
							</li>
						</ul>
					</div>

					<a
						href="/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img
							alt="lot_logo_landscape_white"
							className="h-16"
							src={WhiteLogo}
						/>
					</a>

					<div className="hidden w-full md:block md:w-auto">
						<ul className="text-xl flex flex-row justify-center items-center">
							<li>
								<a
									href="/"
									className="nav-link"
									aria-current="page"
								>
									Trustees
								</a>
							</li>
							<li>
								<a href="/" className="nav-link">
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
