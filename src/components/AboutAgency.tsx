import Image from "next/image"
import React from "react"
import { Container, Content } from "./aboutAgency.styles"

export default function AboutAgency() {
	return (
		<Container>
			<Content>
				<h2>About Agency</h2>
				<p className="text">
					Adipiscing bibendum est ultricies integer quis auctor elit.
					Eget nunc scelerisque viverra mauris in. Volutpat est velit
					egestas dui id. Viverra suspendisse potenti nullam ac tortor
					vitae purus faucibus ornare. Nulla pharetra diam sit amet
					nisl. Lorem ipsum dolor sit amet consectetur adipiscing
					elit. Tempus quam pellentesque nec nam aliquam sem et. Nunc
				</p>
				<Image
					width={0}
					height={0}
					src="/img/couple.jpg"
          alt="couple"
          unoptimized
				/>
				<p className="link">
					Image from <a href="#">Freepik</a>
				</p>
			</Content>
		</Container>
	)
}
