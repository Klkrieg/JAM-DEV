import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {
  const handleClick = () => {
    props.filterClick(props.id);
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
