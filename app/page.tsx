// app/page.tsx

import React from "react";
import Image from "next/image";

export default function Home() {
	return (
		<div className=" relative h-screen w-full">
			<Image
				src="/images/IMG_2098.jpg" // Ensure this path is correct
				alt="Main Visual"
				fill
				className="object-contain"
				priority // Optional: Loads the image eagerly
			/>
		</div>
	);
}
