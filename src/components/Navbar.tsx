import Image from "next/image"
import React, { useState } from "react"
import { CloseButton, MobileNav, NavbarContainer } from "./navbar.styles"
import Wrapper from "./Wrapper"

export default function Navbar() {
	const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

	return (
		<NavbarContainer>
			<div className="logo">
				<Image src="/img/logo.png" width={64} height={32} alt="logo" />
			</div>
			<nav className="lg-navigation">
				<a href="#" className="nav-link">
					Strona główna
				</a>
				<a href="#" className="nav-link">
					O nas
				</a>
				<a href="#" className="nav-link">
					Kontakt
				</a>
			</nav>
			<div className="burger" onClick={() => setIsNavbarOpen(true)}>
				<i className="fragment"></i>
				<i className="fragment"></i>
				<i className="fragment"></i>
			</div>
			{isNavbarOpen && (
				<MobileNav isNavbarOpen={isNavbarOpen} onClick={() => setIsNavbarOpen(false)}>
					<div className="container" onClick={e => e.stopPropagation()}>
						<CloseButton onClick={() => setIsNavbarOpen(false)}>
							<i className="fragment"></i>
							<i className="fragment"></i>
						</CloseButton>
						<a href="#" className="nav-link">
							Strona główna
						</a>
						<a href="#" className="nav-link">
							O nas
						</a>
						<a href="#" className="nav-link">
							Kontakt
						</a>
					</div>
				</MobileNav>
			)}
		</NavbarContainer>
	)
}
