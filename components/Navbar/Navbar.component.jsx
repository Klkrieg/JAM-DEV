import PageLinks from "../PageLinks/PageLinks.component";
import styles from "./Navbar.module.scss";

const Navbar = () => (
	<div>
		<div className={styles.navbar__logo}>
			<img src='/assets/jam-logo-1.png' />
		</div>
		<PageLinks />
	</div>
);

export default Navbar;
