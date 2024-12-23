"use client";
import Table from "@/components/Data";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function TablePage() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	return (
		<div className="min-h-screen p-4 flex items-center justify-center">
			<div ref={ref} className="max-w-3xl w-full mx-auto p-8">
				<motion.h1
					className="text-5xl md:text-5xl font-bold mb-12 text-slate-200 text-center amita"
					initial={{ opacity: 0, y: -50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
				>
					<span className="text-transparent bg-gradient-to-r from-orange-300 to-slate-300 bg-clip-text">
						Market Data
					</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Table />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={inView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="max-w-3xl w-full mx-auto p-8"
				></motion.div>

				<div className="flex justify-center">
					<button
						className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
						onClick={() =>
							(window.location.href =
								"https://dexscreener.com/solana/d9mmirysjroyyg3pfakcj5tpeslqxwfeyxvxfx7kd4fh")
						}
					>
						Buy Kalki Now
					</button>
				</div>
			</div>
		</div>
	);
}
