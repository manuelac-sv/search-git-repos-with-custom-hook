import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchGitRepos = (searchQuery) => {
   const [repos, setRepos] = useState([]);

   useEffect(() => {
       const fetchRepos = async () => {
         const result = await axios(`https://api.github.com/users/${searchQuery}/repos`);
         setRepos(result);
       };
       fetchRepos();
     }, [searchQuery]);
  
   return repos;
}

export default useFetchGitRepos;
