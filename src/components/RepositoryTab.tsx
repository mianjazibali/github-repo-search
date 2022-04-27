import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setRepos } from '../features/repos/reposSlice';
import { RootState } from '../store';
import RepositoryList from './RepositoryList';
import RepositorySearch from './RepositorySearch';

const RepositoryTab = () => {
    const { username } = useParams();

    const repos = useSelector((state : RootState) => state.repos.repos);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(repos => {
                console.log('$$$response repos', repos);
                dispatch(setRepos(repos))
            })
            .catch(error => console.log(error));
    }, [username]);

    return (
        <>
            <RepositorySearch />
            <RepositoryList repos={repos} />
        </>
    );
};

export default RepositoryTab;