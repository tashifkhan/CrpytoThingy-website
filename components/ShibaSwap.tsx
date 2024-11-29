"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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
			<div className="flex flex-col gap-6 w-full md:w-3/5">
				<motion.h2
					className="text-3xl font-bold"
					initial={{ opacity: 0, y: -50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
				>
					Shibaswap
				</motion.h2>
				<motion.p
					className="text-lg"
					initial={{ opacity: 0, y: -50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Decentralized Exchange
				</motion.p>
				<div className="flex flex-col gap-4">
					{/* Reusable Row Component */}
					{[
						{
							title: "Bury",
							description: "Stake and Earn Rewards",
							icon: "/bury-logo.svg",
						},
						{
							title: "Swap",
							description: "Between tokens",
							icon: "/swap-logo.svg",
						},
						{
							title: "DIG",
							description: "Stake Tokens",
							icon: "/dig-logo.svg",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							className="flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:scale-105 hover:shadow-lg w-4/5 mx-auto cursor-pointer transition-all duration-300 ease-in-out hover:w-full"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5, delay: 0.3 * index }}
						>
							<div className="flex items-center gap-4">
								<div className="bg-gray-700 p-2 rounded-full">
									<Image
										src={item.icon}
										alt={item.title}
										width={48}
										height={48}
									/>
								</div>
								<div>
									<p className="font-semibold">{item.title}</p>
									<p className="text-sm text-gray-400">{item.description}</p>
								</div>
							</div>
							<span className="text-gray-400">&rarr;</span>
						</motion.div>
					))}
				</div>
				<motion.button
					className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-fit mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					Go to Shibaswap &rarr;
				</motion.button>
			</div>
			{/* Right Section */}
			<div className="flex flex-col items-center gap-4 w-full md:w-2/5 md:justify-end">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={inView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<Image src="/Certik.png" alt="Certik Logo" width={399} height={399} />
				</motion.div>
				<motion.p
					className="text-gray-400"
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 1 }}
				>
					Audited by Certik
				</motion.p>
				<motion.button
					className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300"
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 1.2 }}
				>
					Audit Overview &rarr;
				</motion.button>
			</div>
		</div>
	);
};

export default ShibaswapSection;
