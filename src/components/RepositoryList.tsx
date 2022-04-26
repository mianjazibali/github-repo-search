import RepositoryItem, { RepositoryItemInterface } from './RepositoryItem';

interface RepositoryListInterface {
    repositories: RepositoryItemInterface[]
}

const RepositoryList = (props : RepositoryListInterface) => {
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
