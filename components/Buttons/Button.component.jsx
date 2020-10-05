import styles from "./Button.module.scss";
const Button = (props) => {
	const handleClick = (e) => {
		const target = e.target;
		target.className == styles.unClicked
			? (target.className = styles.clicked)
			: (target.className = styles.unClicked);
	};

	return (
		<div className={styles.regButton}>
			<button className={styles.clicked} id={props.id} onClick={handleClick}>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
