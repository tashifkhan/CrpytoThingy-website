import React from "react";
import { Card } from "@/components/Card";
import img03 from "@/public/relic02.jpg";
import img02 from "@/public/gg2.png";
// import img03 from "@/public/bone-token.png";
import img01 from "@/public/token01.jpg";

export default function CardBanner() {
	return (
		<div className="mt-[4.2rem] md:flex md:flex-wrap md:gap-12 md:justify-center pt-6 flex-row">
			{[
				{
					title: "Ending chaos, building trust.",
					description: `Kalki aims to dismantle the confusion and mistrust associated with traditional financial systems. By leveraging blockchain technology, it creates a secure, transparent, and trustworthy environment for financial transactions.`,
					imageSrc: img01,
					link: "https://dexscreener.com/solana/d9mmirysjroyyg3pfakcj5tpeslqxwfeyxvxfx7kd4fh",
					buttonText: "",
				},
				{
					title: "The dawn of a new financial age.",
					description: `This highlights Kalki as the harbinger of a transformative era in finance, introducing innovation and fairness to the digital economy, much like the mythical Kalki ushers in a new epoch.`,
					imageSrc: img03,
					link: "https://dexscreener.com/solana/d9mmirysjroyyg3pfakcj5tpeslqxwfeyxvxfx7kd4fh",
					buttonText: "",
				},
				{
					title: "Your currency for a brighter yug",
					description: `Kalki represents a fresh start, empowering individuals to take control of their financial future. It aligns with the concept of entering a brighter, more equitable epoch (yug) with the power of decentralized currency.
`,
					imageSrc: img02,
					link: "https://dexscreener.com/solana/d9mmirysjroyyg3pfakcj5tpeslqxwfeyxvxfx7kd4fh",
					buttonText: "",
				},
			].map((card, index) => (
				<Card
					key={index}
					title={card.title}
					description={card.description}
					imageSrc={card.imageSrc}
					link={card.link}
					buttonText={card.buttonText}
				/>
			))}
		</div>
	);
}
