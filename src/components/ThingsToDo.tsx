import Image from "next/image"
import React from "react"
import { Card, CardsContainer, Container } from "./thingsToDo.styles"
import Wrapper from "./Wrapper"

export default function ThingsToDo() {
	return (
		<Container>
			<Wrapper>
				<CardsContainer>
					<Card>
						<Image
							width={0}
							height={0}
							alt="sea cliffs"
							src="/img/cliff.jpg"
							unoptimized
						/>
						<h3>Sea Travel</h3>
						<p>
							Sample text. Click to select the text box. Click
							again or double click to start editing the text.
						</p>
					</Card>
					<Card>
						<Image
							width={0}
							height={0}
							alt="campfire"
							src="/img/campfire.jpg"
							unoptimized
						/>
						<h3>Camping</h3>
						<p>
							Sample text. Click to select the text box. Click
							again or double click to start editing the text.
						</p>
					</Card>
					<Card>
						<Image
							width={0}
							height={0}
							alt="women hiking"
							src="/img/women.jpg"
							unoptimized
						/>
						<h3>Hiking</h3>
						<p>
							Sample text. Click to select the text box. Click
							again or double click to start editing the text.
						</p>
					</Card>
				</CardsContainer>
			</Wrapper>
		</Container>
	)
}
