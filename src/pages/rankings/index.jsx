import React from "react";
import { useTable } from 'react-table';

import clsx from "clsx";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import CreatorCard from "../../components/CreatorCard/CreatorCard";

import img from "../../assets/Image Placeholder (2).png"
// import './TopCreators.scss';
import './style.scss';

function Rankings() {
  const data = React.useMemo(
    () => [
      { num: '1', artist: 'Jaydon Ekstrom Bothman', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist1.png' },
      { num: '2', artist: 'Ruben Carder', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist2.png' },
      { num: '3', artist: 'Alfredo Septimus', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist3.png' },
      { num: '4', artist: 'Davis Franci', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist4.png' },
      { num: '5', artist: 'Livia Rosser', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist5.png' },
      { num: '6', artist: 'Jaydon Ekstrom Bothman', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist1.png' },
      { num: '7', artist: 'Ruben Carder', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist2.png' },
      { num: '8', artist: 'Alfredo Septimus', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist3.png' },
      { num: '9', artist: 'Davis Franci', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist4.png' },
      { num: '10', artist: 'Livia Rosser', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist5.png' },
      { num: '11', artist: 'Jaydon Ekstrom Bothman', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist1.png' },
      { num: '12', artist: 'Ruben Carder', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist2.png' },
      { num: '13', artist: 'Alfredo Septimus', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist3.png' },
      { num: '14', artist: 'Davis Franci', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist4.png' },
      { num: '15', artist: 'Livia Rosser', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist5.png' },
      { num: '16', artist: 'Jaydon Ekstrom Bothman', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist1.png' },
      { num: '17', artist: 'Ruben Carder', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist2.png' },
      { num: '18', artist: 'Alfredo Septimus', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist3.png' },
      { num: '19', artist: 'Davis Franci', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist4.png' },
      { num: '20', artist: 'Livia Rosser', change: '+1.41%', nftsSold: 692, volume: '12.4 ETH', image: '/images/artist5.png' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: '#', accessor: 'num' },
      { Header: 'Artist', accessor: 'artist', Cell: ({ row }) => (
        <div className="artist-cell">
          <img src={img} alt={row.original.artist} className="artist-image" />
          <span>{row.original.artist}</span>
        </div>
      )},
      { Header: 'Change', accessor: 'change' },
      { Header: 'NFTs Sold', accessor: 'nftsSold' },
      { Header: 'Volume', accessor: 'volume' },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Layout>
      <Container>
      <div className="table-container">
          <h1>Top Creators</h1>
          <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
          <div className="tabs" id='none'>
          <span className="active">1d</span>
            <span>7d</span>
            <span>30d</span>
            <span>All Time</span>
          </div>
          <div className="tabs">
            <span className="active">Today</span>
            <span>This Week</span>
            <span>This Month</span>
            <span>All Time</span>
          </div>
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                    <tr className='tr' {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </Layout>
  );
}

export default Rankings;
