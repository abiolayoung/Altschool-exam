import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'

const SingleRepo = () => {
    const { id } = useParams();
  const [repo, setRepo] = useState({});
  const [error, setError] = useState(null);

  useEffect( () => {
    fetch(`https://api.github.com/repos/abiolayoung/${id}`)
    .then(response => response.json())
    .then(data => setRepo(data))
    .catch(error => setError(error.message))
  },[id]);

  if (error){
    return <div>Error: {error}</div>
  }

    return (
        <div>
            <Header/>

            <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Forks: {repo.forks_count}</p>
      <p>Open Issues: {repo.open_issues_count}</p>
      <p>Watchers: {repo.watchers_count}</p>
      <p>Language: {repo.language}</p>
      <p>Created at: {repo.created_at}</p>
      <p>Updated at: {repo.updated_at}</p>
      <p>Pushed at: {repo.pushed_at}</p>
    </div>
        </div>
    )
}

export default SingleRepo;