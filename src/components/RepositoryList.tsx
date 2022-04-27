import RepositoryItem from './RepositoryItem';

import { IReposState } from './../types';

const RepositoryList = (props : IReposState) => {
    const { repos } = props;

    return (
        <ul className='repository-list ps-0'>
            {repos.map((repo, index) => (
                <RepositoryItem
                    key={index}
                    name={repo.name}
                    visibility={repo.visibility}
                    description={repo.description}
                    language={repo.language}
                    updatedAt={repo.updated_at}
                />
            ))}
        </ul>
    )
};

export default RepositoryList;
