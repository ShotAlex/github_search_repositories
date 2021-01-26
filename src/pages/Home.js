import React, {useContext} from 'react'
import Search from '../components/Search/Search'
import Cards from '../components/Cards/Cards'
import {GithubContext} from '../Context/Github/githubContext'

const Home = () => {
  const {loading, users} = useContext(GithubContext)


  const cards = users.map((user, index) => (
      <div className='col-sm-4 mb-4' key={user.id}>
        <Cards user={user}/>
      </div>
    )
  )

  return (
    <>
      <Search/>

      <div className='row'>
        {
          loading
            ? <p className='text-center'>Loading...</p>
            : cards
        }
      </div>
    </>
  );
};

export default Home;