// src/components/TopCreators.js
import React from 'react';
import './TopCreators.scss';

const TopCreators = () => {
  return (
    <div className="top-creators">
      <h1>Top Creators</h1>
      <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      <div className="tabs">
        <button className="active">Today</button>
        <button>This Week</button>
        <button>This Month</button>
        <button>All Time</button>
      </div>
      <table>
        <thead>
          <tr>
            <th className='artist'>Artist</th>
            <th className='change'>Change</th>
            <th className='none'>NFTs Sold</th>
            <th>Volume</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TopCreators;

