"use client";
import { motion } from "framer-motion";
import Table from "./Data";

export default function MarketCap() {
	return (
		<div className="max-w-3xl w-full mx-auto p-8">
			<h1 className="text-4xl md:text-5xl font-bold mb-12 text-slate-200 text-center yuji-mai-regular">
				Market Data
			</h1>
			<Table />
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="max-w-3xl w-full mx-auto p-8"
			></motion.div>
		</div>
	);
}
