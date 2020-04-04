import React from 'react';
import cx from 'classnames';

import styles from './Root.scss';

const Root = () => {
  return (
    <div className={cx(styles.Root)}>
      <h1>Root</h1>
    </div>
  );
};

export default Root;
