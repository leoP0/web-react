import React, { Component } from "react"
import { bioInfo } from '../shared/Info'

const styles = {
	text: { marginLeft: "25px", marginRight: "25px" }
}

class Biography extends Component {
	renderExperience = bioInfo => {
		return bioInfo.map(bio => {
			const { title, meta, description } = bio

			return (
				<div className="ui orange centered card">
					<div className="content">
						<div className="center aligned header">{title}
						</div>
					</div>
						<p className="left aligned" style={styles.text}>
							I'm Electrical and Computer Engineer, born and raised in Guatemala.
							I'm a dedicated father of 2 children and husband to a beatiful wife.
							My oldest son is 4yrs old and my yougest son is 1yr old. I look
							forward to wake up every day and see my kids grow up to be a better
							humans.
						</p>
						<p className="left aligned" style={styles.text}>
							In my free time I enjoy playing and watching soccer. I'm a huge
							fan of the sport, enjoy going to the stadioum and scream my ears out.
							The league I enjoy watching the most is the Champions League. In
							the past I have also coached soccer ranging in ages of 9 yr olds - High
							School Varsity teams. Soccer is not only sprot I like to watch I
							enjoy watching Boxing and Baseball.
						</p>
						<p className="left aligned" style={styles.text}>
							As engineer, I enjoy working on technical tasks, learning, and
							accomplishing challenging tasks. My goal is to contribute as much as
							possible either independently or as a team member. Some of the
							skills sets I have are troubleshooting, embedded programing,
							comprehension of IC analog design and layout, circuit design, DC-DC
							conversion efficiency and communication.
						</p>
						<p style={styles.text}>

						</p>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="ui one cards">
				{this.renderExperience(bioInfo)}
			</div>
		)
	}
}

export default Biography
