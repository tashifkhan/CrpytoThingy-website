"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface CardProps {
	title: string;
	description: string;
	imageSrc: StaticImageData;
	link: string;
	buttonText: string;
}

export function Card({
	title,
	description,
	imageSrc,
	link,
	buttonText,
}: CardProps) {
	return (
		<CardContainer className="inter-var pb-4 ">
			<CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-slate-950 opacity-95 border-white/[0.2] w-[22rem] md:w-[22rem] h-auto rounded-xl p-4 border">
				{/* Image */}
				<CardItem translateZ="100" className="w-full mt-4">
					<Image
						src={imageSrc}
						height="800"
						width="800"
						className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>

				{/* Title */}
				<CardItem translateZ="50" className="text-lg font-bold text-white">
					{title}
				</CardItem>

				{/* Description */}
				<CardItem
					as="p"
					translateZ="60"
					className=" text-sm max-w-sm mt-1 text-neutral-300"
				>
					{description}
				</CardItem>

				{/* Action Buttons */}
				<div className="flex justify-between items-center mt-10">
					{/* Link */}
					<CardItem
						translateZ={20}
						as={Link}
						href={link}
						target=""
						className="px-3 py-1 rounded-xl text-xs font-normal text-white"
					>
						Try now →
					</CardItem>
					{/* Button */}

					<CardItem
						translateZ={20}
						as="button"
						className="px-3 py-1 rounded-xl bg-white text-black text-xs font-bold"
					>
						{buttonText}
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
