// components/Sidebar.tsx

"use client";

import React from "react";
import NavList from "@/components/ui/NavList";
import NavListItem from "@/components/ui/NavListItem";
import NavListLink from "@/components/ui/NavListLink";
import Link from "next/link";

const Sidebar: React.FC = () => {
	const navigationItems = [
		{
			name: "Selected Works",
			href: "/selected-works",
			children: [
				{ name: "Paintings", href: "/selected-works/paintings" },
				{ name: "Altars", href: "/selected-works/altars" },
				{ name: "Drawings", href: "/selected-works/drawings" },
			],
		},
		{
			name: "About",
			href: "/about",
			children: [
				{ name: "Biography", href: "/about/biography" },
				{ name: "Curriculum Vitae", href: "/about/cv" },
			],
		},
		{
			name: "News",
			href: "/news",
			children: [
				{ name: "2023", href: "/news/2023" },
				{ name: "2022", href: "/news/2022" },
				{ name: "2021", href: "/news/2021" },
			],
		},
		{
			name: "Instagram",
			href: "/instagram",
			children: [{ name: "Handle", href: "/instagram/handle" }],
		},
		{
			name: "Contact",
			href: "/contact",
		},
		{
			name: "Enquiries",
			href: "/enquiries",
		},
		{
			name: "Print Shop",
			href: "/print-shop",
		},
	];

	return (
		<aside className="fixed inset-y-0 left-0 w-64 bg-white text-gray-700">
			<div className="flex flex-col h-full">
				<div className="flex items-center justify-center h-16">
					<h1 className="text-3xl font-bold text-black">
						<Link href={"/"}>Chiqui Mendoza</Link>{" "}
					</h1>
				</div>
				<nav className="flex-1 px-4 py-6">
					<NavList>
						{navigationItems.map((item) => (
							<NavListItem
								key={item.name}
								label={item.name}
								hasSubmenu={!!item.children}
								className="text-gray-700"
							>
								{item.children ? (
									item.children.map((subItem) => (
										<NavListLink
											key={subItem.name}
											href={subItem.href}
											submenu={true}
										>
											{subItem.name}
										</NavListLink>
									))
								) : (
									<NavListLink href={item.href}>
										{item.name}
									</NavListLink>
								)}
							</NavListItem>
						))}
					</NavList>
				</nav>
				<div className="px-4 py-4">
					{/* Optional footer or additional links */}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
