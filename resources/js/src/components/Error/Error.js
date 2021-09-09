import React from 'react';

const error = ({ err }) => (err ? <div className="alert alert-danger text-12 text-md-14 text-xxl-16">{err.message ? err.message : err}</div> : null);

export default error;