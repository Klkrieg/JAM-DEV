import Layout from "../components/Layout/Layout.component";
import ResourceCard from "../components/RecourceCard/ResourceCard.component";
import styles from "../pageStyles/resources.module.scss";
import { useEffect, useState } from "react";
import dbConnect from "../utils/dbConnect";
import Resource from "../models/resource";

const Resources = ({ resourceData }) => {
	//Creating a state for the different filtering and sorting controllers
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

	//This is what we will refer to to load user inputs
	const resourceCriteria = {
		...financialGroup,
		...roleGroup,
		years,
		filters,
		sort,
	};

	const [resource, setResource] = useState(resourceData);

	//changes the style of the filter/sort pressed

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
							<p id='musician'>Musician</p>
						</a>
						<div className={styles.vertDivider}></div>
						<a>
							<p id='engineer'>Engineer/Crew</p>
						</a>
						<div className={styles.vertDivider}></div>
						<a>
							<p id='business'>Business</p>
						</a>
						<div className={styles.vertDivider}></div>
						<a>
							<p id='educator'>Educator</p>
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
					{resource.map((data) => {
						return (
							<ResourceCard
								key={data["_id"]}
								name={data.organization}
								//benifit={resource.benefit}
								status={data.status}
								//eligibilities={resource.eligibilities}
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

export async function getStaticProps() {
	dbConnect();
	const data = await Resource.find({}, "organization _id status");
	const string = JSON.stringify(data);
	const resourceData = JSON.parse(string);
	return {
		props: {
			resourceData,
		},
	};
}

export default Resources;
