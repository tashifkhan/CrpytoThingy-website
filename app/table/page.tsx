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
					className="text-4xl md:text-5xl font-bold mb-12 text-slate-200 text-center yuji-mai-regular"
					initial={{ opacity: 0, y: -50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
				>
					Market Data
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
			</div>
		</div>
	);
}
