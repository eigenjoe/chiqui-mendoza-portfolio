// components/Layout.tsx

import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex">
			<Sidebar />
			<main className="flex-1 ml-64 h-full overflow-auto">
				{children}
			</main>
		</div>
	);
};

export default Layout;
