import Image from "next/image";
import CardBanner from "@/components/CardBanner";
import { AnimatedTestimonialsDemo } from "@/components/Testies";
import ShibariumComponent from "@/components/Block";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<ShibariumComponent />
			<AnimatedTestimonialsDemo />
<div className="w-[80%] mx-auto mt-12">
				<Banneer />
			</div>

			<div className="w-[100%] mx-auto mt-12"> 
                 <ShibaSwapPage/>

			</div>
           
			<div className="w-[100%] mx-auto mt-12"> 
                 <ShiboshisBanner/>

			</div>
		</>
	);
}
