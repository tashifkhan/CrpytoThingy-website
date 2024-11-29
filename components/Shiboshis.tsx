import Image from "next/image";

const ShiboshisBanner = () => {
	return (
		<div className="bg-black text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-8">
			{/* Left Section (Text Content) */}
			<div className="flex flex-col items-start gap-6 md:w-3/5">
				<h1 className="text-4xl md:text-5xl font-bold pixelated-text">
					THE SHIBOSHIS
				</h1>
				<p className="text-lg text-gray-400 max-w-xl">
					Discover *The Shiboshis*, a collection of 10,000 unique Shiba Inu NFTs
					on the Ethereum blockchain. Each Shiboshi boasts unique traits and
					will play an integral role in the upcoming Shiboshi Game.
				</p>
				<div className="flex flex-col gap-3">
					{" "}
					{/* Reduced gap between buttons */}
					<button className="bg-orange-500 hover:bg-orange-600 text-white  py-2 px-6 text-lg rounded-lg">
						Shiboshis Collection
					</button>
					<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 text-sm rounded-lg">
						Buy on OpenSea
					</button>
				</div>
			</div>

			{/* Right Section (Optional Logo or Image) */}
			<div className="hidden md:flex md:w-2/5 justify-end">
				<Image
					src="/shiboshis-banner.png"
					alt="Shiboshis Banner"
					width={300}
					height={300}
					className="rounded-lg"
				/>
			</div>
		</div>
	);
};

export default ShiboshisBanner;
