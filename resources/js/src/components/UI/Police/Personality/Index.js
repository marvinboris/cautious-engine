import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { convertDate } from '../../../../shared/utility';

import './Personality.css';

export default ({ name, job, started_at, ended_at, photo, slug = '' }) => <div className={"UI Personality pb-4 px-md-3 text-dark pt-4"}>
    <div className={"shadow p-3 rounded-14 bg-white"}>
        <div className={"embed-responsive embed-responsive-4by3 position-relative rounded-14"} style={{ backgroundImage: 'url("' + photo + '")', overflow: 'visible', transform: 'translateY(-2rem)' }} />

        <div className="text-500 text-secondary pt-2 mb-2 border-bottom border-border-50 position-relative">
            <div className="mb-2 text-14 text-md-15 text-xxl-16">{name}</div>

            <div className="position-absolute rounded-pill ml-4 bg-orange" style={{ bottom: 0, left: 0, height: 4, width: 30, transform: 'translateY(50%)' }} />
        </div>

        <div className="text-300 text-secondary mb-3 text-12 text-md-13 text-xxl-14">{job}</div>

        <div>
            <div className="d-inline-flex align-items-center mr-3 rounded bg-green-20 text-green p-1">
                <div className="pr-1 border-right border-green-50 mr-1 text-14"><FontAwesomeIcon icon={faCalendar} fixedWidth className="px-1" /></div>

                <div className="px-1 text-9">
                    {ended_at ? <div>{convertDate(started_at)} - {convertDate(ended_at)}</div> : <div>Depuis {convertDate(started_at)}</div>}
                </div>
            </div>
        </div>
    </div>
</div>;