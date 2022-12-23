import React from "react"
import { Container, TextContainer } from "./ocean.styles"
import Wrapper from "./Wrapper"
import { motion } from "framer-motion"
import { fromLeft, fromRight } from "../app/animations"

export default function Ocean() {
	return (
		<Container>
			<Wrapper>
				<TextContainer>
					<motion.h2
						variants={fromLeft}
						initial="hidden"
						whileInView="visible"
					>
						The Air Smells Ocean
					</motion.h2>
					<motion.p
						variants={fromRight}
						initial="hidden"
						whileInView="visible"
					>
						Whether you call it nature travel, sustainable travel or
						responsible ecotourism, there’s something incredibly
						potent, powerful, and cleansing about getting away from
						the hustle and bustle of the city.
					</motion.p>
				</TextContainer>
			</Wrapper>
		</Container>
	)
}
