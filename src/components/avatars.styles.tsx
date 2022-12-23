import styled from "styled-components"

export const Container = styled.section`
	width: 100%;
	background-color: #000;
`
export const ContentContainer = styled.div`
	padding: 70px 0 60px;
	color: ${({ theme }) => theme.colors.whiteText};
	text-align: center;
	h6 {
		text-transform: uppercase;
		font-size: 1rem;
		letter-spacing: 2px;
		font-weight: 500;
	}
	h3 {
		margin-top: 40px;
		line-height: 1.8;
		font-weight: normal;
		font-size: 1.5rem;
	}
	p {
		margin-top: 52px;
		line-height: 2;
		font-size: 1.125rem;
		a {
			text-decoration: underline;
		}
	}
	.link-button {
		display: block;
		width: 210px;
		margin: 55px auto 0px;
		padding: 18px 54px;
		color: #fff;
		border: #fff solid 2px;
		border-radius: 50px;
		text-transform: uppercase;
		font-size: 0.77rem;
		font-weight: 700;
		&:hover {
			color: ${({ theme }) => theme.colors.mainBg};
			background-color: #fff;
		}
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.media.breakpoints.sm}) {
		h3 {
			font-size: 2.25rem;
		}
	}
`
export const AvatarContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	.avatar {
		border-radius: 50%;
	}
`
