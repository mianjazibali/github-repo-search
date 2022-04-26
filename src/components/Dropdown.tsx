import { DropdownButton, Dropdown as BootstrapDropdown } from 'react-bootstrap';

interface DropdownItemInterface {
    text: string,
    value: string | number
}

interface DropdownInterface {
    title : string,
    links : DropdownItemInterface[],
    parentClassName: string
};

const Dropdown = (props : DropdownInterface) => {
    const {title, links, parentClassName} = props;

    return (
        <div className={`d-inline-block ${parentClassName}`}>
            <DropdownButton variant='outline-secondary' title={title}>
                {links.map(({text, value} : DropdownItemInterface) => (
                    <BootstrapDropdown.Item key={value} value={value}>{text}</BootstrapDropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
};

export default Dropdown;