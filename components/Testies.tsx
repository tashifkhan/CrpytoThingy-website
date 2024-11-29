import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import cover01 from "@/public/Cover---Bone-Army-Rises.png";
import cover02 from "@/public/Cover--1-.jpeg";
import cover03 from "@/public/Cover-official.png";
import { StaticImageData } from "next/image";

export function AnimatedTestimonialsDemo() {
	const testimonials = [
		{
			quote:
				"The detailed insights and innovative features have reshaped our understanding of the crypto landscape. A must-read for anyone in the industry.",
			name: "Sarah Chen",
			designation: "",
			src: (cover01 as StaticImageData).src,
		},
		{
			quote:
				"The publication's seamless blend of analysis and forecasting has exceeded all expectations. It's an essential resource for crypto professionals.",
			name: "Michael Rodriguez",
			designation: "",
			src: (cover02 as StaticImageData).src,
		},
		{
			quote:
				"This magazine has boosted our team's awareness of crypto trends. The intuitive design and sharp insights make it a go-to resource.",
			name: "Emily Watson",
			designation: "",
			src: (cover03 as StaticImageData).src,
		},
		{
			quote:
				"Exceptional reporting and robust market analysis. It's rare to find a crypto magazine that delivers on all fronts.",
			name: "James Kim",
			designation: "Market Strategist at CryptoPro",
			src: (cover01 as StaticImageData).src,
		},
		{
			quote:
				"The magazine's scalability and in-depth research have been game-changing for our organization. A vital asset for anyone in blockchain.",
			name: "Lisa Thompson",
			designation: "VP of Research at FutureCrypto",
			src: (cover02 as StaticImageData).src,
		},
	];
	return <AnimatedTestimonials testimonials={testimonials} />;
}
