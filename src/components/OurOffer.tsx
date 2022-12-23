import React from "react"
import { ImageCard, ContentContainer, TextCard } from "./OurOffer.styles"
import Wrapper from "./Wrapper"

export default function OurOffer() {
	return (
		<section>
			<Wrapper>
				<ContentContainer>
					<ImageCard src="/img/mountain_lake.jpg">
						<div className="text-container">
							<h5>Hiking, kayaking, biking</h5>
							<p>
								Sample text. Click to select the text box. Click
								again or double click to start editing the text.
							</p>
						</div>
					</ImageCard>
					<ImageCard src="/img/northern_landscape.jpg">
						<div className="text-container">
							<h5>Natural Habitat Adventures</h5>
							<p>
								Sample text. Click to select the text box. Click
								again or double click to start editing the text.
							</p>
						</div>
					</ImageCard>
					<TextCard>
						<p>
							Nature travel offers the thrill of discovering
							something new, or at the very least, something only
							a fraction of people have seen in person.
						</p>
						<p>
							Mus mauris vitae ultricies leo. Lobortis mattis
							aliquam faucibus purus in massa. Id aliquet risus
							feugiat in.
						</p>
						<p>
							Vehicula ipsum a arcu cursus vitae congue mauris. Ut
							enim blandit volutpat maecenas volutpat blandit.
						</p>
						<p>
							Image from <a className="">Freepik</a>
						</p>
						<a href="#" className="link-button">
							Learn more
						</a>
					</TextCard>
				</ContentContainer>
			</Wrapper>
		</section>
	)
}
