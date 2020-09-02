//import "../../globalStyles/variables";
import styles from "./Modal.module.scss";
class SignInModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className={styles.modal}>
					<h1>Sign in</h1>
					<form className={styles.SignInModal}>
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
							<a
								tabIndex='0'
								className={styles.bold}
								onClick={this.props.switchHandle}
							>
								Sign up.
							</a>
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
