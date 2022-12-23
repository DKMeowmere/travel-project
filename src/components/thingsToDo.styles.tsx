import styled from "styled-components"

export const Container = styled.section`
	width: 100%;
	background: linear-gradient(
		180deg,
		${({ theme }) => theme.colors.mainBg} 0%,
		${({ theme }) => theme.colors.mainBg} 15%,
		#fff 15%,
		#fff 100%
	);
`
export const CardsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 26px;
`
export const Card = styled.div`
	width: 100%;
	color: ${({ theme }) => theme.colors.blackText};
	padding-bottom: 26px;
	img {
		width: 100% !important;
		height: 360px !important;
	}
	h3 {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.2;
		margin-top: 34px;
	}
	p {
		font-size: 1.125rem;
		font-style: italic;
		line-height: 1.6;
		margin-top: 20px;
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.sm}) {
		img {
			height: 572px !important;
		}
		h3 {
			font-size: 1.8rem;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		width: calc(50% - 26px);
		img {
			height: 381px !important;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		width: calc(33.333% - 26px);
		img {
			height: 332px !important;
		}
	}
`
