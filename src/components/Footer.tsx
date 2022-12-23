import React from "react"
import { ContentContainer, Left, Right } from "./Footer.styles"
import Wrapper from "./Wrapper"
import { ImFacebook, ImTwitter } from "react-icons/im"
import { BsInstagram, BsLinkedin, BsPinterest } from "react-icons/bs"

export default function Footer() {
	return (
		<footer>
			<Wrapper>
				<ContentContainer>
					<Left>
						<h4> Sign up for the newsletter</h4>
						<p>
							Want to be the first to read our news? Subscribe to
							the newsletter to keep abreast of all events.
						</p>
						<form action="" onSubmit={e => e.preventDefault()}>
							<input
								type="email"
								placeholder="Enter a valid email"
							/>
							<button type="submit">Submit</button>
						</form>
						<div className="icons-container">
							<ImFacebook />
							<ImTwitter />
							<BsInstagram />
							<BsLinkedin />
							<BsPinterest />
						</div>
					</Left>
					<Right>
						<h3>Hours & Location</h3>
						<h5>
							14 E 12th St,
							<br />
							New York, NY 10007
							<br />
							(123) 456-2253
						</h5>
						<p className="time">
							Monday - Sunday <br />
							7:00am - 8:00pm
						</p>
						<p className="freepik-link">
							Image from <a href="#">Freepik</a>
						</p>
					</Right>
				</ContentContainer>
			</Wrapper>
		</footer>
	)
}
