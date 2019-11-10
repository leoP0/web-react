import React, { Component } from "react"
import { projectInfo } from "../shared/Info"
import { Link } from "react-router-dom"
import { Route } from "react-router-dom"

const styles = {
	icon: { height: "24px", width: "24px", marginRight: "10px" },
	list: { padding: "10px", marginBottom: window.innerWidth >= 575.98 ? "0px" : "30px" },
	text: { marginTop: "15px", fontWeight: "500", marginLeft: "20px", marginRight: "15px" }
}

class Projects extends Component {
	renderProjects = projectInfo => {
		return projectInfo.map(project => {
			const { title, icon, iconAlt, description } = project

			return (
				<div className="ui orange centered card" key={title}>
					<div className="content">
						<div className="ui header">{title}</div>
						<div className="left aligned" style={styles.text}>{description}</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="ui one cards" style={{ marginTop: "40px" }}>
					{this.renderProjects(projectInfo)}
				</div>
			</div>
		)
	}
}

export default Projects
