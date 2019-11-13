import React, { Component } from "react"
import ReactTooltip from "react-tooltip"
import { CopyToClipboard } from "react-copy-to-clipboard"

import LinkedInIcon from "../icons/linkedin.svg"
import GithubIcon from "../icons/github.svg"
import Face from "../images/leo.jpg"
import GoToPage from "../icons/go-to-page.png"

const styles = {
	list: { padding: "10px" },
	icon: { height: "32px", width: "32px" },
	email: { marginTop: "10px" },
	segment: { border: "1.5px solid", boxShadow: "5px 5px", paddingBottom: "0px" },
	label: { borderRadius: "0px" },
	span: { color: "black" },
	text: { fontWeight: "700" }
}

class Left extends Component {
	state = {
		value: "edgar.psilvestre@gmail.com",
		copied: false
	}

	render() {
		return (
			<div className="ui center aligned basic segment" style={styles.segment}>
				{/* <div
					className={`ui ${
						window.innerWidth >= 575.98 ? "top" : "bottom"
					} attached orange label`}
					style={styles.label}
				>
					<span style={styles.span}></span>
				</div> */}
				<img
					className="ui centered small circular image"
					alt="Edgar Perez"
					src={Face}
				/>
				<h1>Edgar Perez</h1>
				<div className="ui orange label">
					<span style={styles.span}>
						Electrical and Computer Engineer
					</span>
				</div>

				<CopyToClipboard
					text={this.state.value}
					onCopy={() => this.setState({ copied: true })}
				>
					<h4 style={styles.email} data-tip="Click to copy">edgar.psilvestre@gmail.com</h4>
				</CopyToClipboard>
				<div className="ui divider" />
				<p style={styles.text}>
					Corvallis, OR{" "}
					<span role="img" aria-label="rain-emoji">
						🌲🌧️🍺
					</span>
				</p>
				<p style={styles.text}>
					I'm passionate about learning and committed to succeed.
				</p>

				<div className="item"></div>
				<div className="ui horizontal list" style={styles.list}>
					<div className="item" data-tip="Go to LinkedIn">
						<a
							href="https://www.linkedin.com/in/edgar-perez-s/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img style={styles.icon} alt="linkedin-icon" src={LinkedInIcon} />
						</a>
					</div>
					<div className="item" data-tip="Go to Github">
						<a
							href="https://github.com/leoP0"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img style={styles.icon} alt="github-icon" src={GithubIcon} />
						</a>
					</div>
					<div className="item" data-tip="Go to Resume">
						<a
							href="https://drive.google.com/open?id=1_yY3WhzGCaGwfBbmEoG88-aPyZwQVzz7"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img style={styles.icon} alt="download-resume-icon" src={GoToPage} />
						</a>
					</div>
				</div>
				<ReactTooltip />
			</div>
		)
	}
}

export default Left
