import RepositoryItem from './RepositoryItem';

import { IRepositoryList } from './../types';
import { useParams } from 'react-router-dom';

const RepositoryList = (props : IRepositoryList) => {
    const { repos, search } = props;

    const { username } = useParams();
    const _repos = search.length === 0 ? repos : repos.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ul className='repository-list list-unstyled ps-0'>
            {_repos.length > 0 ? (
                _repos.map((repo, index) => (
                    <RepositoryItem
                        key={index}
                        name={repo.name}
                        visibility={repo.visibility}
                        description={repo.description}
                        language={repo.language}
                        updatedAt={repo.updated_at}
                    />
                ))
            ) : (
                <li className='h5 my-5 text-center'>{username} doesn't have any repositories that match.</li>
            )}
        </ul>
    )
};

export default RepositoryList;
