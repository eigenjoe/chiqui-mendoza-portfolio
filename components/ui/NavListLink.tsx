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
}

const NavListLink: React.FC<NavListLinkProps> = ({
	children,
	className,
	submenu = false,
	...props
}) => {
	const pathname = usePathname();
	const isActive = pathname === props.href;

	return (
		<Link {...props} passHref legacyBehavior>
			<a
				className={cn(
					"block px-4 py-2 rounded transition-colors",
					isActive
						? "text-gray-900 font-semibold"
						: "text-gray-700 hover:text-gray-900",
					submenu ? "text-sm" : "text-base",
					className
				)}
			>
				{children}
			</a>
		</Link>
	);
};

export default NavListLink;
