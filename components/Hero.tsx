import React from "react";
import CardBanner from "./CardBanner";
// import Image from "next/image";

export default function Hero() {
	return (
		<div className="relative flex flex-col items-center mt-[4rem]">
			<div className="relative z-10 flex flex-col items-center">
				<h1 className="text-7xl mt-[12rem] amita font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text drop-shadow-lg">
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
