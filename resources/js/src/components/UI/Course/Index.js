import React from 'react';

import './Course.css';

const Info = ({ name, icon, info }) => <div>
    <div className="rounded-10 text-center pt-1 pt-md-2 pb-2 pb-md-3">
        <div className="mb-1 mb-md-2"><i className={"fad fa-" + icon + " text-13 text-md-15 text-xxl-17"} /></div>

        <div className="text-10 text-md-12 text-xxl-14 mb-1 mb-md-2 text-500 text-montserrat">{name}</div>

        <div className="text-8 text-md-10 text-xxl-12 text-700 text-montserrat text-truncate">{info}</div>
    </div>
</div>;

const Block = ({ children, className = "" }) => <div className={"px-1 px-md-2 px-xxl-3 " + className}>
    <div className="px-1 px-md-2 px-xxl-3 py-md-1 py-xxl-2">
        {children}
    </div>
</div>;

export default ({ cms, name, description, training, internship, enroled, level, photo, file, selected, onClick }) => {
    const difficulty = <div className="d-flex justify-content-around">
        <div><div className={"rounded-1 bg-" + (level > 0 ? "green" : level === 0 ? "green-40" : "soft")} style={{ height: 5, width: 9 }} /></div>
        <div><div className={"rounded-1 bg-" + (level > 1 ? "green" : level === 1 ? "green-40" : "soft")} style={{ height: 5, width: 9 }} /></div>
        <div><div className={"rounded-1 bg-" + (level > 2 ? "green" : level === 2 ? "green-40" : "soft")} style={{ height: 5, width: 9 }} /></div>
        <div><div className={"rounded-1 bg-" + (level > 3 ? "green" : level === 3 ? "green-40" : "soft")} style={{ height: 5, width: 9 }} /></div>
    </div>;

    return <div className="UI Course col-xxl-3 col-lg-4 col-md-6 pb-4">
        <div className={"bg-white rounded-30 shadow " + (onClick ? "cursor-pointer" : "")} onClick={onClick}>
            <Block className="rounded-top-30 py-1 py-md-2 py-xxl-3">
                <div className="embed-responsive embed-responsive-4by3 rounded-20 position-relative overflow-hidden">
                    <div className="position-absolute w-100 h-100 bg-img" style={{ backgroundImage: `url("${photo}")`, top: 0 }} />
                </div>
            </Block>

            <div className="bg-greenblue-10 text-secondary position-relative">
                {selected && <>
                    <div className="position-absolute bg-green rounded-left-10 h-100" style={{ top: 0, right: '100%', width: 10 }} />
                    <div className="position-absolute bg-green rounded-right-10 h-100" style={{ top: 0, left: '100%', width: 10 }} />
                </>}

                <Block>
                    <div className="d-flex align-items-center">
                        <div className="flex-fill overflow-hidden">
                            <div className="text-500 text-12 text-md-15 text-xxl-18 text-truncate mw-100">{name}</div>

                            <div className="text-300 text-10 text-md-12 text-xxl-14 text-truncate mw-100">{description}</div>
                        </div>

                        <div>
                            <a href={file} target="_blank" className="fas fa-cloud-download text-green text-16 text-md-20 text-xxl-24" />
                        </div>
                    </div>
                </Block>
            </div>

            <Block className="rounded-bottom-30 pb-1 pb-md-2 pb-xxl-3">
                <div className="d-flex align-items-stretch justify-content-between">
                    <Info name={cms.duration} icon="clock text-greenblue" info={training + " " + cms.days} />
                    <Info name={cms.enroled} icon="users text-yellow" info={enroled} />
                    <Info name={cms.internship} icon="building text-green" info={internship + " " + cms.days} />
                    <Info name={cms.difficulty} icon="tools text-yellow" info={difficulty} />
                </div>
            </Block>

        </div>
    </div>;
}