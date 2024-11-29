import { AnimatedTestimonialsDemo } from "@/components/Testies";
import ShibariumComponent from "@/components/Block";
import Hero from "@/components/Hero";
import Banneer from "@/components/Banneer";
import ShibaSwapPage from "@/components/ShibaSwap";
import ShiboshisBanner from "@/components/Shiboshis";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="w-[80%] mx-auto mt-12">
				<Banneer />
			</div>
			<div className="w-[100%] mx-auto mt-12">
				<ShibaSwapPage />
			</div>
			<div className="w-[100%] mx-auto mt-12">
				<ShiboshisBanner />
			</div>
			<ShibariumComponent />
			<AnimatedTestimonialsDemo />
		</>
	);
}
