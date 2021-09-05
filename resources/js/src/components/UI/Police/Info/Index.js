import React from 'react';

import './Info.css';

export default ({ name, icon, info }) => <div className="UI Info col-lg-4 col-md-6 pb-4 bg-white">
    <div className="h-100 bg-lightblue-15 rounded-15">
        <div className="mx-auto d-flex flex-column h-100 pb-3 block-container">
            <div className="rounded-bottom-15 text-white bg-blue text-center py-3 py-lg-4 px-3 w-100 text-truncate text-12 text-md-15 text-xxl-18">{name}</div>

            <div className="flex-fill d-flex flex-column justify-content-center py-4 py-lg-5 text-blue">
                <div className="text-20 text-md-25 text-xxl-30"><i className={icon + " mr-2 mr-md-3 mr-xxl-4"} /><span className="text-700 text-16 text-md-20 text-xxl-25 text-montserrat">{info}</span></div>
            </div>
        </div>
    </div>
</div>;