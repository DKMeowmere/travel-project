import styled from "styled-components"

export const BackgroundContainer = styled.section`
	width: 100%;
	background-image: url("/img/ballon.jpg");
	background-size: cover;
	background-position: center;
`

export const ContentContainer = styled.section`
	width: 100%;
	height: 897px;
	padding-top: 270px;
	.card {
		width: 340px;
		min-height: 454px;
		background-color: #000000d8;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		padding: 30px 20px;
		border-radius: 20px;
		text-align: center;
		h1 {
			color: ${({ theme }) => theme.colors.mainBg};
			font-weight: normal;
			font-size: 1.5rem;
		}
		p {
			color: ${({ theme }) => theme.colors.whiteText};
			margin-top: 20px;
			font-size: 1.125rem;
			line-height: 1.8;
			a {
				color: ${({ theme }) => theme.colors.mainBg};
				text-decoration: underline;
			}
		}
		.link-button {
			display: block;
			margin: 30px auto 0;
			width: 181px;
			padding: 15px 40px;
			color: ${({ theme }) => theme.colors.mainBg};
			border: ${({ theme }) => theme.colors.mainBg} solid 2px;
			border-radius: 50px;
			text-transform: uppercase;
			font-size: 0.77rem;
			font-weight: 700;
			&:hover {
				color: ${({ theme }) => theme.colors.whiteText};
				background-color: ${({ theme }) => theme.colors.mainBg};
			}
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.sm}) {
		padding-top: 240px;
		.card {
			margin: 0 0 0 20px;
			text-align: start;
			align-items: flex-start;
			width: 468px;
			h1 {
				font-size: 2.75rem;
			}
			.link-button {
				margin: 30px 0 0;
				width: 181px;
				padding: 15px 40px;
				color: ${({ theme }) => theme.colors.mainBg};
				border: ${({ theme }) => theme.colors.mainBg} solid 2px;
				border-radius: 50px;
				text-transform: uppercase;
			}
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		padding-top: 166px;
		.card {
			width: 664px;
		}
	}
`
