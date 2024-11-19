// components/ui/NavListLink.tsx

"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavListLinkProps extends LinkProps {
	children: React.ReactNode;
	className?: string;
	submenu?: boolean;
	onClick?: () => void; // Add onClick prop
}

const NavListLink: React.FC<NavListLinkProps> = ({
	children,
	className,
	submenu = false,
	onClick,
	...props
}) => {
	const pathname = usePathname();
	const isActive = pathname === props.href;

	return (
		<Link {...props} passHref legacyBehavior>
			<a
				onClick={onClick} // Trigger onClick when link is clicked
				className={cn(
					className,
					"block px-4 py-2 rounded transition-colors text-2xl",
					isActive
						? "text-gray-900 font-semibold"
						: "text-gray-700 hover:text-gray-900",
					submenu ? "text-sm" : "text-base"
				)}
			>
				{children}
			</a>
		</Link>
	);
};

export default NavListLink;
