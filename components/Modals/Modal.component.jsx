//import "../../globalStyles/variables";
import styles from "./Modal.module.scss";
class SignInModal extends React.Component {
	render() {
		return (
			<div>
				<div className={styles.modal}>
					<h1>Sign in</h1>
					<form>
						<label>Email</label>
						<input type='text'></input>
						<label>Password</label>
						<input type='password'></input>
						<div>
							<p>Not a member of JAM?</p>
							<p>Sign up</p>
						</div>
						<button type='submit'>Sign in</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SignInModal;
