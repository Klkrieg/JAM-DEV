import Link from "next/link";
import SignInModal from "../Modals/SignInModal.component";
import Backdrop from "../Backdrop/Backdrop.component";
import styles from "./Navbar.module.scss";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInOpen: false,
			signUpOpen: false,
		};
		this.handleEscKeyPress = this.handleEscKeyPress.bind(this);
		this.handleOffModalClick = this.handleOffModalClick.bind(this);
	}
	componentDidMount() {
		document.addEventListener("keydown", this.handleEscKeyPress);
		document.addEventListener("click", this.handleOffModalClick);
	}

	handleSignInOpen = () => {
		this.setState({ signInOpen: true });
	};

	handleOffModalClick(e) {
		if (e.target.className.match(/backdrop/i)) {
			this.setState({
				signInOpen: false,
				signUpOpen: false,
			});
		}
	}
	handleEscKeyPress(e) {
		if (e.keyCode == 27) {
			this.setState({
				signInOpen: false,
				signUpOpen: false,
			});
		}
	}

	render() {
		return (
			<div className={styles.Navbar}>
				<img
					src='/assets/jam-logo-1.png'
					className={styles.navbar__logo}
				/>
				<ul className={styles.PageLinks}>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/connect'>
							<a>Connect</a>
						</Link>
					</li>
					<li>
						<Link href='/resources'>
							<a>Resources</a>
						</Link>
					</li>
				</ul>
				<div className={styles.buttonContainer}>
					<button
						className={styles.orange}
						onClick={this.handleSignInOpen}
					>
						Sign in
					</button>
					<button className={styles.white}>Sign up</button>
				</div>
				{this.state.signInOpen && <Backdrop />}
				{this.state.signInOpen && <SignInModal />}
			</div>
		);
	}
}

export default Navbar;
