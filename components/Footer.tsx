import Link from "next/link";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<footer className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-2xl shadow-white/10 border border-white/20 text-white py-12 px-6 md:px-16 border-t ">
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-center text-center md:text-left md:items-start">
				{/* Left Section (Social Media) */}
				<div className="flex flex-col items-center md:items-start">
					<div className="flex items-center gap-3 mb-4">
						<img src="/logo.png" alt="Kalki Logo" className="w-8 h-8" />
						<h1 className="text-2xl font-bold">KALKI</h1>
					</div>
					<p className="mb-4 text-slate-300">Join our community:</p>
					<div className="flex gap-6">
						<Link href=" https://x.com/KALKI_KAALYUG" passHref>
							<FaTwitter className="text-slate-300 text-2xl hover:text-blue-400 transition-colors" />
						</Link>
						{/* <Link href="https://discord.com" passHref>
							<FaDiscord className="text-slate-300 text-2xl hover:text-blue-600 transition-colors" />
						</Link> */}
						<Link href="https://t.me/kalkikaalyug" passHref>
							<FaTelegramPlane className="text-slate-300 text-2xl hover:text-sky-500 transition-colors" />
						</Link>
					</div>
				</div>

				{/* Center Section (Quick Links) */}
				<div className="flex flex-col gap-4 items-center md:items-start">
					<h3 className="font-semibold text-lg text-slate-200">QUICK LINKS</h3>
					<ul className="space-y-2">
						<li>
							<Link
								href="/why"
								className="text-slate-300 hover:text-white transition-colors"
							>
								Why Buy?
							</Link>
						</li>
						<li>
							<Link
								href="/how"
								className="text-slate-300 hover:text-white transition-colors"
							>
								How to Buy
							</Link>
						</li>
						<li>
							<Link
								href="/table"
								className="text-slate-300 hover:text-white transition-colors"
							>
								Market Cap
							</Link>
						</li>
						<li>
							<Link
								href="/hehe"
								className="text-slate-300 hover:text-white transition-colors"
							>
								Documentation
							</Link>
						</li>
					</ul>
				</div>

				{/* Right Section (Resources) */}
				<div className="flex flex-col gap-4 items-center md:items-start">
					<h3 className="font-semibold text-lg text-slate-200">RESOURCES</h3>
					<ul className="space-y-2">
						<li>
							<Link
								href="/white-paper.png"
								className="text-slate-300 hover:text-white transition-colors"
							>
								Whitepaper
							</Link>
						</li>
						{/* <li>
							<Link
								href="/roadmap"
								className="text-slate-300 hover:text-white transition-colors"
							>
								Roadmap
							</Link>
						</li>
						<li>
							<Link
								href="/audit"
								className="text-slate-300 hover:text-white transition-colors"
							>
								Audit Report
							</Link>
						</li> */}
						<li>
							<Link
								href="/contact"
								className="text-slate-300 hover:text-white transition-colors"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom Copyright */}
			<div className="mt-8 text-center text-sm text-slate-400">
				<p>&copy; 2024 Kalki. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
