import Image from "next/image";
import CardBanner from "@/components/CardBanner";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-bold mt-[12rem]">Shiba Inu Tokens</h1>
			</div>
			<CardBanner />
		</>
	);
}
