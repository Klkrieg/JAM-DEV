import Head from "next/head";
import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar.component";

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}
	handleModalOpen() {}
	render() {
		return (
			<div>
				<Head>
					<title>JAM: Joining All Musicians</title>
					<link
						href='https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<Navbar />
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
