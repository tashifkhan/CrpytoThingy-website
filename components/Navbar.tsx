<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import logoji from "@/public/shib-token.png";
=======
"use client";
import React, { useState } from "react";
import logoji from "@/public/logo.jpg";
>>>>>>> c077a92 (animation completed)

interface NavbarProps {
	logo?: string;
	logoAlt?: string;
}

const Navbar: React.FC<NavbarProps> = ({
	logo = logoji.src,
	logoAlt = "Website Logo",
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50">
			<div className="container mx-auto flex items-center justify-between py-4 px-4">
				<a href="/" className="flex items-center">
					<img src={logo} alt={logoAlt} className="h-8 w-auto object-contain" />
				</a>
				<div className="flex md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-gray-300 hover:text-white focus:outline-none"
					>
						{isOpen ? (
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>
				<div className="hidden md:flex md:items-center md:space-x-6">
					{[
						"Home",
						"Shib.io",
						"ShibaSwap",
						"Shib Ecosystem",
						"Shibarium",
						"Ryoshi Archives",
						"Advertise with us",
						"Safety Guide",
						"Shibpedia",
					].map((item) => (
						<a
							key={item}
							href={`/${item}`}
							className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
						>
							{item}
						</a>
					))}
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden bg-black/90 backdrop-blur-sm px-4 pb-4">
					{[
						"Home",
						"Shib.io",
						"ShibaSwap",
						"Shib Ecosystem",
						"Shibarium",
						"Ryoshi Archives",
						"Advertise with us",
						"Safety Guide",
						"Shibpedia",
					].map((item) => (
						<a
							key={item}
							href={`/${item}`}
							className="block mt-4 text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
						>
							{item}
						</a>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
