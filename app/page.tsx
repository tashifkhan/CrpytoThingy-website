import { AnimatedTestimonialsDemo } from "@/components/Testies";
import ShibariumComponent from "@/components/Block";
import Hero from "@/components/Hero";
import Banneer from "@/components/Banneer";
import ShibaSwapPage from "@/components/ShibaSwap";
import ShiboshisBanner from "@/components/Shiboshis";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<>
			<Hero />
			<div className="w-[80%] mx-auto mt-12">
				<div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl shadow-2xl">
					<div className="animate-[fadeIn_1.5s_ease-out] transform transition-all text-center text-2xl font-bold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
						<span className="yuji-mai-regular text-4xl">
							"Kalki: The Crypto of New Beginnings"
						</span>
						<div className="pt-3">
							Inspired by the rich tapestry of Indian mythology, Kalki
							symbolizes the ultimate force of renewal and transformation. Just
							as Kalki ushers in a new era by ending Kalyug, this cryptocurrency
							is here to disrupt the old, chaotic financial systems and bring
							balance, transparency, and empowerment to the digital age.
						</div>
					</div>
				</div>
			</div>
			<div className="w-[100%] mx-auto mt-12">
				<ShibaSwapPage />
			</div>
			<div className="w-[100%] mx-auto mt-12">
				<ShiboshisBanner />
			</div>
			<ShibariumComponent />
			<AnimatedTestimonialsDemo />
			<Footer />
		</>
	);
}
