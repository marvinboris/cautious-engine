import React from 'react';

import Points from '../../../../assets/images/Groupe 18.png';

import './Block.css';

export default ({ id, scrollTo = '', scrollColor, style = {}, children, full, left, fluid, title, color = 'white', subtitle }) => <div id={id} className="UI Block text-14 text-md-15 text-xxl-16 text-secondary text-justify position-relative">
    <div className={(full ? "" : "py-3 py-md-4 py-xxl-5") + " bg-" + color} style={style}>
        {full ? children : <div className={"container-" + (fluid ? "fluid" : "xxl") + " py-3 py-md-4 py-xxl-5"}>
            {left ? <div className="text-center text-md-left mb-3 mb-md-4 mb-xxl-5 pb-3 pb-md-4 pb-xxl-5 pl-md-4 pl-xxl-5 ml-md-4 ml-xxl-5">
                <div className="text-700 text-nightblue text-21 text-md-28 text-xxl-35 position-relative">
                    <div className={"position-absolute points left " + color}>
                        <img src={Points} alt="Points" />
                    </div>

                    {title}
                </div>

                <div className="text-300 text-secondary text-16 text-md-20 text-xxl-25">{subtitle}</div>
            </div> : <div className="text-center mb-3 mb-md-4 mb-xxl-5 pb-3 pb-md-4 pb-xxl-5">
                <div className="text-500 text-nightblue">
                    <div className="text-20 text-md-30 text-xxl-40 position-relative">
                        <div className={"position-absolute points center " + color}>
                            <img src={Points} alt="Points" />
                        </div>

                        {title}
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <div><div className="bg-border" style={{ height: .5, width: 40 }} /></div>

                        <div className="px-2"><div className="rounded-circle border border-blue" style={{ height: 8, width: 8 }} /></div>

                        <div><div className="bg-border" style={{ height: .5, width: 40 }} /></div>
                    </div>
                </div>

                <div className="text-secondary row justify-content-center">
                    <div className="col-md-10 text-16 text-md-20 text-xxl-25 col-lg-8">{subtitle}</div>
                </div>
            </div>}

            {children}
        </div>}
    </div>

    {scrollTo !== '' && <a href={scrollTo} className={"chevron-down mb-3 mb-md-4 mb-xxl-5 text-" + scrollColor}>
        <div><i className="fas fa-chevron-down up" /></div>
        <div><i className="fas fa-chevron-down down" /></div>
    </a>}
</div>;