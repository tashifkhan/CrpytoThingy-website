import React from "react";

const MagazineBanner: React.FC = () => {
	return (
		<div
			className="relative bg-slate-950 w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-between overflow-hidden rounded-3xl p-4 sm:p-6"
			style={{
				backgroundImage: "url(/doggy.avif)",
				backgroundSize: "cover",
				backgroundPosition: "center 27%",
			}}
		>
			{/* Logo */}
			<div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center space-x-2">
				<div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 100 100"
						className="w-6 h-6 sm:w-8 sm:h-8 text-white"
					>
						<path
							d="M50 10 L70 30 Q80 40, 70 50 Q60 60, 50 50 Q40 40, 30 50 L10 70 Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>

			{/* Central Content */}
			<div className="relative z-10 w-full text-left pl-4 sm:pl-6 md:pl-24">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4 sm:mb-6 max-w-2xl">
					REACH THOUSANDS OF MONTHLY USERS WITH OUR MAGAZINE
				</h1>
				<button className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center">
					Advertise Now
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="ml-2"
					>
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</button>
			</div>

			{/* Bottom Right Text */}
			<div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-white text-xs sm:text-sm">
				The Shib
			</div>
		</div>
	);
};

export default MagazineBanner;
