import Image from "next/image";

const ShibaswapSection = () => {
  return (
    <div className="bg-slate-950 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Section */}
      <div className="flex flex-col gap-6 w-full md:w-3/5">
        <h2 className="text-3xl font-bold">Shibaswap</h2>
        <p className="text-lg">Decentralized Exchange</p>
        <div className="flex flex-col gap-4">
          {/* Reusable Row Component */}
          {[
            { title: "Bury", description: "Stake and Earn Rewards", icon: "/bury-logo.svg" },
            { title: "Swap", description: "Between tokens", icon: "/swap-logo.svg" },
            { title: "DIG", description: "Stake Tokens", icon: "/dig-logo.svg" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 w-4/5 mx-auto"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 p-2 rounded-full">
                  <Image src={item.icon} alt={item.title} width={48} height={48} />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
              <span className="text-gray-400">&rarr;</span>
            </div>
          ))}
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-fit mx-auto md:mx-0">
          Go to Shibaswap &rarr;
        </button>
      </div>
      {/* Right Section */}
      <div className="flex flex-col items-center gap-4 w-full md:w-2/5 md:justify-end">
        <Image src="/Certik.png" alt="Certik Logo" width={399} height={399} />
        <p className="text-gray-400">Audited by Certik</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg">
          Audit Overview &rarr;
        </button>
      </div>
    </div>
  );
};

export default ShibaswapSection;
