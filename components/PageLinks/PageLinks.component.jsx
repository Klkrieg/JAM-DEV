import Link from "next/link";
import styles from "./PageLinks.module.scss";

const PageLinks = () => {
	return (
		<div>
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
		</div>
	);
};

export default PageLinks;
