import React from "react"
import { Card, CardsContainer, Container } from "./aboutUsCards.styles"
import Wrapper from "./Wrapper"
import { FaSuitcaseRolling } from "react-icons/fa"
import { GiAirplaneDeparture, GiJourney } from "react-icons/gi"
import { MdPerson } from "react-icons/md"
import { motion } from "framer-motion"
import { fromBottom, scaleHeader, scaleParagraph } from "../app/animations"

export default function AboutUsCards() {
	return (
		<Container>
			<Wrapper>
				<CardsContainer
					initial="hidden"
					whileInView="visible"
					variants={fromBottom}
				>
					<Card>
						<i className="icon">
							<FaSuitcaseRolling />
						</i>
						<motion.h3 variants={scaleHeader}>Travel</motion.h3>
						<motion.p variants={scaleParagraph}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit nullam nunc justo sagittis suscipit ultrices.
						</motion.p>
					</Card>
					<Card>
						<i className="icon">
							<GiAirplaneDeparture />
						</i>
						<motion.h3 variants={scaleHeader}>Benefits</motion.h3>
						<motion.p variants={scaleParagraph}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit nullam nunc justo sagittis suscipit ultrices.
						</motion.p>
					</Card>
					<Card>
						<i className="icon">
							<MdPerson />
						</i>
						<motion.h3 variants={scaleHeader}>About us</motion.h3>
						<motion.p variants={scaleParagraph}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit nullam nunc justo sagittis suscipit ultrices.
						</motion.p>
					</Card>
					<Card>
						<i className="icon">
							<GiJourney />
						</i>
						<motion.h3 variants={scaleHeader}>Awards</motion.h3>
						<motion.p variants={scaleParagraph}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit nullam nunc justo sagittis suscipit ultrices.
						</motion.p>
					</Card>
				</CardsContainer>
			</Wrapper>
		</Container>
	)
}
