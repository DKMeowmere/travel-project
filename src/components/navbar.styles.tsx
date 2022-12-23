import styled from "styled-components"

type NavbarProps = {
	isNavbarOpen: boolean
}

export const NavbarContainer = styled.header`
	width: 100%;
	max-width: 340px;
	margin: auto;
	min-height: 80px;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	.lg-navigation {
		display: none;
	}
	.burger {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 5px;
		cursor: pointer;
		.fragment {
			width: 25px;
			height: 3px;
			background-color: #000;
		}
		&:hover {
			.fragment {
				background-color: #db565c;
			}
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.media.breakpoints.sm}) {
		max-width: 540px;
	}
	@media screen and (min-width: ${({ theme }) => theme.media.breakpoints.md}) {
		max-width: 940px;
		.lg-navigation {
			display: block;
			.nav-link {
				color: ${({ theme }) => theme.colors.blackText};
				margin: 0 20px;
				font-size: 1rem;
				&:hover {
					color: #dd5d62;
				}
			}
		}
		.burger {
			display: none;
		}
	}
`

export const MobileNav = styled.nav<NavbarProps>`
	position: fixed;
	z-index:10;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: #000c;
	.container {
		width: 60%;
		height: 100vh;
		background-color: #000;
		display: flex;
		flex-direction: column;
		padding: 20px 12px;
		.nav-link {
			color: ${({ theme }) => theme.colors.whiteText};
			align-self: center;
			margin-top: 20px;
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.media.breakpoints.md}) {
		display: none;
	}
`
export const CloseButton = styled.div`
	position: relative;
	width: 30px;
	height: 30px;
	cursor: pointer;
	align-self: flex-end;
	.fragment {
		width: 26px;
		height: 2px;
		position: absolute;
		border-radius: 2px;
		background-color: #fff;
		top: 16px;
		&:first-child {
			rotate: 45deg;
			left: 2px;
		}
		&:nth-child(2) {
			rotate: -45deg;
			right: 2px;
		}
	}
`
