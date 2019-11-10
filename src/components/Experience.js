import React, { Component } from "react"
import { experienceInfo } from '../shared/Info'

const styles = {
	text: { marginLeft: "25px", marginRight: "25px" }
}

class Experience extends Component {
	renderExperience = experienceInfo => {
		return experienceInfo.map(experience => {
			const { title, meta, description, description1, description2 } = experience

			return (
				<div className="ui orange centered card">
					<div className="content">
						<div className="left aligned header">{title}</div>
						<div className="left aligned meta">{meta}</div>
						<div className="left aligned description">{description}</div>
						<p style={styles.text}>
						</p>
						<div className="left aligned description">{description1}</div>
						<p style={styles.text}>
						</p>
						<div className="left aligned description">{description2}</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			//<div className="ui stackable raised cards">
			<div className="ui one cards">
				{this.renderExperience(experienceInfo)}
			</div>
		)
	}
}

export default Experience
