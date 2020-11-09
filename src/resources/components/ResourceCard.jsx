import React from 'react';

import styles from './ResourceCard.module.scss';

const ResourceCard = (props) => {
  return (
    <div className={styles.ResourceCard}>
      <div className={styles.title}>
        <h3>
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.name}
          </a>
        </h3>
        <button onClick={props.handleNotRelevantClick}>
          {' '}
          Not relevant to me
        </button>
      </div>
      <div className={styles.content}>
        <label htmlFor="benefit-amount">Benefit Amount</label>
        <div className={styles.infoContainer}>
          <p id="benefit-amount">{props.amount}</p>
        </div>
        <label htmlFor="grant-status">Grant Status</label>
        <div className={styles.infoContainer}>
          <p id="grant-status">{props.status}</p>
        </div>
        <label>Eligibilities</label>
        {/* <div className={styles.infoContainer}>
					{props.eligibilities.map((el) => (
						<p key={Math.random()}>{el}</p>
					))}
				</div> */}
      </div>
    </div>
  );
};

export default ResourceCard;
