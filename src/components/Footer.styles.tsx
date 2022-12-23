import styled from "styled-components"

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	color: ${({ theme }) => theme.colors.blackText};
	margin: 27px 0 55px;
`

export const Left = styled.section`
	width: 100%;
	padding: 30px 30px 30px 0;
	h4 {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.2;
	}
	p {
		margin-top: 20px;
		font-size: 1rem;
		line-height: 1.6;
	}
	form {
		margin-top: 30px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		input {
			all: unset;
			width: 100%;
			padding: 10px 12px;
			border-bottom: 2px solid ${({ theme }) => theme.colors.blackText};
		}
		button {
			margin-top: 16px;
			width: 100%;
			border: none;
			border-radius: 50px;
			text-transform: uppercase;
			font-weight: 700;
			font-family: inherit;
			padding: 15px 30px;
			cursor: pointer;
			color: ${({ theme }) => theme.colors.whiteText};
			background-color: ${({ theme }) => theme.colors.mainBg};
			&:hover {
				background-color: #000;
			}
		}
	}
	.icons-container {
		margin-top: 46px;
		display: flex;
		gap: 17px;
		svg {
			width: 28px;
			height: 28px;
			cursor: pointer;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		width: 50%;
		form {
			flex-wrap: nowrap;
			input {
				width: 70%;
			}
			button {
				width: 30%;
			}
		}
	}
`
export const Right = styled.section`
	width: 100%;
	padding: 30px 10px;
	h3 {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.2;
	}
	h5 {
		margin-top: 30px;
		line-height: 1.6;
		font-size: 1.5rem;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.mainBg};
		text-decoration: underline;
		cursor: pointer;
		&:hover {
			color: ${({ theme }) => theme.colors.blackText};
		}
	}
	.time {
		font-size: 1.25rem;
		margin-top: 30px;
		line-height: 1.6;
	}
	.freepik-link {
		margin-top: 33px;
		line-height: 2;
		font-size: 1rem;
		a {
			text-decoration: underline;
			font-style: italic;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.md}) {
		width: 50%;
	}
`
