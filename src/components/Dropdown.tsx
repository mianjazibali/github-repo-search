import { DropdownButton, Dropdown as BootstrapDropdown } from 'react-bootstrap';

import { IDropdown, IDropdownItem } from './../types';

const Dropdown = (props : IDropdown) => {
    const {title, links, parentClassName} = props;

    return (
        <div className={`d-inline-block ${parentClassName}`}>
            <DropdownButton variant='outline-secondary' title={title}>
                {links.map(({text, value} : IDropdownItem) => (
                    <BootstrapDropdown.Item key={value} value={value}>{text}</BootstrapDropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
};

export default Dropdown;