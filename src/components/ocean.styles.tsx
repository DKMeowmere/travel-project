import styled from "styled-components"

export const Container = styled.section`
	width: 100%;
	background-image: url("/img/boat.jpg");
	background-size: cover;
	background-position: center;
	height: 620px;
`
export const TextContainer = styled.div`
	width: 100%;
	color: ${({ theme }) => theme.colors.whiteText};
	display: flex;
	flex-direction: column;
	h2 {
		font-size: 2.25rem;
		font-weight: 400;
		padding: 30px 10px;
		text-align: right;
	}
	p {
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 20px;
		padding: 30px 10px;
		line-height: 1.6;
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.sm}) {
		padding-top: 285px;
		h2 {
			font-size: 3rem;
			text-align: start;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		padding-top: 285px;
		flex-direction: row;
		h2 {
			width: 50%;
			padding: 30px;
			font-size: 3rem;
			text-align: end;
		}
		p {
			width: 50%;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.lg}) {
		padding-top: 383px;
	}
`
