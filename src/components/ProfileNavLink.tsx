import { Badge, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { INavLink } from './../types';
import './ProfileNavLink.scss';

const ProfileNavLink = (props : INavLink) => {
    const {icon, title, count, active} = props;
    const activeClass : string = active ? 'selected' : '';

    return (
        <NavLink className={`profile-nav-link h6 p-3 ${activeClass}`}>
            <FontAwesomeIcon className='mx-1' icon={icon} />{title}
            <Badge className='mx-1' pill bg='secondary'>{count}</Badge>
        </NavLink>
    );
};

export default ProfileNavLink;