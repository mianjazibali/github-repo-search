import { Badge, NavLink } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import './ProfileNavLink.scss';

interface NavLinkInterface {
    icon: IconDefinition,
    title: string,
    count?: number,
    active?: boolean
}

const ProfileNavLink = (props : NavLinkInterface) => {
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