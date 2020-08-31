import styles from "./SignUpModal.module.scss";

const SignUpModal = () => {
	return (
		<div>
			<div className={styles.modal}>
				<h1>Sign up</h1>
				<form className={styles.SignUpModal}>
					<div className={styles.fName}>
						<label>First name</label>
						<input type='text'></input>
					</div>
					<div className={styles.lName}>
						<label>Last name</label>
						<input type='text'></input>
					</div>
					<div className={styles.email}>
						<label>Email</label>
						<input type='text'></input>
					</div>
					<div className={styles.password}>
						<label>Password</label>
						<input type='password'></input>
					</div>
					<div className={styles.confirmPassword}>
						<label>Confirm Password</label>
						<input type='password'></input>
					</div>
					<div className={styles.profileType}>
						<label>Profile Type</label>
						<button type='button' className={styles.profileBtn}>
							Indivudual/Professional
						</button>
						<button type='button' className={styles.profileBtn}>
							Band
						</button>
						<button type='button' className={styles.profileBtn}>
							Organization/Business
						</button>
					</div>

					<div className={styles.switch}>
						<p>Not a member of JAM?</p>
						<a tabIndex='0' className={styles.bold}>
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
};

export default SignUpModal;
