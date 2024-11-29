import React from "react";
import CardBanner from "./CardBanner";
// import Image from "next/image";

export default function Hero() {
	return (
		<div className="relative flex flex-col items-center mt-[4rem]">
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: "url('/hero-back.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					opacity: 0.2,
				}}
			></div>
			<div className="relative z-10 flex flex-col items-center">
				<h1 className="text-7xl font-bold mt-[12rem] yuji-mai-regular text-slate-400">
					{/* <Image
						src="/logo.png"
						width={100}
						height={100}
						alt="logo"
						className="mx-auto pb-3"
					/> */}
					{"Kalki".toLocaleUpperCase()}
				</h1>
				<CardBanner />
			</div>
		</div>
	);
}
