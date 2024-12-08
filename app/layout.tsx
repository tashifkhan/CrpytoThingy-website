import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "KalkiToken",
	description: `"Kalki: The Crypto of New Beginnings"
Inspired by the rich tapestry of Indian mythology, Kalki symbolizes the ultimate force of renewal and transformation. Just as Kalki ushers in a new era by ending Kalyug, this cryptocurrency is here to disrupt the old, chaotic financial systems and bring balance, transparency, and empowerment to the digital age.`,
	icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <head>
				<link rel="icon" href={logi} />
			</head> */}
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
			>
				<Navbar />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
