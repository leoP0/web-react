import React, { Component } from "react"
import { Switch } from "react-router-dom"

import Left from "./Left"
import Right from "./Right"
import Header from "./Header"

const styles = {
	container: {
		height: "90vh"
	},
	grid: {
		height: "100%",
		padding: "10px 0px 10px 0px"
	},
	rightColumn:
		window.innerWidth >= 575.98 ? { maxHeight: "90%", overflow: "auto" } : {}
}

class App extends Component {
	render() {
		return (
			<Switch>
				<div className="ui container" style={styles.container}>
					<Header />
					<div className="ui middle aligned stackable grid" style={styles.grid}>
						<div className="six wide column">
							<Left />
						</div>
						<div className="ten wide column" style={styles.rightColumn}>
							<Right />
						</div>
					</div>
				</div>
			</Switch>
		)
	}
}

export default App
