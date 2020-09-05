import styles from "./SignUpModal.module.scss";

class SignUpModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			zipcode: "",
			password: "",
			//profileType: "",
			zipList: null,
		};
	}

	handleChange = (e) => {
		this.setState(
			{
				[e.target.id]: e.target.value,
			},
			() => console.log(this.state)
		);
	};
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
							<input
								type='text'
								id='firstName'
								value={this.state.firstName}
								onChange={this.handleChange}
							></input>
						</div>
						<div className={styles.lName}>
							<label for='lastName'>Last name</label>
							<input
								type='text'
								id='lastName'
								value={this.state.lastName}
								onChange={this.handleChange}
							></input>
						</div>
						<div className={styles.email}>
							<label for='email'>Email</label>
							<input
								type='text'
								id='email'
								value={this.state.email}
								onChange={this.handleChange}
							></input>
						</div>
						<div className={styles.zip}>
							<label for='zipcode'>Zip code</label>
							<input
								type='text'
								id='zipcode'
								value={this.state.zipcode}
								onChange={this.handleChange}
							></input>
						</div>
						<div className={styles.password}>
							<label for='password'>Password</label>
							<input
								type='password'
								id='password'
								value={this.state.password}
								onChange={this.handleChange}
							></input>
						</div>
						<div className={styles.confirmPassword}>
							<label for='confirmPassword'>Confirm Password</label>
							<input type='password' id='confirmPassword'></input>
						</div>
						<div className={styles.profileType}>
							<label for='profileTypeContainer'>Profile Type</label>
							<div className={styles.buttonContainer} id='profileTypeContainer'>
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
