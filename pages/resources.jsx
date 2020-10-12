import Layout from "../components/Layout/Layout.component";
import ResourceCard from "../components/RecourceCard/ResourceCard.component";
import Button from "../components/Buttons/Button.component";
import styles from "../pageStyles/resources.module.scss";
import { useEffect, useState } from "react";
import dbConnect from "../utils/dbConnect";
<<<<<<< HEAD
//import Resource from "../models/resource";
import resourceOffline from "../utils/resources-for-offline";
=======
import Resource from "../models/resource";
import Axios from "axios";
>>>>>>> financial_filters

const Resources = ({ resourceData }) => {
	//Creating a state for the different filtering and sorting controllers
	const [financialGroup, setFinancialGroup] = useState({
		pandemicImpact: false,
		industryProfessional: false,
		incomeMin: false,
	});
<<<<<<< HEAD

	const [roleGroup, setRoleGroup] = useState({
		musician: false,
		engineer: false,
		business: false,
		educator: false,
	});
=======
	// const [roleGroup, setRoleGroup] = useState({
	// 	musician: false,
	// 	engineer: false,
	// 	business: false,
	// 	educator: false,
	// });
>>>>>>> financial_filters

	// const [years, setYears] = useState("1");

	const [sort, setSort] = useState("");

	//usestate hook for filter buttons
<<<<<<< HEAD
	const [status, setStatus] = useState(["all"]);
	//Use effect to listen to filter buttons and update state conditionally
=======
	//const [filters, setFilters] = useState([]);
>>>>>>> financial_filters

	//This is what we will refer to to load user inputs
	const resourceCriteria = {
		...financialGroup,
		...roleGroup,
		//years,
		status,
		sort,
	};

	//Sets the financialGroup state to be equal to the buttons pressed
	const handleFinancialFilterButton = (id) => {
		setFinancialGroup((financialGroup) => ({ ...financialGroup, [id]: !financialGroup[id] }));
	};
	const handleRolesFilterButton = (id) => {
		setRoleGroup((roleGroup) => ({ ...roleGroup, [id]: !roleGroup[id] }));
	};

	//Sets status based on the id of the targets
	const handleStatusFilterButton = (id) => {
		if (id == "all") {
			setStatus(["all"]);
		} else if (id != "all" && status.includes("all")) {
			setStatus([id]);
		} else if (status == [id]) {
			setStatus(["all"]);
		} else if (id != "all" && status.includes(id)) {
			if (id != "all" && status.length == 1 && status.indexOf("all") == -1) {
				setStatus(["all"]);
			} else {
				const newStatus = status.filter((option) => option != id);
				setStatus(newStatus);
			}
		} else {
			setStatus((status) => [...status, id]);
		}
	};
	//Effect for financial Group change
	//This will end updating resource results based on change in financialgroup state
	useEffect(() => {
		console.log(financialGroup);
	}, [financialGroup]);
	useEffect(() => {
		console.log(status);
	}, [status]);
	useEffect(() => {
		console.log(roleGroup);
	}, [roleGroup]);
	useEffect(() => {
		console.log(sort);
	}, [sort]);
	const [resource, setResource] = useState(resourceData);
	//handles the removal of irrelavent items
	console.log(resource);
	const handleNotRelevantClick = (key) => {
		setResource(
			resource.filter((resource) => {
				return resource._id !== key;
			})
		);
	};

	return (
		<Layout>
			<div className={styles.controllers}>
				<h1>Are you a musician that has been affected by the COVID-19 Pandemic?</h1>
				<p className={styles.subtitle}>
					We’ve built a clear and valuable toolkit of Support Resources available to
					Austin musicians and industry.
				</p>
				<div className={styles.financialGroup}>
					<h2>Select what you can provide and/or is true for you…</h2>

					<Button filterClick={handleFinancialFilterButton} id='pandemicImpact'>
						Proof that you were financially impacted by the pandemic. (e.g. lost gigs,
						shows, bookings, contracts, unemployment etc.)
					</Button>
					<Button filterClick={handleFinancialFilterButton} id='industryProfessional'>
						Proof of professional musicianship and/or music industry employment.
					</Button>
					<Button filterClick={handleFinancialFilterButton} id='incomeMin'>
						The music industry is over 50% of my income
					</Button>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.rolesGroup}>
					<a>
						<p id='musician' onClick={() => handleRolesFilterButton("musician")}>
							Musician
						</p>
					</a>
					<div className={styles.vertDivider}></div>
					<a>
						<p id='engineer' onClick={() => handleRolesFilterButton("engineer")}>
							Engineer/Crew
						</p>
					</a>
					<div className={styles.vertDivider}></div>
					<a>
						<p id='business' onClick={() => handleRolesFilterButton("business")}>
							Business
						</p>
					</a>
					<div className={styles.vertDivider}></div>
					<a>
						<p id='educator' onClick={() => handleRolesFilterButton("educator")}>
							Educator
						</p>
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
						<Button filterClick={handleStatusFilterButton} status={status} id='all'>
							All
						</Button>
						<Button filterClick={handleStatusFilterButton} status={status} id='open'>
							Open
						</Button>
						<Button filterClick={handleStatusFilterButton} status={status} id='wait'>
							Waitlisted
						</Button>
						<Button filterClick={handleStatusFilterButton} status={status} id='closed'>
							Closed
						</Button>
					</div>
<<<<<<< HEAD
					<div className={styles.sortContainer}>
						<span>SORT:</span>
						<p onClick={() => setSort("a-z")}>A-Z</p>
						<div className={styles.vertDividerThin}></div>
						<p onClick={() => setSort("z-a")}>Z-A</p>
						<div className={styles.vertDividerThin}></div>
						<p onClick={() => setSort("$")}>$</p>
=======
					<label>
						<span>Years in industry:</span> 1
						<input type='range' min='1' max='20' step='1'></input> 20+
					</label>
					<div className={styles.divider}></div>
					<div className={styles.filtersAndSortContainer}>
						<div className={styles.filterContainer}>
							<p>Would you like to see?</p>
							<Button id='all'>All</Button>
							<Button id='open'>Open</Button>
							<Button id='wait'>Waitlisted</Button>
							<Button id='closed'>Closed</Button>
						</div>
						<div className={styles.sortContainer}>
							<span>SORT:</span>
							<p>A-Z</p>
							<div className={styles.vertDividerThin}></div>
							<p>Z-A</p>
							<div className={styles.vertDividerThin}></div>
							<p>$</p>
						</div>
>>>>>>> financial_filters
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
							handleNotRelevantClick={() => handleNotRelevantClick(data["_id"])}
							//eligibilities={resource.eligibilities}
						/>
					);
				})}
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	//dbConnect();
<<<<<<< HEAD
	//const data = await Resource.find({}, "organization _id status");
	const data = resourceOffline;
=======
	const data = await Resource.find({}, "organization _id status");
>>>>>>> financial_filters
	const string = JSON.stringify(data);
	const resourceData = JSON.parse(string);
	return {
		props: {
			resourceData,
		},
	};
}

export default Resources;
