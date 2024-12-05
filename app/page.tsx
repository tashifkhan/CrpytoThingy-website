import { AnimatedTestimonialsDemo } from "@/components/Testies";
import ShibariumComponent from "@/components/Block";
import Hero from "@/components/Hero";
import Table from "@/components/Data";
import ShibaSwapPage from "@/components/ShibaSwap";
import ShiboshisBanner from "@/components/Shiboshis";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<>
			<Hero />
			<div className="w-[80%] mx-auto mt-12">
				<div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-950 to-black p-8 rounded-xl shadow-2xl">
					<div className="space-y-6 text-center">
						<h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text yuji-mai-regular">
							Kalki: The Crypto of New Beginnings
						</h2>
						<p className="text-lg text-slate-300 leading-relaxed">
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
			<div className="max-w-3xl w-full mx-auto p-8">
				<h1 className="text-4xl md:text-5xl font-bold mb-12 text-slate-200 text-center">
					Market Data
				</h1>
				<Table />
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
