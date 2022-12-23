import Image from "next/image"
import React from "react"
import { fromLeft, scale } from "../app/animations"
import {
	BackgroundContainer,
	Card,
	CardsContainer,
	ContentContainer,
} from "./destinations.style"
import Wrapper from "./Wrapper"
import { motion } from "framer-motion"

export default function Destinations() {
	return (
		<BackgroundContainer>
			<Wrapper>
				<ContentContainer>
					<motion.h2
						initial="hidden"
						whileInView="visible"
						variants={scale}
					>
						Destinations to Inspire Adventure
					</motion.h2>
					<motion.p
						initial="hidden"
						whileInView="visible"
						variants={fromLeft}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Imperdiet sed euismod nisi porta lorem
						mollis aliquam.
					</motion.p>
					<CardsContainer>
						<Card
							initial="hidden"
							whileInView="visible"
							variants={scale}
						>
							<Image
								src="/img/palms.jpg"
								alt="bora bora"
								width={260}
								height={260}
								className="avatar"
							/>
							<h4>Bora Bora</h4>
							<p>
								Sample text. Click to select the text box. Click
								again or double click to start editing the text.
								Excepteur sint occaecat cupidatat non proident.
							</p>
							<a href="#">More</a>
						</Card>
						<Card
							initial="hidden"
							whileInView="visible"
							variants={scale}
						>
							<Image
								src="/img/boats.jpg"
								alt="Malaysia"
								width={260}
								height={260}
								className="avatar"
							/>
							<h4>Malaysia</h4>
							<p>
								Sample text. Click to select the text box. Click
								again or double click to start editing the text.
								Excepteur sint occaecat cupidatat non proident.
							</p>
							<a href="#">More</a>
						</Card>
						<Card
							initial="hidden"
							whileInView="visible"
							variants={scale}
						>
							<Image
								src="/img/beach.jpg"
								alt="New Caledonia"
								width={260}
								height={260}
								className="avatar"
							/>
							<h4>New Caledonia</h4>
							<p>
								Sample text. Click to select the text box. Click
								again or double click to start editing the text.
								Excepteur sint occaecat cupidatat non proident.
							</p>
							<a href="#">More</a>
						</Card>
						<Card
							initial="hidden"
							whileInView="visible"
							variants={scale}
						>
							<Image
								src="/img/sunny_beach.jpg"
								alt="Indonesia"
								width={260}
								height={260}
								className="avatar"
							/>
							<h4>Indonesia</h4>
							<p>
								Sample text. Click to select the text box. Click
								again or double click to start editing the text.
								Excepteur sint occaecat cupidatat non proident.
							</p>
							<a href="#">More</a>
						</Card>
					</CardsContainer>
				</ContentContainer>
			</Wrapper>
		</BackgroundContainer>
	)
}
