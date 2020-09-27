import styles from "./Button.module.scss";
const Button = (props) => {
	const handleClick = (e) => {
		const target = e.target;
		target.className == styles.unClicked
			? (target.className = styles.clicked)
			: (target.className = styles.unClicked);
	};
	return (
		<div className={styles.container}>
			<button className={styles.unClicked} onClick={handleClick}>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
