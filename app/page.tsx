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
		</>
	);
}
