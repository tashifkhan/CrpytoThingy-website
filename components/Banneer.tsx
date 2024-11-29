import React from "react";

const MagazineBanner: React.FC = () => {


	return (
<<<<<<< HEAD
		<div className="relative bg-slate-700 w-full h-[300px] flex items-center justify-between overflow-hidden rounded-3xl p-6"
      style={{ backgroundImage: 'url(/doggy.avif)', backgroundSize: 'cover', backgroundPosition: 'center 27%' }}
      >
=======
		<div className="relative bg-slate-700 w-full h-auto flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-3xl p-6">
>>>>>>> c077a92 (animation completed)
			{/* Magazine Covers Background */}
			<div className="absolute inset-0 opacity-20 flex space-x-4 items-center justify-end pr-12">
				<img
					src="/api/placeholder/200/300"
					alt="Magazine Cover 1"
					className="transform rotate-[-10deg] h-32 md:h-48 shadow-lg rounded-2xl"
				/>
				<img
					src="/api/placeholder/200/300"
					alt="Magazine Cover 2"
					className="transform rotate-[5deg] h-36 md:h-56 shadow-lg rounded-2xl"
				/>
				<img
					src="/api/placeholder/200/300"
					alt="Magazine Cover 3"
					className="transform rotate-[-5deg] h-32 md:h-48 shadow-lg rounded-2xl"
				/>
			</div>


			{/* Logo */}
			<div className="absolute top-6 left-6 flex items-center space-x-2">
				<div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 100 100"
						className="w-6 h-6 md:w-8 md:h-8 text-white"
					>
						<path
							d="M50 10 L70 30 Q80 40, 70 50 Q60 60, 50 50 Q40 40, 30 50 L10 70 Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>

			{/* Central Content */}
			<div className="relative z-10 w-full text-center md:text-left md:pl-24">
				<h1 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4 md:mb-6 max-w-2xl">
					REACH THOUSANDS OF MONTHLY USERS WITH OUR MAGAZINE
				</h1>
				<button className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center">
					Advertise Now
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
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
			<div className="absolute bottom-3 right-3 text-white text-xs md:text-sm">
				The Shib
			</div>
		</div>
	);
};

export default MagazineBanner;
