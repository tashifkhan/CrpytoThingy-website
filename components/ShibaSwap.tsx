"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";

const ShibaswapSection = () => {
	const [isClient, setIsClient] = useState(false);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<div
			ref={ref}
			className="text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 w-4/5 mx-auto"
		>
			{/* Left Section */}
			<div className="flex flex-col gap-6 w-full md:w-3/5 backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-2xl shadow-white/10 border border-white/20 hover:border-white/30 transition-all duration-300">
				<motion.h2
					className="text-5xl font-bold amita text-slate-200"
					initial={{ opacity: 0, y: -50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
				>
					Kalki
				</motion.h2>
				<motion.p
					className="text-2xl amita text-slate-400"
					initial={{ opacity: 0, y: -50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Decentralized currency
				</motion.p>
				<div className="flex flex-col gap-4">
					{[
						{
							title: "Buy",
							description: "Ride the Wave",
							icon: "/bury-logo.svg",
							link: "https://dexscreener.com/solana/d9mmirysjroyyg3pfakcj5tpeslqxwfeyxvxfx7kd4fh",
						},
						{
							title: "White Paper",
							description: "Our Technical Document",
							icon: "/swap-logo.svg",
							link: "./white-paper.pdf",
						},
						{
							title: "Docs",
							description: "Reasons",
							icon: "/dig-logo.svg",
							link: "/hehe",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							className="flex items-center justify-between backdrop-blur-sm bg-white/5 p-4 rounded-xl hover:scale-105 hover:shadow-lg w-4/5 mx-auto cursor-pointer transition-all duration-300 ease-in-out hover:w-full hover:bg-white/10"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5, delay: 0.3 * index }}
						>
							<Link href={item.link || "#"}>
								<div className="flex items-center gap-4">
									<div className="bg-white/10 p-2 rounded-full">
										<Image
											src={item.icon}
											alt={item.title}
											width={48}
											height={48}
										/>
									</div>
									<div>
										<p className="font-semibold text-slate-200">{item.title}</p>
										<p className="text-sm text-slate-400">{item.description}</p>
									</div>
								</div>
							</Link>
							<span className="text-slate-400">&rarr;</span>
						</motion.div>
					))}
				</div>
				<div className="flex gap-4 justify-center md:justify-start">
					<motion.button
						className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-slate-200 font-bold py-2 px-4 rounded-xl hover:scale-105 transition-all duration-300 border border-white/20"
						initial={{ opacity: 0, y: 50 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.6 }}
						onClick={() => window.open("/why", "_self")}
					>
						Why Buy? &rarr;
					</motion.button>
					<motion.button
						className="backdrop-blur-sm bg-white/5 hover:bg-white/15 text-slate-200 font-bold py-2 px-4 rounded-xl hover:scale-105 transition-all duration-300 border border-white/10"
						initial={{ opacity: 0, y: 50 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 1.2 }}
						onClick={() => window.open("/how", "_self")}
					>
						How to Buy? &rarr;
					</motion.button>
				</div>
			</div>

			{/* Right Section */}
			<div className="flex flex-col items-center gap-4 w-full md:w-2/5 md:justify-end backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-2xl shadow-white/10 border border-white/20">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={inView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.5, delay: 0.8 }}
					className="hover:scale-105 transition-all duration-300"
				>
					<Image src="/Certik.png" alt="Certik Logo" width={399} height={399} />
				</motion.div>
				<motion.p
					className="text-slate-400"
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 1 }}
				>
					Audited by Certik
				</motion.p>
			</div>
		</div>
	);
};

export default ShibaswapSection;
