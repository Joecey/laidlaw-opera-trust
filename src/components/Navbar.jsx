import "./Navbar.css";

export default function NavbarGlobal() {
	return (
		<nav class="bg-laidlawRed z-10" id="navbar-default">
			<div class="w-full flex justify-center items-center p-6 gap-6 text-white">
				<div class="hidden w-full md:block md:w-auto">
					<ul class="text-xl flex flex-row justify-center items-center">
						<li>
							<a href="/" class="nav-link" aria-current="page">
								Home
							</a>
						</li>
						<li>
							<a href="/" class="nav-link">
								About
							</a>
						</li>
					</ul>
				</div>

				<a
					href="/"
					class="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img
						src="/lot_logo_landscape_white.png"
						class="h-16"
						alt="Laidlaw Opera Trust white logo"
					/>
				</a>

				<div class="hidden w-full md:block md:w-auto">
					<ul class="text-xl flex flex-row justify-center items-center">
						<li>
							<a href="/" class="nav-link" aria-current="page">
								Trustees
							</a>
						</li>
						<li>
							<a href="/" class="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
