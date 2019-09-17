import React from 'react';

import Overview from './components/Overview';
import LatestActivity from './components/LatestActivity';
import NewUsers from './components/NewUsers';
import MapOffices from './components/MapOffices';

export default function Monitor() {
  return (
    <div style={{padding:'16px'}}>
      <MapOffices />
      <Overview />
      <LatestActivity />
      <NewUsers />
    </div>
  );
}
