import styles from "./ResourceCard.module.scss";
const ResourceCard = (props) => {
	return (
		<div className={styles.ResourceCard}>
			<div className={styles.title}>
				<h3>
					<a>{props.name}</a>
				</h3>
				<button> Not relevant to me</button>
			</div>
			<div className={styles.content}>
				<label>Benefit Amount</label>
				<div className={styles.infoContainer}>
					<p>{props.benefit}</p>
				</div>
				<label>Grant Status</label>
				<div className={styles.infoContainer}>
					<p>{props.status}</p>
				</div>
				<label>Eligibilities</label>
				<div className={styles.infoContainer}>
					{props.eligibilities.map((el) => (
						<p key={Math.random()}>{el}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ResourceCard;
