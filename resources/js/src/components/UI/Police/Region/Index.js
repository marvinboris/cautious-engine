import React from 'react';
import View from '../../../Backend/UI/View/View';

import './Region.css';

export default ({ name, info, phone, position, central_police_stations }) => <div className="UI Region col-xl-4 col-md-6 pb-4">
    <div className="bg-white h-100 rounded-15 overflow-hidden">
        <div className="bg-lightblue-15 h-100 d-flex flex-column pt-5 px-4 pb-4">
            <div className="text-700 text-nightblue text-16 text-md-20 text-xxl-25 text-uppercase mb-2">{name}</div>

            <div className="text-secondary text-12 text-md-15 text-xxl-18 flex-fill mb-4" dangerouslySetInnerHTML={{ __html: info }} />

            <div className="bg-lightblue rounded-15 d-flex align-items-center py-3 px-4">
                <div className="mr-4">
                    <a href={"tel:" + phone} className="rounded-pill text-decoration-none text-reset bg-white py-1 pl-1 pr-4 d-flex align-items-center">
                        <div className="mr-2">
                            <div className="bg-blue rounded-circle d-flex justify-content-center align-items-center text-white" style={{ width: 40, height: 40 }}>
                                <i className="fas fa-phone-plus text-10 text-md-12 text-xxl-14" />
                            </div>
                        </div>

                        <div className="text-secondary text-11 text-md-13 text-xxl-15">Appeler</div>
                    </a>
                </div>

                {position && <div>
                    <a href={position} target="_blank" className="fas fa-circle-location-arrow text-20 text-md-25 text-xxl-30 text-decoration-none text-blue" />
                </div>}

                {central_police_stations && <div className="ml-auto">
                    <View title={name} content={<div className="row">
                        {central_police_stations.map(central_police_station => <div key={Math.random() + JSON.stringify(central_police_station)} className="col-xxl-4 col-md-6">
                            <div className="bg-white h-100 rounded-15 overflow-hidden">
                                <div className="bg-lightblue-15 h-100 d-flex flex-column pt-5 px-4 pb-4">
                                    <div className="text-700 text-nightblue text-16 text-md-20 text-xxl-25 mb-2">
                                        {central_police_station.name}: {central_police_station.phone && <a href={"tel:" + central_police_station.phone} className="text-decoration-none text-reset">{central_police_station.phone}</a>}
                                    </div>

                                    <div className="flex-fill scrollbar-blue pr-2 pr-md-3 pr-xxl-4" style={{ maxHeight: '10rem' }}>
                                        {central_police_station.police_stations && central_police_station.police_stations.map(police_station => <div key={Math.random() + JSON.stringify(police_station)} className="bg-lightblue-15 pt-4 px-3 pb-3">
                                            <div className="text-500 text-secondary text-14 text-md-18 text-xxl-22 mb-2">{police_station.name}</div>

                                            <div className="text-700 text-secondary text-14 text-md-18 text-xxl-22 mb-4">TEL: {police_station.phone}</div>

                                            <div className="bg-lightblue rounded-15 d-flex align-items-center py-3 px-4">
                                                <div className="mr-4">
                                                    <a href={"tel:" + police_station.phone} className="rounded-pill text-decoration-none text-reset bg-white py-1 pl-1 pr-4 d-flex align-items-center">
                                                        <div className="mr-2">
                                                            <div className="bg-blue rounded-circle d-flex justify-content-center align-items-center text-white" style={{ width: 40, height: 40 }}>
                                                                <i className="fas fa-phone-plus text-10 text-md-12 text-xxl-14" />
                                                            </div>
                                                        </div>

                                                        <div className="text-secondary text-11 text-md-13 text-xxl-15">Appeler</div>
                                                    </a>
                                                </div>

                                                {position && <div>
                                                    <a href={position} target="_blank" className="fas fa-circle-location-arrow text-20 text-md-25 text-xxl-30 text-decoration-none text-blue" />
                                                </div>}
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>}>
                        <div className="d-flex align-items-center text-500 text-14 text-md-16 text-xxl-18">
                            <div className="mr-1 mr-md-2 mr-xxl-3">Voir Plus</div>

                            <div>
                                <i className="fas fa-chevron-double-right text-9 text-md-10 text-xxl-11" />
                            </div>
                        </div>
                    </View>
                </div>}
            </div>
        </div>
    </div>
</div>