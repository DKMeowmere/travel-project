import styled from "styled-components"

export const Container = styled.section`
	width: 100%;
	min-height: 912px;
	display: flex;
	align-items: center;
	background: linear-gradient(
		0deg,
		${({ theme }) => theme.colors.mainBg} 0%,
		${({ theme }) => theme.colors.mainBg} 40%,
		#fff 40%,
		#fff 100%
	);
`
export const Content = styled.div`
	width: 340px;
	margin: auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.colors.blackText};
	h2 {
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 1.1;
	}
	.text {
		margin-top: 60px;
		text-align: justify;
		font-size: 0.95rem;
		line-height: 1.6;
	}
	img {
		margin-top: 40px;
		width: 100% !important;
		height: 200px !important;
	}
	.link {
		margin-top: 20px;
		text-align: center;
		line-height: 1.6;
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.whiteText};
		a {
			text-decoration: underline;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.sm}) {
		width: 520px;
		img {
			height: 325px !important;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		width: 550px;
		img {
			height: 344px !important;
		}
	}
`
