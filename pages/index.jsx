import Layout from "../components/Layout/Layout.component";
import styles from "../pageStyles/index.module.scss";
import Link from "next/link";

const Index = () => (
	<Layout>
		<div>
			<section className={styles.heroContainer}>
				<div className={styles.overlay}>
					<h1>
						We exist to connect, support and give the music industry to the musician.
					</h1>
				</div>
			</section>
			<section className={styles.covidSupport}>
				<h2>Are you a musician that has been affected by the COVID-19 Pandemic?</h2>
				<p>
					Check out our Support and Resources section. We organized all of the resources
					available to musical Austinites. Answer some simple questions and see if you are
					eligible for support from the Nonprofits supporting Austin Music.
				</p>
				<ul>
					<p>If you can…</p>
					<li>
						- Prove that you lost gigs/bookings, you were layed off or unemployed due to
						the COVID-19 Pandemic?
					</li>
					<li>- Prove your Professional Muscianship/Music Industry Employment?</li>
				</ul>

				<Link href='/resources'>
					<button>Check it out</button>
				</Link>
			</section>
		</div>
	</Layout>
);

export default Index;
