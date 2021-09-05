import React from 'react';

export default ({ children }) => <div className="bg-blue py-3 py-md-4 py-xxl-5" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))' }}>
    <div className="container py-3 py-md-4 py-xxl-5 my-2 my-md-3 my-xxl-4 text-30 text-md-35 text-xxl-40 text-700 text-white text-center">
        {children}

        <div className="d-flex justify-content-center align-items-center">
            <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>

            <div className="px-2"><div className="rounded-circle bg-white" style={{ height: 8, width: 8 }} /></div>

            <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>
        </div>
    </div>
</div>;