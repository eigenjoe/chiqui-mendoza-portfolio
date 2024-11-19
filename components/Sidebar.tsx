// components/Sidebar.tsx

"use client";

import React from "react";
import Link from "next/link";
import NavList from "@/components/ui/NavList";
import NavListItem from "@/components/ui/NavListItem";
import NavListLink from "@/components/ui/NavListLink";
import NavListAnchor from "@/components/ui/NavListAnchor";
import { cn } from "@/lib/utils";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
		<aside
			className={cn(
				"fixed inset-y-0 left-0 w-96 bg-zinc-50 text-gray-700 transform transition-transform duration-300 ease-in-out z-50",
				{
					"translate-x-0": isOpen,
					"-translate-x-full": !isOpen,
					"md:translate-x-0 md:static md:inset-0": true, // Always visible on md and above
				}
			)}
		>
			<div className="flex flex-col h-full">
				<div className="ml-1 flex items-center justify-center h-16">
					<h1 className="text-3xl font-bold font-Syncopate text-gray-700 ">
						<Link href="/">Chiqui Mendoza</Link>
					</h1>
				</div>
				<nav className="flex-1 px-4 py-6">
					<NavList className="space-y-2">
						{navigationItems.map((item) => (
							<NavListItem
								key={item.name}
								label={item.name}
								hasSubmenu={!!item.children}
								className="text-gray-700 text-2xl"
							>
								{item.children ? (
									item.children.map((subItem) =>
										subItem.external ? (
											<NavListAnchor
												className="text-xl"
												key={subItem.name}
												href={subItem.href}
												onClick={onClose} // Close sidebar on link click
											>
												{subItem.name}
											</NavListAnchor>
										) : (
											<NavListLink
												className="text-2xl"
												key={subItem.name}
												href={subItem.href}
												submenu={true}
												onClick={onClose} // Close sidebar on link click
											>
												{subItem.name}
											</NavListLink>
										)
									)
								) : (
									<NavListLink
										href={item.href}
										onClick={onClose}
									>
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
