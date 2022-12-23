import styled from "styled-components"

const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 340px;
  @media screen and (min-width: ${({ theme }) => theme.media.breakpoints.sm}) {
		max-width: 540px;
	}
  @media screen and (min-width: ${({ theme }) => theme.media.breakpoints.md}) {
		max-width: 720px;
	}
  @media screen and (min-width: ${({ theme }) => theme.media.breakpoints.lg}) {
		max-width: 940px;
	}
  @media screen and (min-width: ${({ theme }) => theme.media.breakpoints.xl}) {
		max-width: 1140px;
	}
`
export default Wrapper