import React from 'react';

import './Uniform.css';

export default ({ title, photo }) => <div className="UI Uniform pb-4 h-100">
    <div className="rounded-14 overflow-hidden bg-white shadow-sm">
        <div className="h-100 p-3 block d-flex flex-column">
            <div className="flex-fill">
                <img src={photo} className="h-100" />
            </div>

            <div className="pt-3">
                <div className="bg-white rounded-14 overflow-hidden">
                    <div className="bg-lightblue-30 py-4 px-4">
                        <div className="px-2 text-secondary text-left">{title}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;