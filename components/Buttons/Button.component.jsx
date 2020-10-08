import styles from "./Button.module.scss";
const Button = (props) => {
	const handleClick = (e) => {
		props.filterClick(props.id);

		// if (status == ["all"] && target == "all") {
		// 	return
		// }else if(status == ["all"] && target != "all"){

		// }
		//if status == ['all'] and the button pressed == all there should
		//be no change in either status or the color of the all button

		//if status == ['all'] and the button pressed != all the
		//color of all should change as well as the color of the button pressed && status == ["button pressed"]

		//if status != ['all'] && status includes the button pressed the button pressed should change

		const target = e.target;

		target.className == styles.unClicked
			? (target.className = styles.clicked)
			: (target.className = styles.unClicked);
	};

	return (
		<div className={styles.regButton}>
			<button
				className={props.id == "all" ? styles.clicked : styles.unClicked}
				id={props.id}
				onClick={handleClick}
			>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
