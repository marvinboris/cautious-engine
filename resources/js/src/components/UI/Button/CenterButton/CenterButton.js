import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const centerButton = ({ children, color, icon, className, size }) =>
    <Button color={color} size={size} className={`position-relative rounded-6 px-4 py-2 ${className}`}>
        <span className="text-16 text-500">{children}</span>

        <FontAwesomeIcon icon={icon} className="mr-2 position-absolute" style={{ right: 32, top: '50%', transform: 'translateY(-50%)' }} />
    </Button>;

export default centerButton;