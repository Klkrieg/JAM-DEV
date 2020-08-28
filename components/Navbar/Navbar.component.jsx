import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => (
	<div className={styles.Navbar}>
		<img src='/assets/jam-logo-1.png' className={styles.navbar__logo} />
		<ul className={styles.PageLinks}>
			<li>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href='/connect'>
					<a>Connect</a>
				</Link>
			</li>
			<li>
				<Link href='/resources'>
					<a>Resources</a>
				</Link>
			</li>
		</ul>
		<div className={styles.buttonContainer}>
			<button className={styles.orange}>Sign in</button>
			<button className={styles.white}>Sign up</button>
		</div>
	</div>
);

export default Navbar;
