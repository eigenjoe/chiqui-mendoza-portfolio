// components/Sidebar.tsx

"use client";

import React from "react";
import NavList from "@/components/ui/NavList";
import NavListItem from "@/components/ui/NavListItem";
import NavListLink from "@/components/ui/NavListLink";
import Link from "next/link";
import NavListAnchor from "./ui/NavListAnchor";

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
			children: [
				{
					name: "@chiquimendozastudio",
					href: "https://www.instagram.com/chiquimendozastudio",
					external: true,
				},
			],
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
		<aside className="fixed inset-y-0 left-0 w-96 bg-zinc-50 text-gray-700">
			<div className="flex flex-col h-full">
				<div className="flex items-center justify-center h-16">
					<h1 className="text-2xl font-bold font-Syncopate text-black">
						<Link href={"/"}>Chiqui Mendoza</Link>{" "}
					</h1>
				</div>
				<nav className="flex-1 px-4 py-6 text-2lx">
					<NavList className="">
						{navigationItems.map((item) => (
							<NavListItem
								key={item.name}
								label={item.name}
								hasSubmenu={!!item.children}
								className="text-gray-700 "
							>
								{item.children ? (
									item.children.map((subItem) =>
										subItem.external ? (
											<NavListAnchor
												key={subItem.name}
												href={subItem.href}
											>
												{subItem.name}
											</NavListAnchor>
										) : (
											<NavListLink
												key={subItem.name}
												href={subItem.href}
												submenu={true}
											>
												{subItem.name}
											</NavListLink>
										)
									)
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
					<h2>Rights reserved Chiqui Mendoza 2025</h2>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
