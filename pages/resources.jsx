import Layout from "../components/Layout/Layout.component";
import styles from "../pageStyles/resources.module.scss";

class Resources extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			financialGroup: {
				pandemicImpact: false,
				industryProfessional: false,
				incomeMin: false,
			},
			roleGroup: {
				musician: false,
				engineer: false,
				business: false,
				educator: false,
			},
			years: 0,
			filters: {
				open: false,
				wait: false,
				closed: false,
			},
			sort: {
				aToZ: false,
				zToA: false,
				amount: false,
			},
		};
	}
	render() {
		return (
			<Layout>
				<div>
					<div className={styles.controllers}>
						<h1>Are you a musician that has been affected by the COVID-19 Pandemic?</h1>
						<p>
							We’ve built a clear and valuable toolkit of Support Resources available
							to Austin musicians and industry.
						</p>
						<h2>Select what you can provide and/or is true for you…</h2>
						<button>
							Proof that you were financially impacted by the pandemic. (e.g. lost
							gigs, shows, bookings, contracts, unemployment etc.)
						</button>
						<button>
							Proof of professional musicianship and/or music industry employment.
						</button>
						<button>The music industry is over 50% of my income</button>
						<div className={styles.divider}></div>
						<div className={styles.rolesContainer}>
							<p>Musician</p>
							<p>Engineer/Crew</p>
							<p>Business</p>
							<p>Educator</p>
						</div>
						<label>
							<span>Years in industry:</span> 1
							<input type='range' min='1' max='20' step='1'></input> 20+
						</label>
						<div className={styles.divider}></div>
						<div className={styles.filtersAndSortContainer}>
							<div className={styles.filterContainer}>
								<p>Would you like to see?</p>
								<button>All</button>
								<button>Open</button>
								<button>Paused/Waitlisted</button>
								<button>Closed</button>
							</div>
							<div className={styles.sortContainer}>
								<span>SORT:</span>
								<p>A-Z</p>
								<p>Z-A</p>
								<p>$</p>
							</div>
						</div>
					</div>
					<div className={styles.resultsContainer}></div>
				</div>
			</Layout>
		);
	}
}

export default Resources;
