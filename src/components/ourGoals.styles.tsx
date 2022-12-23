import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.section`
	width: 100%;
	background-image: url("/img/forest.jpg");
	background-size: cover;
	background-position: center;
	position: relative;
	z-index: -2;
	color: ${({ theme }) => theme.colors.whiteText};
	text-align: center;
	padding-bottom: 60px;
	.darker-background {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #0008;
	}
	h2 {
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 1.1;
		padding-top: 60px;
	}
	h4 {
		padding-top: 41px;
		font-weight: 700;
		font-size: 1.25rem;
		color: ${({ theme }) => theme.colors.mainBg};
		line-height: 1.2;
	}
	p {
		margin-top: 41px;
		line-height: 2;
		font-size: 1.125rem;
		a {
			text-decoration: underline;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.sm}) {
		font-size: 2.25rem;
	}
`

export const CardsContainer = styled(motion.div)`
	width: 100%;
	margin-top: 46px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`
export const Card = styled.div`
	width: 100%;
	border-radius: 20px;
	padding: 40px 20px;
	background-color: ${({ theme }) => theme.colors.mainBg}b3;
	h3 {
		font-size: 3rem;
		font-weight: 700;
	}
	p {
		font-size: 0.875rem;
		margin-top: 20px;
		color: #e9f2fa;
		line-height: 1.6;
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.sm}) {
		width: calc(50% - 20px);
		h3 {
			font-size: 4.0625rem;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		h3 {
			font-size: 4.5rem;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.lg}) {
		width: calc(25% - 20px);
		h3 {
			font-size: 3.75rem;
		}
	}
`
