import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.section`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.mainBg};
`

export const CardsContainer = styled(motion.div)`
	width: 100%;
	display: flex;
	flex-flow: wrap row;
	justify-content: center;
	align-items: center;
	gap: 30px;
`
export const Card = styled.div`
	width: 100%;
  translate: 0 -25%;
	padding: 30px 10px;
	background-color: #fff;
	text-align: center;
	border-radius: 20px;
	.icon {
		display: block;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.mainBg};
		margin: auto;
		width: 89px;
		height: 89px;
		padding: 19px;
		svg {
			fill: #fff;
			width: 51px;
			height: 51px;
		}
	}
	h3 {
		margin-top: 25px;
		font-size: 1.5rem;
	}
	p {
		margin-top: 18px;
		font-size: 1rem;
		font-style: italic;
		color: #808080;
	}
	@media screen and (min-width: ${({ theme }) => theme.media.breakpoints.sm}) {
		width: calc(50% - 30px);
	}
	@media screen and (min-width: ${({ theme }) => theme.media.breakpoints.lg}) {
		width: calc(25% - 30px);
	}
`
