// tailwind.config.js

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}", // If you have a pages directory
		// Add other paths as needed
	],
	theme: {
		extend: {
			transitionProperty: {
				transform: "transform",
				"max-height": "max-height",
				opacity: "opacity",
			},
			maxHeight: {
				"0": "0",
				"96": "24rem",
			},
			opacity: {
				"0": "0",
				"100": "1",
			},
			fontFamily: {
				Playfair: ["var(--font-playfair-display)"],
				Syncopate: ["var(--font-syncopate)"],
			},
		},
	},
	plugins: [],
};
