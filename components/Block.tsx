"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ShibariumComponent: React.FC = () => {
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
			className="text-white flex flex-col items-center justify-center py-8"
		>
			<motion.h1
				className="text-4xl font-bold mb-4"
				initial={{ opacity: 0, y: -50 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				Shibarium
			</motion.h1>
			<motion.p
				className="text-lg mb-6"
				initial={{ opacity: 0, y: 50 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				Shib&apos;s L2 Blockchain
			</motion.p>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
				<motion.div
					className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={inView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<div className="flex items-center mb-4">
						<Image
							src="/stake.svg"
							alt="Stake Bone Icon"
							width={24}
							height={24}
							className="h-6"
						/>
						<h2 className="text-xl font-semibold ml-2">Stake Bone</h2>
					</div>
					<p className="text-sm mb-6">
						Stake your BONE tokens to support network security and earn rewards.
						As a Delegator, you indirectly contribute to consensus by backing
						Validators, gaining from the ecosystem's success.
					</p>
					<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg mt-auto focus:outline-none focus:ring focus:ring-orange-300">
						Stake Bone →
					</button>
				</motion.div>

				<motion.div
					className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={inView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<div className="flex items-center mb-4">
						<Image
							src="/bridge.svg"
							alt="Bridge Tokens Icon"
							width={24}
							height={24}
							className="h-6"
						></Image>
						<h2 className="text-xl font-semibold ml-2">Bridge Tokens</h2>
					</div>
					<p className="text-sm mb-6">
						Bridge your tokens seamlessly between Ethereum and Shibarium
						blockchains.
					</p>
					<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg mt-auto focus:outline-none focus:ring focus:ring-orange-300">
						Shibarium Bridge →
					</button>
				</motion.div>
			</div>
		</div>
	);
};

export default ShibariumComponent;
