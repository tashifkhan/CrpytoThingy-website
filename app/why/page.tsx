"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BuyPage() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div ref={ref} className="min-h-screen pt-24 pb-12 px-4">
			<div className="max-w-4xl mx-auto mt-20">
				<h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text yuji-mai-regular mb-12">
					Why Buy Kalki?
				</h2>

				<div className="space-y-8">
					{[
						{
							title: "Revolutionary Technology",
							description:
								"Built on Solana for lightning-fast transactions and minimal fees",
						},
						{
							title: "Strong Community",
							description:
								"Join a growing community of believers in financial transformation",
						},
						{
							title: "Transparent Development",
							description:
								"Open-source code and regular updates from our dedicated team",
						},
						{
							title: "Future Utility",
							description:
								"Expanding ecosystem with upcoming features and partnerships",
						},
					].map((reason, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
						>
							<h3 className="text-xl font-bold text-slate-200 mb-2">
								{reason.title}
							</h3>
							<p className="text-slate-400">{reason.description}</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="text-center mt-16"
			>
				<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
					Buy Kalki Now
				</button>
			</motion.div>
		</div>
	);
}
