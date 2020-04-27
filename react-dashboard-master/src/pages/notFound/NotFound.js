/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

import s from './NotFound.module.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <h1 className={s.title}>I'm A Place Holder</h1>
        <p>Either this page is broken or it doesn't Exist!.</p>
      </div>
    );
  }
}

export default NotFound