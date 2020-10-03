import Axios from "axios";
import styles from "./Footer.module.scss";
import axios from "axios";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fName: "",
			lName: "",
			email: "",
		};
		this.handleSubscribe = this.subscribe.bind(this);
	}

	async subscribe() {
		// this.setState({fName: firstName, lName: lastName, email: emailValue})

		try {
			const response = await axios.post("api/newsletter", { email, fName, lName})
		} catch (e) {
			console.log(e.response.data.error)
		}
	}

	render() {
		return (
			<div>
				<footer className={styles.footerContainer}>
					<div className={styles.logoContainer}>
						<img src='assets/jam-logo-1.png'></img>
						<p>Austin, Texas</p>
					</div>
					<div className={styles.contactContainer}>
						<h2>CONTACT INFO</h2>
						<p>info@joiningallmusicians.com</p>
					</div>
					<div className={styles.subscribeContainer}>
						<form>
							<h2>STAY TUNED</h2>
							<input type='text' placeholder='First name' onChange={(e) => this.setState(fName = e.target.value)}></input>
							<input type='text' placeholder='Last name' onChange={(e) => this.setState(lName = e.target.value)}></input>
							<input type='email' placeholder='Email' onChange={(e) => this.setState(email = e.target.value)}></input>
							<button type='submit'>Subscribe</button>
						</form>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
