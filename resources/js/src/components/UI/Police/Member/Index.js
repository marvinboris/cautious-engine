import React from 'react';

import './Member.css';

export default ({ title, description, rank }) => <div className="UI Member px-0 px-md-2 pb-4">
    <div className="rounded-15 shadow-sm">
        <div className="rank py-3 px-3 text-50 text-700">{rank}.</div>

        <div className="title px-3 text-12 text-700" style={{ height: 60 }}>
            <div className="row align-items-center h-100">
                <div className="col-7">{title}</div>
            </div>
        </div>

        <div className="py-4 px-3 text-secondary text-300 text-10">{description}</div>
    </div>
</div>;