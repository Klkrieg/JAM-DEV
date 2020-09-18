import Layout from "../components/Layout/Layout.component";
import ResourceCard from "../components/RecourceCard/ResourceCard.component";
import styles from "../pageStyles/resources.module.scss";
import { useEffect, useState } from "react";
import dbConnect from "../utils/dbConnect";
import mongoose from "mongoose";

const Resources = (data) => {
	const [financialGroup, setFinancialGroup] = useState({
		pandemicImpact: false,
		industryProfessional: false,
		incomeMin: false,
	});
	const [roleGroup, setRoleGroup] = useState({
		musician: false,
		engineer: false,
		business: false,
		educator: false,
	});
	const [years, setYears] = useState("1");
	const [filters, setFilers] = useState("");
	const [sort, setSort] = useState("");

	const resourceCriteria = {
		...financialGroup,
		...roleGroup,
		years,
		filters,
		sort,
	};

	const [resources, setResources] = useState([]);
	useEffect(() => {
		console.log(data);
	});
	return (
		<Layout>
			<div>
				<div className={styles.controllers}>
					<h1>Are you a musician that has been affected by the COVID-19 Pandemic?</h1>
					<p className={styles.subtitle}>
						We’ve built a clear and valuable toolkit of Support Resources available to
						Austin musicians and industry.
					</p>
					<div className={styles.financialGroup}>
						<h2>Select what you can provide and/or is true for you…</h2>
						<button id='pandemicImpact'>
							Proof that you were financially impacted by the pandemic. (e.g. lost
							gigs, shows, bookings, contracts, unemployment etc.)
						</button>
						<button id='industryProfessional'>
							Proof of professional musicianship and/or music industry employment.
						</button>
						<button id='incomeMin'>The music industry is over 50% of my income</button>
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
							<button id='all'>All</button>
							<button id='open'>Open</button>
							<button id='wait'>Paused/Waitlisted</button>
							<button id='closed'>Closed</button>
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
					{resources.map((resource) => {
						return (
							<ResourceCard
								key={resource.key}
								name={resource.name}
								benifit={resource.benefit}
								status={resource.status}
								eligibilities={resource.eligibilities}
							/>
						);
					})}
					{/* <ResourceCard
						name='ACM Lifting Lives'
						benefit='Not Listed'
						status='Paused - Waitlist'
						eligibilities={[
							"Must be a Country Musician",
							"Must have played professionally for 2 years",
							"Must have proof of loss of income (laid-off, cancelled bookings, etc.)",
						]}
						key='akjshgfkj1'
					/> */}
				</div>
			</div>
		</Layout>
	);
};

export async function getInitialProps() {
	dbConnect();
	const data = await Resources.find({});

	return {
		props: {
			data,
		},
	};
}

export default Resources;
