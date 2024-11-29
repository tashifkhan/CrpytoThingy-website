import Link from "next/link";
import { FaTwitter, FaDiscord, FaMediumM } from "react-icons/fa"; // Add icons for social media

const Footer: React.FC = () => {
	return (
		<footer className="bg-black text-white py-12 px-6 md:px-16">
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-8">
				{/* Left Section (Social Media) */}
				<div className="flex flex-col items-start">
					<div className="flex items-center gap-3 mb-4">
						<img
							src="/shib-token.png"
							alt="Shiba Token Logo"
							className="w-8 h-8"
						/>
						<h1 className="text-2xl font-bold">SHIBTOKEN</h1>
					</div>
					<p className="mb-4">Get connected with us on social networks:</p>
					<div className="flex gap-6">
						<Link href="https://twitter.com" passHref>
							<FaTwitter className="text-white text-2xl hover:text-blue-400" />
						</Link>
						<Link href="https://discord.com" passHref>
							<FaDiscord className="text-white text-2xl hover:text-blue-600" />
						</Link>
						<Link href="https://medium.com" passHref>
							<FaMediumM className="text-white text-2xl hover:text-orange-500" />
						</Link>
					</div>
				</div>

				{/* Center Section (Product Links) */}
				<div className="flex flex-col gap-4">
					<h3 className="font-semibold text-lg">PRODUCTS</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/shibarium" passHref>
								Shibarium
							</Link>
						</li>
						<li>
							<Link href="/shib-the-metaverse" passHref>
								Shib The Metaverse
							</Link>
						</li>
						<li>
							<Link href="/shibaswap" passHref>
								ShibaSwap
							</Link>
						</li>
						<li>
							<Link href="/shibacals" passHref>
								Shibacals
							</Link>
						</li>
						<li>
							<Link href="/shiba-eternity" passHref>
								Shiba Eternity
							</Link>
						</li>
					</ul>
				</div>

				{/* Right Section (Useful Links) */}
				<div className="flex flex-col gap-4">
					<h3 className="font-semibold text-lg">USEFUL LINKS</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/contact-us" passHref>
								Contact Us
							</Link>
						</li>
						<li>
							<Link href="/shib-io-blog" passHref>
								Shib.io Blog
							</Link>
						</li>
						<li>
							<Link href="/foundational-doc" passHref>
								Foundational Document
							</Link>
						</li>
						<li>
							<Link href="/certik-shibaswap-audit" passHref>
								Certik ShibaSwap Audit
							</Link>
						</li>
						<li>
							<Link href="/shiba-eternity-fandom" passHref>
								Shiba Eternity Fandom
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom Copyright */}
			<div className="mt-8 text-center text-sm text-gray-500">
				<p>&copy; 2024 Shiba Inu</p>
			</div>
		</footer>
	);
};

export default Footer;
