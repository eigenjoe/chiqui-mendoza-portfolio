// components/ui/NavListAnchor.tsx

"use client";

import React, { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NavListAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	className?: string;
	submenu?: boolean;
	onClick?: () => void; // Add onClick prop
}

const NavListAnchor: React.FC<NavListAnchorProps> = ({
	children,
	className,
	onClick,
	...props
}) => {
	return (
		<a
			{...props}
			target="_blank"
			rel="noopener noreferrer" // Added for security with external links
			onClick={onClick} // Trigger onClick when link is clicked
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
