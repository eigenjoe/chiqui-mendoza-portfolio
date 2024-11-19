// components/ui/NavListLink.tsx

"use client";

import React, { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface NavListAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	className?: string;
	submenu?: boolean;
}

const NavListAnchor: React.FC<NavListAnchorProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<a
			{...props}
			target="_blank"
			className={cn(
				"block px-4 py-2 rounded transition-colors",
				className
			)}
		>
			{children}
		</a>
	);
};

export default NavListAnchor;
