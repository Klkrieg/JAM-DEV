import styles from "./SignUpModal.module.scss";

class SignUpModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profileType: "",
		};
	}
	handleButtonClick = (e) => {
		console.log(styles.profileBtn);
	};

	render() {
		return (
			<div>
				<div className={styles.modal}>
					<h1>Sign up</h1>
					<form className={styles.SignUpModal}>
						<div className={styles.fName}>
							<label for='firstName'>First name</label>
							<input type='text' id='firstName'></input>
						</div>
						<div className={styles.lName}>
							<label for='lastName'>Last name</label>
							<input type='text' id='lastName'></input>
						</div>
						<div className={styles.email}>
							<label for='email'>Email</label>
							<input type='text' id='email'></input>
						</div>
						<div className={styles.password}>
							<label for='password'>Password</label>
							<input type='password' id='password'></input>
						</div>
						<div className={styles.confirmPassword}>
							<label for='confirmPassword'>Confirm Password</label>
							<input type='password' id='confirmPassword'></input>
						</div>
						<div className={styles.profileType}>
							<label for='profileTypeContainer'>Profile Type</label>
							<div className={styles.buttonContainer} id='profileTypeContainer'>
								{/*<label for='Individual/Professional'>
									<input
										type='radio'
										name='profileType'
										value='Individual/Professional'
										id='Individual/Professional'
									/>
									Individual/Professional
								</label>
								<label for='Band'>
									<input type='radio' name='profileType' value='Band' id='Band' />
									Band
								</label>
								<label for='Organization/Business'>
									<input
										type='radio'
										name='profileType'
										value='Organization/Business'
										id='Organization/Business'
									/>
									Organization/Business
								</label>*/}
								<button
									type='button'
									name='Ind_prof'
									onClick={this.handleButtonClick}
									className={styles.profileBtn}
								>
									Indivudual/Professional
								</button>
								<button
									type='button'
									name='Band'
									onClick={this.handleButtonClick}
									className={styles.profileBtn}
								>
									Band
								</button>
								<button
									type='button'
									name='Org_biz'
									onClick={this.handleButtonClick}
									className={styles.profileBtn}
								>
									Organization/Business
								</button>
							</div>
						</div>

						<div className={styles.switch}>
							<p>Already have an account?</p>
							<a
								tabIndex='0'
								className={styles.bold}
								onClick={this.props.switchHandle}
							>
								Sign in.
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

export default SignUpModal;
