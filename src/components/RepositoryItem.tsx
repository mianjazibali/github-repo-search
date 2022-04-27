import { Badge } from 'react-bootstrap';

import { IRepositoryItem } from './../types';
import './RepositoryItem.scss';

const RepositoryItem = (props : IRepositoryItem) => {
    const {name, type, description, language, updatedAt} = props;

    return (
        <li className='repository-item border-bottom border-light container-fluid row px-0 py-4 m-0'>
            <div className='col-md-8 ps-0'>
                <div>
                    <h5 className='title d-inline-block me-2'>
                        <a className='text-decoration-none' href='#'>{name}</a>
                    </h5>

                    <Badge className='mx-1' pill bg='secondary'>{type}</Badge>
                </div>

                <p><small>{description}</small></p>

                <div>
                    <div className='dot d-inline-block me-2'></div>
                    <small className='text-muted'>{language}</small>

                    <small className='text-muted ms-4'>{updatedAt}</small>
                </div>
            </div>
        </li>
    )
};

export default RepositoryItem;