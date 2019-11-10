import React, { Component } from "react"
import { educationInfo } from "../shared/Info"

const styles = {
	card: window.innerWidth >= 575.98 ? { width: "75%" } : {}
}

class Education extends Component {
	renderEducation = educationInfo => {
		return educationInfo.map(education => {
			const { title, description } = education

			return (
				<div className="ui raised orange centered card" style={styles.card}>
					<div className="content">
						<div className="header">{title}</div>
					</div>
					<div className="extra content">
						<div className="description">{description}</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="ui one cards">{this.renderEducation(educationInfo)}</div>
		)
	}
}

export default Education
