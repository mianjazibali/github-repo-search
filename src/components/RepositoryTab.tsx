import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setRepos } from '../features/repos/reposSlice';
import { RootState } from '../store';
import RepositoryList from './RepositoryList';
import RepositorySearch from './RepositorySearch';
import UseLoading from './../HOC/useLoading';

const RepositoryTab = () => {
    const { username } = useParams();

    const [search, setSearch] = useState('');
    const repos = useSelector((state : RootState) => state.repos.repos);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(repos => dispatch(setRepos(repos)))
            .catch(error => console.log(error));
    }, [username]);

    return (
        <>
            <RepositorySearch search={search} onChange={setSearch} />
            <RepositoryList search={search} repos={repos} />
        </>
    );
};

export default UseLoading(RepositoryTab);