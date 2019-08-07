import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Underline } from "../components/Underline"
import {
	HeaderText,
	BodyText,
	SubheaderText,
	colors,
	lineWidths,
	BackgroundColor,
	media,
} from "../utilities"

export const AboutContentWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	padding: 0em;
	max-width: 960px;
	margin: 0 auto;

	${media.med`
		padding: 0em 1em;
	`}
`

export const SectionWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	// overflow: hidden;
	padding: 2em 0em;
	grid-gap: 1em;

	${media.med`
		grid-template-columns: 1fr;
	`}
`

const AboutImage = styled.div`
	margin-bottom: 0em;
	// background-size: cover;
	// background-repeat: no-repeat;
	// background-position: 50% 50%;
	${media.med`
		order: 2;
	`}
`

const AboutHeaderWrapper = styled.div`
	padding-top: 3em;
`

const AccentWrapper = styled.div`
	max-width: 960px;
	background: white;
	padding: 3em;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);

	${media.med`
		padding: 2em;
	`}
`
const BodyTextItalic = styled(BodyText)`
	font-style: italic;
	text-align: center;
`

const About = props => (
	<StaticQuery
		query={graphql`
			query AboutPageQuery {
				contentfulAsset(title: { eq: "readBlogImage" }) {
					description
					fluid(maxWidth: 1000) {
						...GatsbyContentfulFluid
					}
				}
				contentfulAboutPage(
					id: { eq: "c53ad837-16d2-51ef-a8bc-07ec40db721f" }
				) {
					section1 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage1 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
					accentQuote1
					section2 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage2 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
					section3 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage3 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
					section4 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage4 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
					accentQuote2
					section5 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage5 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		`}
		render={data => (
			<>
				<BackgroundColor color={colors.almostWhite}>
					<Layout props={props}>
						<SEO title="About" />

						<AboutContentWrapper>
							<AboutHeaderWrapper>
								<HeaderText>
									<Underline
										size={lineWidths.ctaUnderline}
										color={colors.primary}
									>
										Our story
									</Underline>
								</HeaderText>
							</AboutHeaderWrapper>
							<SectionWrapper>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section1.childMarkdownRemark
												.html,
									}}
								/>
								<AboutImage>
									<Img
										fluid={data.contentfulAboutPage.sectionImage1.fluid}
										style={{ maxHeight: "50vh" }}
									/>
									<BodyTextItalic>
										{data.contentfulAboutPage.sectionImage1.description}
									</BodyTextItalic>
								</AboutImage>
							</SectionWrapper>

							{/* ######### ACCENT AQUOTE  */}
							<AccentWrapper>
								<SubheaderText
									dangerouslySetInnerHTML={{
										__html: data.contentfulAboutPage.accentQuote1,
									}}
								/>
							</AccentWrapper>
							<SectionWrapper>
								<AboutImage>
									<Img
										fluid={data.contentfulAboutPage.sectionImage2.fluid}
										style={{ maxHeight: "50vh" }}
									/>
									<BodyTextItalic>
										{data.contentfulAboutPage.sectionImage2.description}
									</BodyTextItalic>
								</AboutImage>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section2.childMarkdownRemark
												.html,
									}}
								/>
							</SectionWrapper>

							<SectionWrapper>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section3.childMarkdownRemark
												.html,
									}}
								/>
								<AboutImage>
									<Img
										fluid={data.contentfulAboutPage.sectionImage3.fluid}
										style={{ maxHeight: "50vh" }}
									/>
									<BodyTextItalic>
										{data.contentfulAboutPage.sectionImage3.description}
									</BodyTextItalic>
								</AboutImage>
							</SectionWrapper>

							<SectionWrapper>
								<AboutImage>
									<Img
										fluid={data.contentfulAboutPage.sectionImage4.fluid}
										style={{ maxHeight: "50vh" }}
									/>
									<BodyTextItalic>
										{data.contentfulAboutPage.sectionImage4.description}
									</BodyTextItalic>
								</AboutImage>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section4.childMarkdownRemark
												.html,
									}}
								/>
							</SectionWrapper>
							{/* ######### ACCENT AQUOTE  */}
							<AccentWrapper>
								<SubheaderText
									dangerouslySetInnerHTML={{
										__html: data.contentfulAboutPage.accentQuote2,
									}}
								/>
							</AccentWrapper>

							<SectionWrapper>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section5.childMarkdownRemark
												.html,
									}}
								/>
								<AboutImage>
									<Img
										fluid={data.contentfulAboutPage.sectionImage5.fluid}
										style={{ maxHeight: "50vh" }}
									/>
									<BodyTextItalic>
										{data.contentfulAboutPage.sectionImage5.description}
									</BodyTextItalic>
								</AboutImage>
							</SectionWrapper>
						</AboutContentWrapper>
					</Layout>
				</BackgroundColor>
			</>
		)}
	/>
)

export default About
