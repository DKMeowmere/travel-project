import "../../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import theme from "../app/theme"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	)
}
