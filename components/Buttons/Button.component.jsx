import styles from './Button.module.scss';

const Button = (props) => {
  const handleClick = (e) => {
    props.filterClick(props.id);
    console.log(e.target.id);
    console.log(props.id);
    console.log(props.status);
    // props.status.includes(e.target.id)
    // 	? (e.target.className = styles.clicked)
    // 	: (e.target.className = styles.unClicked);
  };

  return (
    <div className={styles.regButton}>
      <button id={props.id} className={props.className} onClick={handleClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
