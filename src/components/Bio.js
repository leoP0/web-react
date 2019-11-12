import React, { Component } from "react"
import { bioInfo } from '../shared/Info'

const styles = {
	text: { marginLeft: "25px", marginRight: "25px" }
}

class Biography extends Component {
	renderExperience = bioInfo => {
		return bioInfo.map(bio => {
			const { title } = bio

			return (
				<div className="ui orange centered card">
					<div className="content">
						<div className="center aligned header">{title}
						</div>
					</div>
						<p className="left aligned" style={styles.text}>
							I'm an Electrical and Computer Engineer, born and raised in Guatemala. 
							I'm a dedicated father of 2 children and husband to a beautiful wife. 
							My oldest son is 4yrs old and my youngest son is 1yr old. I look forward 
							to waking up every day and see my kids grow up to be better humans.
						</p>
						<p className="left aligned" style={styles.text}>
							In my free time I enjoy playing and watching soccer. I'm a huge fan of the 
							sport and enjoy going to the stadium and scream my head off. The league I 
							enjoy watching the most is the Champions League. In the past I have also 
							coached soccer ranging in ages of 9yr old – High School Varsity teams. 
							Soccer is not only sport I like to watch or practice; I also enjoy hiking, 
							watching boxing and baseball.
						</p>
						<p className="left aligned" style={styles.text}>
							As an engineer, I enjoy working on technical tasks, learning, and 
							accomplishing challenging tasks. My goal is to contribute as much as possible
							either independently or as a team member. Some of the skills sets I have are: 
							troubleshooting, embedded programing, comprehension of IC analog design and 
							layout, circuit design and DC-DC conversion efficiency.
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
