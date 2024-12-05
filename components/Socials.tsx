"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";

export function FloatingDockDemo() {
	const links = [
		{
			title: "Twitter",
			icon: <IconBrandX className="h-full w-full text-neutral-300" />,
			href: "#",
		},
		{
			title: "GitHub",
			icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
			href: "#",
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
