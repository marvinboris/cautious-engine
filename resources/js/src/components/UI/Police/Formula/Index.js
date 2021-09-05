import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './Formula.css';

export default ({ name, description, file, color = "white" }) => <div className={"UI Formula bg-" + color + " col-xxl-3 col-xl-4 col-lg-4 px-0 px-md-3 pb-4"}>
    <div className="block d-flex flex-column">
        <div className="d-flex border-bottom pb-3 pb-md-4 mb-3 mb-md-4">
            <div className="title text-17 text-md-18 text-xxl-20 text-left text-700 pr-3 pr-md-4 pr-xxl-5 flex-fill text-ellipsis-2" style={{ height: 60 }}>{name}</div>

            <div>
                <FontAwesomeIcon icon={faInfoCircle} className="icon text-20 text-md-21 text-xxl-23" />
            </div>
        </div>

        <div className="description flex-fill d-flex flex-column">
            <div className="flex-fill">
                <div className="text-13 text-md-14 text-xxl-16">{description}</div>
            </div>

            <div className="text-right pt-3">
                <a href={file} className="btn text-10 text-md-11 text-xxl-12">Télécharger<FontAwesomeIcon icon={faFileDownload} className="btn-icon ml-2 ml-xxl-3 text-14 text-md-15 text-xxl-16" /></a>
            </div>
        </div>
    </div>
</div>;