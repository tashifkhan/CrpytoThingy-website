import Hero from "@/components/Hero";
import ShibaSwapPage from "@/components/ShibaSwap";
import Footer from "@/components/Footer";
import MarketCap from "@/components/MarketCap";
import { FloatingDockDemo } from "@/components/Socials";
export default function Home() {
	return (
		<>
			<Hero />
			<div className="w-[80%] mx-auto pt-12">
				<div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-950 to-black p-8 rounded-[2rem] shadow-2xl hover:shadow-[#E5C7A9]/15 transition-all duration-300 transform hover:scale-105">
					<div className="space-y-6 text-center">
						<h2 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-300 to-slate-300 bg-clip-text amita drop-shadow-lg ">
							Kalki: The Crypto of New Beginnings
						</h2>
						<p className="text-lg text-slate-300 leading-relaxed ">
							Inspired by the rich tapestry of Indian mythology, Kalki
							symbolizes the ultimate force of renewal and transformation. Just
							as Kalki ushers in a new era by ending Kalyug, this cryptocurrency
							is here to disrupt the old, chaotic financial systems and bring
							balance, transparency, and empowerment to the digital age.
						</p>
					</div>
				</div>
			</div>
			<div className="w-[100%] mx-auto mt-12">
				<ShibaSwapPage />
			</div>

			<MarketCap />

			<FloatingDockDemo />
			<Footer />
		</>
	);
}
