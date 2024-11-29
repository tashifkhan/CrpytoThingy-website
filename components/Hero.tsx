import React from "react";
import CardBanner from "./CardBanner";

export default function Hero() {
	return (
		<div className="relative flex flex-col items-center mt-[4rem]">
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: "url('/hero-back.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					opacity: 0.4,
				}}
			></div>
			<div className="relative z-10 flex flex-col items-center">
				<h1 className="text-7xl font-bold mt-[12rem] text-slate-400">
					{"Shiba Inu Tokens".toLocaleUpperCase()}
				</h1>
				<CardBanner />
			</div>
		</div>
	);
}
