import Layout from "../components/Layout/Layout.component";
import ResourceCard from "../components/RecourceCard/ResourceCard.component";
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

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick = (event) => {
		let id = event.target.id;
		if (id === "pandemicImpact" || id === "industryProfessional" || id === "incomeMin") {
			this.setState(
				{
					...this.state,
					financialGroup: {
						...this.state.financialGroup,
						[id]: !this.state.financialGroup[id],
					},
				},
				() => console.log(this.state.financialGroup)
			);
		}
		// switch (id) {
		// 	case "pandemicImpact":
		// 	case "industryProfessional":
		// 	case "incomeMin":
		// }
	};
	render() {
		return (
			<Layout>
				<div>
					<div className={styles.controllers}>
						<h1>Are you a musician that has been affected by the COVID-19 Pandemic?</h1>
						<p className={styles.subtitle}>
							We’ve built a clear and valuable toolkit of Support Resources available
							to Austin musicians and industry.
						</p>
						<div className={styles.financialGroup}>
							<h2>Select what you can provide and/or is true for you…</h2>
							<button onClick={this.handleButtonClick} id='pandemicImpact'>
								Proof that you were financially impacted by the pandemic. (e.g. lost
								gigs, shows, bookings, contracts, unemployment etc.)
							</button>
							<button onClick={this.handleButtonClick} id='industryProfessional'>
								Proof of professional musicianship and/or music industry employment.
							</button>
							<button onClick={this.handleButtonClick} id='incomeMin'>
								The music industry is over 50% of my income
							</button>
						</div>
						<div className={styles.divider}></div>
						<div className={styles.rolesGroup}>
							<a>
								<p>Musician</p>
							</a>
							<div className={styles.vertDivider}></div>
							<a>
								<p>Engineer/Crew</p>
							</a>
							<div className={styles.vertDivider}></div>
							<a>
								<p>Business</p>
							</a>
							<div className={styles.vertDivider}></div>
							<a>
								<p>Educator</p>
							</a>
						</div>
						<label>
							<span>Years in industry:</span> 1
							<input type='range' min='1' max='20' step='1'></input> 20+
						</label>
						<div className={styles.divider}></div>
						<div className={styles.filtersAndSortContainer}>
							<div className={styles.filterContainer}>
								<p>Would you like to see?</p>
								<button onClick={this.handleButtonClick} id='all'>
									All
								</button>
								<button onClick={this.handleButtonClick} id='open'>
									Open
								</button>
								<button onClick={this.handleButtonClick} id='wait'>
									Paused/Waitlisted
								</button>
								<button onClick={this.handleButtonClick} id='closed'>
									Closed
								</button>
							</div>
							<div className={styles.sortContainer}>
								<span>SORT:</span>
								<p>A-Z</p>
								<div className={styles.vertDividerThin}></div>
								<p>Z-A</p>
								<div className={styles.vertDividerThin}></div>
								<p>$</p>
							</div>
						</div>
					</div>
					<div className={styles.resultsContainer}>
						<ResourceCard
							name='ACM Lifting Lives'
							benefit='Not Listed'
							status='Paused - Waitlist'
							eligibilities={[
								"Must be a Country Musician",
								"Must have played professionally for 2 years",
								"Must have proof of loss of income (laid-off, cancelled bookings, etc.)",
							]}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Resources;
