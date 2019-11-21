import React, { Component } from "react"
import { 
	BrowserRouter,
	Router,
	Switch,
	Route
} from "react-router-dom"


import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import Education from "./Education"
import Biography from "./Bio"

const styles = {
	segment: window.innerWidth >= 575.98 ? {} : { paddingBottom: "5rem" }
}

class Right extends Component {
	render() {
		return (
				<div className="ui center aligned basic segment" style={styles.segment}>
					<Switch>
						<Route path="/" exact component={Education}/>
						<Route path="/education" component={Education}/>
						<Route path="/experience" component={Experience}/>
						<Route path="/projects" component={Projects}/>
						<Route path="/skills" component={Skills}/>
						<Route path="/about" component={Biography}/>
					</Switch>
				</div>			
		)
	}
}

export default Right
