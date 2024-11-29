import Image from "next/image";
import { Card } from "@/components/Card";
import img01 from "@/public/shib-token.png";
import img02 from "@/public/leash-token.png";
import img03 from "@/public/bone-token.png";

export default function Home() {
	return (
		<>
			<div className="mt-[4.2rem] md:flex md:flex-wrap md:gap-12 md:justify-center pt-6 flex-row">
				<Card
					title="token 01"
					description="Shiba Inu (SHIB) is our key token,
embodying a global, decentralized,
community-driven currency. Launched
in 2020, this Ethereum-based token is
a global sensation, accepted at
numerous places directly or via third-
parties."
					imageSrc={img01}
					link="/suggestion"
					buttonText="Sign up"
				/>
				<Card
					title="token 02"
					description="BONE, our ecosystem's governance
token, has a 250 million supply. It
empowers Shib Army's voting in the
Doggy DAO and underpins Shibarium,
our proprietary Layer 2 network."
					imageSrc={img02}
					link="/insurance"
					buttonText="Sign up"
				/>
				<Card
					title="token 03"
					description="LEASH, limited to 107,646 tokens,
rewards our ecosystem's loyalists with
exclusive benefits. Holders enjoy perks
like BONE rewards, Shiboshi NFT
minting access, and early entry to Shib:
The Metaverse land sales."
					imageSrc={img03}
					link="/yield"
					buttonText="Sign up"
				/>
			</div>
		</>
	);
}
