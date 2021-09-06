import React from 'react';

import './CourseCard.css';

const Info = ({ name, icon, info }) => <div>
    <div className="rounded-10 text-center pt-1 pt-md-2 pb-2 pb-md-3 px-1 px-md-2 px-xxl-3">
        <div className="mb-1 mb-md-2"><i className={"fad fa-" + icon + " text-13 text-md-15 text-xxl-17"} /></div>

        <div className="text-6 text-md-7 text-xxl-8 mb-1 mb-md-2 text-500 text-montserrat">{name}</div>

        <div className="text-6 text-md-7 text-xxl-8 text-700 text-montserrat text-truncate">{info}</div>
    </div>
</div>;

const Detail = ({ name, children }) => <div className="Detail mt-2 mt-md-3 mt-xxl-4">
    <div className="text-secondary text-700 text-10 text-md-12 text-xxl-14">{name + " >"}</div>

    <div className="text-8 text-md-10 text-xxl-12">
        {children}
    </div>
</div>;

export default ({ enrolments, cms, course, lang, countries }) => <div className="CourseCard position-relative pb-2 pr-2">
    <div className="polygon text-white">
        <div className="enrolments">
            <div className="text-700 text-white-40 text-40 text-md-56 text-xxl-72">{course.enroled}</div>

            <div className="text-300 text-12 text-md-15 text-xxl-18">{enrolments.card.enrolments}</div>
        </div>

        <div className="fees">
            <div className="text-300 text-12 text-md-15 text-xxl-18">{enrolments.card.fees}</div>

            <div className="text-montserrat text-700 text-17 text-md-22 text-xxl-27">{course.fees} XAF</div>
        </div>
    </div>

    <div className="course-card position-relative">
        <div className="bg-white shadow rounded-10 p-3 p-md-4 p-xxl-5">
            <div className="p-1 p-md-2 p-xxl-3">
                <div className="course-summary position-relative d-flex align-items-center mb-1 mb-md-2 mb-xxl-3">
                    <div className="pr-2 pr-md-3 pr-xxl-4">
                        <div className="course-photo embed-responsive embed-responsive-4by3 rounded-15 overflow-hidden position-relative">
                            <div className="position-absolute w-100 h-100 bg-img" style={{ top: 0, backgroundImage: `url("${course.photo}")` }} />
                        </div>
                    </div>

                    <div>
                        <div className="text-700 text-greenblue text-10 text-md-12 text-xxl-14 mb-2 mb-md-3 mb-xxl-4 pb-md-1 pb-xxl-2">{course.name[lang]}</div>

                        <div className="d-flex align-items-stretch justify-content-between">
                            <Info name={cms.duration} icon="clock text-greenblue" info={course.training + " " + cms.days} />
                            <Info name={cms.enroled} icon="users text-yellow" info={course.enroled} />
                            <Info name={cms.internship} icon="building text-green" info={course.internship + " " + cms.days} />
                            <Info name={cms.difficulty} icon="tools text-yellow" info={<div className="d-flex justify-content-between">
                                <div><div className={"rounded-2 bg-" + (course.level > 0 ? "green" : course.level === 0 ? "green-40" : "soft")} style={{ height: 5, width: 9 }} /></div>
                                <div><div className={"rounded-2 bg-" + (course.level > 1 ? "green" : course.level === 1 ? "green-40" : "soft")} style={{ height: 5, width: 9 }} /></div>
                                <div><div className={"rounded-2 bg-" + (course.level > 2 ? "green" : course.level === 2 ? "green-40" : "soft")} style={{ height: 5, width: 9 }} /></div>
                                <div><div className={"rounded-2 bg-" + (course.level > 3 ? "green" : course.level === 3 ? "green-40" : "soft")} style={{ height: 5, width: 9 }} /></div>
                            </div>} />
                        </div>
                    </div>
                </div>

                <Detail name={enrolments.card.requirements}>
                    <div dangerouslySetInnerHTML={{ __html: course.requirements[lang] }} />
                </Detail>

                <Detail name={enrolments.card.duration}>
                    <ul>
                        <li>{course.months_training} {enrolments.card.months_training}</li>
                        <li>{course.months_internship} {enrolments.card.months_internship}</li>
                    </ul>
                </Detail>

                <Detail name={enrolments.card.prizes}>
                    <div dangerouslySetInnerHTML={{ __html: course.prizes[lang] }} />
                </Detail>

                <Detail name={enrolments.card.country}>
                    <ul>
                        <li>{countries.find(c => c.country === course.country).name}</li>
                    </ul>
                </Detail>
            </div>
        </div>
    </div>
</div>;