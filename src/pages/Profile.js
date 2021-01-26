import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {GithubContext} from '../Context/Github/githubContext'
import Repos from '../components/Repos/Repos'

const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const nameUrl = match.params.name

  useEffect(() => {
    getUser(nameUrl)
    getRepos(nameUrl)
    // eslint-disable-next-line
  }, [])


  if (loading) return <p className='text-center'>Loading...</p>

  const {
    avatar_url, name, company, location, bio, blog, login, html_url,
    followers, following,public_repos, public_gists
  } = user

  return (
    <>
      <h1>Profile page</h1>
      <Link to='/' className='btn btn-link'>Main</Link>

      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-4 text-center'>
              <img src={avatar_url} alt={name} style={{width: '300px'}}/>
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className='col'>
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a
                href={html_url}
                target='_blank'
                rel="noreferrer"
                className='btn btn-dark'
              >
                Open Profile
              </a>
              <ul>
                {login && <li><strong>Username:</strong>{login}</li>}
                {company && <li><strong>Company:</strong>{company}</li>}
                {blog && <li><strong>Website:</strong>{blog}</li>}
              </ul>

              <div className='badge badge-success'>Followers: {followers}</div>
              <div className='badge badge-primary'>Following: {following}</div>
              <div className='badge badge-info'>Repos: {public_repos}</div>
              <div className='badge badge-dark'>Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </>
  );
};

export default Profile;