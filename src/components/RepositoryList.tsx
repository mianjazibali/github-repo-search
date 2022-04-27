import RepositoryItem from './RepositoryItem';

import { IRepositoryList } from './../types';

const RepositoryList = (props : IRepositoryList) => {
    const { repositories } = props;

    return (
        <ul className='repository-list ps-0'>
            {repositories.map(({name, type, description, language, updatedAt}, index) => (
                <RepositoryItem
                    key={index}
                    name={name}
                    type={type}
                    description={description}
                    language={language}
                    updatedAt={updatedAt}
                />
            ))}
        </ul>
    )
};

export default RepositoryList;
