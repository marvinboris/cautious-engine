import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faNewspaper, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import { convertDate, convertTime, htmlEntities } from '../../../../shared/utility';

import './Post.css';

export default ({ title, body, created_at, photo, simple, soft, menu, link }) => <div className={"UI Post" + (menu ? "" : " pb-4 px-md-3") + " text-dark" + (simple ? " pt-4" : "")}>
    <div className={"shadow p-3" + (soft ? " soft" : "") + " rounded-" + (simple ? "14 bg-white" : "30")}>
        <div className="position-relative">
            <Link to={link} className={"embed-responsive embed-responsive-4by3 position-relative " + (simple ? "rounded-14" : "rounded-30 mb-4")} style={{ backgroundImage: 'url("' + photo + '")', overflow: 'visible', transform: 'translateY(' + (simple ? '-2rem' : '0') + ')' }} />

            {!simple && <div className="position-absolute rounded-circle bg-white" style={{ right: 36, bottom: 0, transform: 'translateY(50%)' }}>
                <div className="border border-6 share-border rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#" className="btn btn-blue rounded-circle" style={{ width: 36, height: 36 }}>
                        <FontAwesomeIcon icon={faShareAlt} />
                    </a>
                </div>
            </div>}
        </div>

        {simple ? <div className="text-500 text-center text-secondary pt-3 mb-4">
            <div className="mb-3">
                <div className="text-14 text-md-15 text-xxl-16">{title}</div>
            </div>

            <div className="mx-auto bg-border" style={{ height: .5, width: 200 }} />
        </div> : <div className="my-3 text-uppercase text-truncate text-500 w-100 pb-2 border-bottom border-border text-darkblue">
            <FontAwesomeIcon icon={faNewspaper} className="text-blue text-14 mr-2" fixedWidth />

            <span className="text-14 text-md-17 text-xxl-20">{title}</span>
        </div>}

        {!simple && <div className="text-300 text-secondary mb-3">
            <div className="text-14 text-md-15 text-xxl-16">
                {htmlEntities(body)}
            </div>
        </div>}

        <div className={"d-flex mb-4 justify-content-" + (simple ? "center" : "start")}>
            <div className="d-inline-flex align-items-center mr-3 rounded bg-green-20 text-green p-1">
                <div className="pr-1 border-right border-green-50 mr-1 text-14"><FontAwesomeIcon icon={faCalendar} fixedWidth className="px-1" /></div>

                <div className="px-1 text-9">{convertDate(created_at)}</div>
            </div>

            <div className="d-inline-flex align-items-center rounded bg-orange-20 text-orange p-1">
                <div className="pr-1 border-right border-orange-50 mr-1 text-14"><FontAwesomeIcon icon={faClock} fixedWidth className="px-1" /></div>

                <div className="px-1 text-9">{convertTime(created_at)}</div>
            </div>
        </div>
    </div>
</div>;