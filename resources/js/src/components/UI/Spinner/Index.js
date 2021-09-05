import React from 'react';

import './Spinner.css';

import ImgLogo from '../../../assets/images/logo-big.png';

export default () => <div className="UI Spinner">
    <div className="position-relative">
        <div className="loader" id="loader-1"></div>
        <img src={ImgLogo} />
    </div>
</div>;