import { Badge } from 'react-bootstrap';
import { formatISODateTime } from '../helper/datetime';

import { IRepositoryItem } from './../types';
import './RepositoryItem.scss';

const RepositoryItem = (props : IRepositoryItem) => {
    const {name, visibility, description, language, updatedAt} = props;

    return (
        <li className='repository-item border-bottom border-light container-fluid row px-0 py-4 m-0'>
            <div className='col-md-8 ps-0'>
                <div>
                    <h5 className='title d-inline-block me-2'>
                        <a className='text-decoration-none' href='#'>{name}</a>
                    </h5>

                    <Badge className='mx-1' pill bg='secondary'>{visibility}</Badge>
                </div>

                <p><small>{description}</small></p>

                <div>
                    {language && (
                        <>
                            <div className={`dot d-inline-block me-2 ${language}`}></div>
                            <small className='text-muted me-4'>{language}</small>
                        </>
                    )}

                    <small className='text-muted'>Updated on {formatISODateTime(updatedAt)}</small>
                </div>
            </div>
        </li>
    )
};

export default RepositoryItem;