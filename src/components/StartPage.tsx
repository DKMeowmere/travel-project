import React from "react"
import { BackgroundContainer, ContentContainer } from "./startPage.styles"
import Wrapper from "./Wrapper"
import { motion } from "framer-motion"
import { fromLeft } from "../app/animations"

export default function StartPage() {
	return (
		<BackgroundContainer>
			<Wrapper>
				<ContentContainer>
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fromLeft}
					>
						<div className="card">
							<h1>Traveling is a unique life experience</h1>
							<p>
								Whether you wish to fly over deserts or ruined
								cities, we offer unique once-in-a-lifetime hot
								air balloon adventure travel experiences.
							</p>
							<p>
								Image from <a href="#">Freepik</a>
							</p>
							<a href="#" className="link-button">
								Learn more
							</a>
						</div>
					</motion.div>
				</ContentContainer>
			</Wrapper>
		</BackgroundContainer>
	)
}
