import React from 'react'
import Search from '../components/Search/Search'
import Cards from "../components/Cards/Cards";

const Home = () => {
  const cards = new Array(10)
    .fill('')
    .map((_, index) => {
      return (
        <div className='col-sm-4 mb-4' key={index}>
          <Cards/>
        </div>
      )
    })

  return (
    <>
      <Search />

      <div className='row'>
        {cards}
      </div>
    </>
  );
};

export default Home;