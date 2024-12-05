"use client";
import React, { useState } from "react";

export default function Table() {
	const [copySuccess, setCopySuccess] = useState("");

	const transaction = {
		id: 1,
		name: "KALKI",
		supply: "1Billion",
		taxes: "0%",
		// liquidity: "$500M",
		network: "Solana",
		// marketCap: "$600B",
		value: "$30,000",
		growth: "+5.2%", // Added growth field
		address: "0x1234567890abcdef1234567890abcdef12345678",
	};

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopySuccess("Copied!");
			setTimeout(() => setCopySuccess(""), 2000);
		} catch (err) {
			setCopySuccess("Failed to copy!");
		}
	};

	return (
		<div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-2xl shadow-white/10 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-white/5">
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-4xl font-bold text-slate-200">
					{transaction.name}
				</h2>
				<div className="flex items-center gap-4">
					<span className="text-xl font-medium text-emerald-400">
						{transaction.growth}
					</span>
					<span className="text-3xl font-bold text-emerald-400">
						{transaction.value}
					</span>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-8 mb-8">
				<div className="space-y-4">
					<div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl">
						<span className="text-slate-400 block mb-1">Supply</span>
						<span className="text-slate-200 text-xl font-medium">
							{transaction.supply}
						</span>
					</div>
					<div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl">
						<span className="text-slate-400 block mb-1">Taxes</span>
						<span className="text-slate-200 text-xl font-medium">
							{transaction.taxes}
						</span>
					</div>
					{/* <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl">
                                <span className="text-slate-400 block mb-1">Liquidity</span>
                                <span className="text-slate-200 text-xl font-medium">
                                    {transaction.liquidity}
                                </span>
                            </div> */}
				</div>
				<div className="space-y-4">
					<div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl">
						<span className="text-slate-400 block mb-1">Network</span>
						<span className="text-slate-200 text-xl font-medium">
							{transaction.network}
						</span>
					</div>
					{/* <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl">
                                <span className="text-slate-400 block mb-1">Market Cap</span>
                                <span className="text-slate-200 text-xl font-medium">
                                    {transaction.marketCap}
                                </span> */}
					{/* </div> */}
				</div>
			</div>

			<div className="mt-6 pt-6 border-t border-white/10">
				<div className="flex items-center justify-between gap-4">
					<span className="text-slate-400 text-lg truncate flex-1">
						{transaction.address}
					</span>
					<button
						onClick={() => copyToClipboard(transaction.address)}
						className="px-6 py-2 text-base bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 text-slate-200"
					>
						{copySuccess || "Copy"}
					</button>
				</div>
			</div>
		</div>
	);
}
