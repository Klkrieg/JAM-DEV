import Head from "next/head";
import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar.component";
import SignInModal from "../Modals/Modal.component";
import Backdrop from "../Backdrop/Backdrop.component";

const Layout = (props) => (
	<div>
		<Head>
			<title>JAM: Joining All Musicians</title>
			<link
				href='https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap'
				rel='stylesheet'
			/>
		</Head>
		<Backdrop />
		<Navbar />
		<SignInModal title='Modal' />
		{props.children}
	</div>
);

export default Layout;
