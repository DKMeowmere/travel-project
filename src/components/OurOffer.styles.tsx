import styled from "styled-components"

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 60px 0;
	flex-wrap: wrap;
	gap: 28px;
`
const Card = styled.div`
	width: 100%;
	min-height: 512px;
	position: relative;
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		min-height: 553px;
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.lg}) {
		min-height: 644px;
	}
`

export const ImageCard = styled(Card)<{ src: string }>`
	background-image: url("${({ src }) => src}");
	background-size: cover;
	background-position: center;
	text-align: center;
	color: #fff;
	.text-container {
		position: absolute;
		bottom: 0;
		background-color: #292d33;
		padding: 20px;
		h5 {
			margin-top: 20px;
			font-weight: 700;
			font-size: 1.25rem;
			line-height: 1.2;
		}
		p {
			margin: 20px;
			font-size: 1rem;
			line-height: 1.6;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		width: calc(50% - 28px);
		&:nth-child(2) {
			.text-container {
				bottom: auto;
			}
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.lg}) {
		width: calc(33.33333% - 28px);
	}
`
export const TextCard = styled(Card)`
	display: flex;
	flex-direction: column;
	padding: 20px;
	p {
		&:nth-child(1) {
			font-size: 1.125rem;
			font-weight: 700;
			line-height: 1.6;
		}
		&:nth-child(2) {
			font-size: 1rem;
			font-style: italic;
			line-height: 1.6;
			margin-top: 20px;
		}
		&:nth-child(3) {
			font-size: 1rem;
			line-height: 1.6;
			margin-top: 25px;
		}
		&:nth-child(4) {
			margin-top: 41px;
			line-height: 2;
			font-size: 1.125rem;
			letter-spacing: 1px;
			a {
				text-decoration: underline;
				cursor: pointer;
			}
		}
	}
	.link-button {
		display: block;
		margin-top: 34px;
		text-align: center;
		width: 197px;
		font-size: 0.875rem;
		letter-spacing: 2px;
		text-transform: uppercase;
		padding: 15px 45px;
		color: ${({ theme }) => theme.colors.whiteText};
		background-color: #000;
		border-radius: 50px;
		&:hover {
			background-color: ${({ theme }) => theme.colors.mainBg};
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.lg}) {
		width: calc(33.33333% - 28px);
		justify-content: space-evenly;
	}
`
