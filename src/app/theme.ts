type Theme = {
	colors: {
		mainBg: string
		whiteText: string
		blackText: string
	}
	media: {
		breakpoints: {
			xs: string
			sm: string
			md: string
			lg: string
			xl: string
		}
	}
}

const theme: Theme = {
	colors: {
		mainBg: "#2cccc4",
		whiteText: "#fff",
		blackText: "#000",
	},
	media: {
		breakpoints: {
			xs: "0px",
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
		},
	},
}

export default theme
