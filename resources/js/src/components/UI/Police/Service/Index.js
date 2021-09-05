import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css';

export default ({ name, icon, description, to }) => <div className="UI Service col-xl-3 col-lg-6 px-0 px-md-3 pb-4 h-100 bg-white">
    <Link to={to} className="block rounded-30 pb-5 text-decoration-none text-reset">
        <div className="h-100 pt-4 pb-md-4 text-center">
            <div className="bubble-wrapper">
                <div className="d-flex justify-content-center align-items-center position-relative">
                    <div className="bubble embed-responsive embed-responsive-1by1 border border-lightblue bg-lightblue-15 rounded-circle border-10" />

                    <i className={icon + " text-56 text-md-64 text-xxl-72 position-absolute icon"} size="2x" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                </div>
            </div>

            <div className="text-700 mb-2 mb-md-3 pb-3 pb-md-4 border-bottom border-border text-secondary">
                <div className="text-14 text-md-15 text-xxl-17">{name}</div>
            </div>

            <div className="text-13 text-md-14 text-xxl-16">{description}</div>
        </div>
    </Link>
</div>;