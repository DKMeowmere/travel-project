import AboutAgency from "../components/AboutAgency"
import AboutUsCards from "../components/AboutUsCards"
import Avatars from "../components/Avatars"
import Destinations from "../components/Destinations"
import Ocean from "../components/Ocean"
import OurGoals from "../components/OurGoals"
import OurOffer from "../components/OurOffer"
import StartPage from "../components/StartPage"
import ThingsToDo from "../components/ThingsToDo"

export default function Home() {
	return (
		<main>
			<StartPage />
			<AboutUsCards />
			<Avatars />
			<Destinations />
			<Ocean />
			<OurGoals />
			<OurOffer />
			<AboutAgency />
			<ThingsToDo />
		</main>
	)
}
