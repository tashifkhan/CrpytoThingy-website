import Table from "@/components/Data";
import React from "react";

export default function TablePage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-4 flex items-center justify-center">
			<div className="max-w-3xl w-full mx-auto p-8">
				<h1 className="text-4xl md:text-5xl font-bold mb-12 text-slate-200 text-center">
					Market Data
				</h1>
				<Table />
			</div>
		</div>
	);
}
