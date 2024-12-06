"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandX, IconBrandTelegram } from "@tabler/icons-react";

export function FloatingDockDemo() {
	const links = [
		{
			title: "Twitter",
			icon: <IconBrandX className="h-full w-full text-neutral-300" />,
			href: "https://x.com/KALKI_KAALYUG",
		},
		{
			title: "Telegram",
			icon: <IconBrandTelegram className="h-full w-full text-neutral-300" />,
			href: "https://t.me/kalkikaalyug",
		},
	];
	return (
		<div className="flex items-center justify-center h-[35rem] w-full">
			<FloatingDock
				mobileClassName="translate-y-20" // only for demo, remove for production
				items={links}
			/>
		</div>
	);
}
