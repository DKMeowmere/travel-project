import styled from "styled-components"
import { motion } from "framer-motion"

export const BackgroundContainer = styled.section`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.mainBg};
`
export const ContentContainer = styled.section`
	width: 100%;
	text-align: center;
	padding: 60px 0 59px;
	color: ${({ theme }) => theme.colors.whiteText};
	h2 {
		font-size: 3rem;
		font-weight: 700;
	}
	p {
		margin: 24px auto 0;
		line-height: 1.6;
		max-width: 540px;
	}
`
export const CardsContainer = styled.div`
	margin-top: 41px;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 16px;
`
export const Card = styled(motion.div)`
	width: 100%;
	background-color: #fff;
	padding: 30px 20px;
	border-radius: 20px;
	border-top: 10px solid #adf6f2;
	color: ${({ theme }) => theme.colors.blackText};
	.avatar {
		margin: auto;
		border-radius: 50%;
	}
	h4 {
		font-size: 1.875rem;
		margin-top: 20px;
		font-weight: 700;
	}
	p {
		margin-top: 20px;
		font-style: italic;
		line-height: 1.8;
	}
	a {
		display: block;
		margin-top: 30px;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 0.875rem;
		text-decoration: underline;
		&:hover {
			color: #e2767b;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		width: calc(50% - 32px);
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.lg}) {
		width: calc(25% - 32px);
		img{
			width: 100% !important;
			height: 177px !important;
		}
		
	}
`
