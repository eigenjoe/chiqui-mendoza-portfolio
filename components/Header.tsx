// components/Header.jsx

"use client";

import React from "react";
import { HiMenu } from "react-icons/hi"; // Using react-icons for the hamburger icon
import { cn } from "@/lib/utils";

const Header = ({ onToggle }) => {
	return (
		<header className="fixed top-0 left-0 right-0 h-16 bg-zinc-50 flex items-center px-4 shadow-md md:hidden z-50">
			<button
				onClick={onToggle}
				className="text-2xl text-gray-700 focus:outline-none"
				aria-label="Toggle sidebar"
			>
				<HiMenu />
			</button>
			<h1 className="ml-4 text-xl font-bold font-Syncopate text-black">
				Chiqui Mendoza
			</h1>
		</header>
	);
};

export default Header;
