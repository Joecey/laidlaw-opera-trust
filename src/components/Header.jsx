import "./Navbar.css";
import WhiteLogo from "./base64";

export default function HeaderGlobal() {
	return (
		<header>
			<nav
				class="bg-laidlawRed z-10 w-full flex justify-center"
				id="navbar-default"
			>
				<div class="w-2/3 flex justify-center items-center p-6 gap-6 bg-laidlawRed text-white">
					<div class="hidden w-full md:block md:w-auto">
						{/* <ul class="text-xl flex flex-row justify-center items-center">
							<li>
								<a
									href="/"
									class="nav-link"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a href="/" class="nav-link">
									About
								</a>
							</li>
						</ul> */}
					</div>

					<a
						href="/"
						class="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img
							alt="lot_logo_landscape_white"
							class="h-16"
							src={WhiteLogo}
						/>
					</a>

					<div class="hidden w-full md:block md:w-auto">
						{/* <ul class="text-xl flex flex-row justify-center items-center">
							<li>
								<a
									href="/"
									class="nav-link"
									aria-current="page"
								>
									Trustees
								</a>
							</li>
							<li>
								<a href="/" class="nav-link">
									Contact
								</a>
							</li>
						</ul> */}
					</div>
				</div>
			</nav>
		</header>
	);
}
