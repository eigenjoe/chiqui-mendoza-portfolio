// components/ui/NavList.tsx

import React from "react";
import { cn } from "@/lib/utils";

interface NavListProps extends React.HTMLAttributes<HTMLUListElement> {
	children: React.ReactNode;
	className?: string;
}

const NavList: React.FC<NavListProps> = ({ children, className, ...props }) => {
	return (
		<ul className={cn("space-y-1", className)} {...props}>
			{children}
		</ul>
	);
};

export default NavList;
