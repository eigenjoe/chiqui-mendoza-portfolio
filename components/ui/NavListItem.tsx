// components/ui/NavListItem.tsx

"use client";

import React, { useState, useId } from "react";
import { cn } from "@/lib/utils";
import NavList from "./NavList";

interface NavListItemProps extends React.HTMLAttributes<HTMLLIElement> {
	label: string;
	children?: React.ReactNode;
	className?: string;
	hasSubmenu?: boolean;
}

const NavListItem: React.FC<NavListItemProps> = ({
	label,
	children,
	className,
	hasSubmenu = false,
	...props
}) => {
	const [isOpen, setIsOpen] = useState(false); // Expanded by default
	const id = useId();

	const toggleSubmenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<li className={cn(className)} {...props}>
			{hasSubmenu ? (
				<>
					<button
						onClick={toggleSubmenu}
						className="w-full px-4 py-2 text-left text-gray-700 text-base hover:text-gray-900 focus:outline-none transition-colors flex justify-between items-center"
						aria-expanded={isOpen}
						aria-controls={`submenu-${id}`}
					>
						<span>{label}</span>
					</button>
					<div
						id={`submenu-${id}`}
						className={cn(
							"overflow-hidden transition-max-height duration-400 ease-in-out",
							isOpen
								? "max-h-96 opacity-100"
								: "max-h-0 opacity-0"
						)}
					>
						<NavList className="pl-4 mt-1">{children}</NavList>
					</div>
				</>
			) : (
				children
			)}
		</li>
	);
};

export default NavListItem;
