import React from 'react';

import './Notice.css';

export default ({ title }) => <div className="UI Notice px-md-2 pt-3 pt-md-4 pt-xxl-5">
    <div className="position-relative rounded-15 py-3 py-md-4 py-xxl-5 px-2 px-md-3 px-xxl-4 text-center d-flex justify-content-center align-items-center">
        <div className="text-block">
            <div>{title}</div>
        </div>

        <div className="line-circle position-absolute" style={{ top: '100%', marginTop: 8, left: '50%', transform: 'translateX(-50%)' }}>
            <div className="position-relative">
                <div className="bg-blue" style={{ height: 130, width: .5 }} />

                <div className="position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="border border-blue border-8 rounded-circle bg-white" style={{ width: 30, height: 30 }} />
                </div>
            </div>
        </div>
    </div>
</div>;