//import "../../globalStyles/variables";
import styles from "./Modal.module.scss";
class SignInModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen: false,
		};
		this.modalOpenHandler = this.modalOpenHandler.bind(this);
	}

	modalOpenHandler() {
		this.setState((state) => ({
			modalIsOpen: !state.modalIsOpen,
		}));
	}

	render() {
		return (
			<div>
				<div className={styles.modal}>
					<h1>Sign in</h1>
					<form>
						<div className={styles.email}>
							<label>Email</label>
							<input type='text'></input>
						</div>
						<div className={styles.password}>
							<label>Password</label>
							<input type='password'></input>
						</div>

						<div className={styles.switch}>
							<p>Not a member of JAM?</p>
							<p className={styles.bold}>Sign up.</p>
						</div>
						<button type='submit' className={styles.submit}>
							Sign in
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SignInModal;
