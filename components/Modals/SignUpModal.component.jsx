import styles from "./SignUpModal.module.scss";

class SignUpModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profileType: {
				Ind_prof: false,
				Band: false,
				Org_biz: false,
			},
		};
	}
	handleButtonClick = (e) => {
		let name = e.target.name;
		this.setState({
			profileType: {
				[name]: !this.state.profileType[name],
			},
		});
		console.log(this.state.profileType[e.target.name]);
	};

	render() {
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
							<div className={styles.buttonContainer}>
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
							<a tabIndex='0' className={styles.bold}>
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
