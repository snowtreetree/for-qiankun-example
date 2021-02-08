import React, { useEffect } from 'react';
import styles from './index.less';
import { loadBmap } from '../utils/bmap';

export default () => {
  useEffect(() => {
    loadBmap().then(() => {
      const map = new window.BMap.Map('container');
      const point = new window.BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
    });
  });

  return (
    <div>
      <h1 className={styles.title}>App1</h1>
      <div className={styles.container} id="container"></div>
    </div>
  );
};
