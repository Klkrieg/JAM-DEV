import styles from "./Button.module.scss";
const Button = (props) => {
	return <button className={styles.navButton}>{props.children}</button>;
};

export default Button;
