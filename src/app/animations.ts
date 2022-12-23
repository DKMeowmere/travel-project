export const fromLeft = {
	hidden: { opacity: 0, x: -200 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, delay: 0.5, viewport: { once: true } },
	},
}
export const fromRight = {
	hidden: { opacity: 0, x: 200 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, delay: 0.5, viewport: { once: true } },
	},
}

export const fromBottom = {
	hidden: { opacity: 0, y: 200 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: 0.5, viewport: { once: true } },
	},
}

export const fromTop = {
	hidden: { opacity: 0, y: -200 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: 0.5, viewport: { once: true } },
	},
}

export const scaleHeader = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: 0.75,
			viewport: { once: false },
		},
	},
}
export const scaleParagraph = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: 1,
			viewport: { once: false },
		},
	},
}
export const rotate = {
	hidden: { scale: 0, rotate: 180 },
	visible: {
		scale: 1,
		rotate: 0,
		transition: { duration: 1 },
	},
}
export const scale = {
	hidden: { scale: 0, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.75 },
	},
}
