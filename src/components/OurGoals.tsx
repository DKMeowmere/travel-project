import React from "react"
import { fromBottom, fromTop } from "../app/animations"
import { Container, CardsContainer, Card } from "./ourGoals.styles"
import Wrapper from "./Wrapper"
import { motion } from "framer-motion"

export default function OurGoals() {
	return (
		<Container>
			<div className="darker-background"></div>
			<Wrapper>
				<motion.h2
					variants={fromTop}
					initial="hidden"
					whileInView="visible"
				>
					We are the best travel agency to improve your deals
				</motion.h2>
				<motion.h4
					variants={fromTop}
					initial="hidden"
					whileInView="visible"
				>
					We work directly for our clients and put client’s interests
					first.
				</motion.h4>
				<CardsContainer
					variants={fromTop}
					initial="hidden"
					whileInView="visible"
				>
					<Card>
						<h3>50%</h3>
						<p>
							Sample text. Click to select the text box. Click
							again or double click to start editing the text.
						</p>
					</Card>
					<Card>
						<h3>16%</h3>
						<p>
							Sample text. Click to select the text box. Click
							again or double click to start editing the text.
						</p>
					</Card>
					<Card>
						<h3>20%</h3>
						<p>
							Sample text. Click to select the text box. Click
							again or double click to start editing the text.
						</p>
					</Card>
					<Card>
						<h3>13%</h3>
						<p>
							Sample text. Click to select the text box. Click
							again or double click to start editing the text.
						</p>
					</Card>
				</CardsContainer>
				<motion.p
					variants={fromBottom}
					initial="hidden"
					whileInView="visible"
				>
					Image from <a href="#">Freepik</a>
				</motion.p>
			</Wrapper>
		</Container>
	)
}
