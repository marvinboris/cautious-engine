import React from 'react';

import './Fees.css';

export default ({ amount, description }) => <div className="UI Fees col pb-4">
    <div className="rounded-15 p-2 block">
        {amount > 0 ? <div className="d-flex align-items-center px-1 px-md-2 px-xxl-3 pt-2 pt-md-3 pt-xxl-4">
            <div className="text-24 text-md-28 text-xxl-32 text-700 text-montserrat pr-1">{amount}</div>

            <div className="text-15 text-md-18 text-xxl-21">XAF</div>
        </div> : <div className="text-24 text-md-28 text-xxl-32 text-700 text-montserrat px-1 px-md-2 px-xxl-3 pt-2 pt-md-3 pt-xxl-4">GRATUIT</div>}

        <div className="mt-1 mt-md-2 mt-xxl-3 mb-2 mb-md-3 mb-xxl-4 position-relative">
            <div className="position-absolute ml-1 ml-md-2 ml-xxl-3 rounded-pill" />
        </div>

        <div className="text-16 text-md-17 text-xxl-18 px-1 px-md-2 px-xxl-3 pt-1 pb-2 pb-md-3 pb-xxl-4">
            {description}
        </div>
    </div>
</div>;