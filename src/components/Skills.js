import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"
import { skillsInfo } from "../shared/Info"

const styles = {
	label: { 
		"& .ui.orange.labels .label, a.ui.orange.label": {
			color: "black !important"
		},
		"& .ui.orange.labels .label:hover, a.ui.orange.label:hover": {
		backgroundColor: "#000000 !important",
		color: "#f2711c !important" }
	},
	span: { color: "black" }
}

class Skills extends Component {
	renderSkills = skillsInfo => {
		return skillsInfo.map(skill => (
			<span key={skill} className="ui label">
				<span style={styles.span}>{skill}</span>
			</span>
		))
	}

	render() {
		return (
			<div className={this.props.classes.label}>
				<div className="ui big orange labels">
					{this.renderSkills(skillsInfo)}
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Skills)
