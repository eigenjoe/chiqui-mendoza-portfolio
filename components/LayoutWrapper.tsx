// components/LayoutWrapper.jsx

"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const LayoutWrapper = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	// Handlers to open and close the sidebar
	const handleSidebarOpen = () => setSidebarOpen(true);
	const handleSidebarClose = () => setSidebarOpen(false);
	const handleSidebarToggle = () => setSidebarOpen((prev) => !prev);

	return (
		<>
			{/* Header with hamburger button */}
			<Header onToggle={handleSidebarToggle} />

			{/* Sidebar with open/close state */}
			<Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />

			{/* Overlay when sidebar is open on mobile */}
			{sidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
					onClick={handleSidebarClose}
				></div>
			)}

			{/* Main Content */}
			<main className="flex-1 h-full bg-zinc-50 overflow-auto md:ml-96">
				{children}
			</main>
		</>
	);
};

export default LayoutWrapper;
