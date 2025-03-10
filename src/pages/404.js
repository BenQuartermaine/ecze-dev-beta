import React from "react"
import { Link } from "gatsby-plugin-modal-routing"
import ReactModal from "react-modal"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = props => (
	<Layout props={props}>
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		<Link to="/">Home</Link>
	</Layout>
)

export default NotFoundPage
