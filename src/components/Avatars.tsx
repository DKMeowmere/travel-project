import Image from "next/image"
import React from "react"
import { AvatarContainer, Container } from "./avatars.styles"
import { ContentContainer } from "./avatars.styles"
import Wrapper from "./Wrapper"
import { motion } from "framer-motion"
import { fromTop, rotate, scale } from "../app/animations"

export default function Avatars() {
	return (
		<Container>
			<Wrapper>
				<ContentContainer>
					<motion.h6
						initial="hidden"
						whileInView="visible"
						variants={fromTop}
					>
						Project Experience
					</motion.h6>
					<AvatarContainer>
						<motion.div
							initial="hidden"
							whileInView="visible"
							variants={rotate}
						>
							<Image
								className="avatar"
								width={288}
								height={288}
								src="/img/man.jpg"
								alt="man"
							/>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							variants={rotate}
						>
							<Image
								className="avatar"
								width={288}
								height={288}
								src="/img/coast.jpg"
								alt="coast"
							/>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							variants={rotate}
						>
							<Image
								className="avatar"
								width={288}
								height={288}
								src="/img/boats.jpg"
								alt="boats"
							/>
						</motion.div>
					</AvatarContainer>
					<motion.h3
						initial="hidden"
						whileInView="visible"
						variants={rotate}
					>
						In pellentesque massa placerat duis ultricies. Mattis
						molestie a iaculis at. Lorem ipsum dolor sit amet
						consectetur. Et ligula ullamcorper malesuada proin
						libero nunc consequat interdum varius orci nulla.
					</motion.h3>
					<motion.p
						initial="hidden"
						whileInView="visible"
						variants={fromTop}
					>
						Images from <a href="#">Freepik</a>
					</motion.p>
					<motion.a
						href="#"
						className="link-button"
						initial="hidden"
						whileInView="visible"
						variants={scale}
					>
						Learn more
					</motion.a>
				</ContentContainer>
			</Wrapper>
		</Container>
	)
}
