import styles from "./Footer.module.scss";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fName: "",
			lName: "",
			email: "",
		};
	}

	render() {
		return <div>Here is my footer.</div>;
	}
}

export default Footer;
