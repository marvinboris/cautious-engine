import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import OwlCarousel from 'react-owl-carousel2';

import Block from '../../../components/UI/Police/Block';
import Course from '../../../components/UI/Course';
import Carousel from './Carousel';

import { convertDate, updateObject } from '../../../shared/utility';
import { getHome, resetHome } from '../../../store/actions/frontend/home';

import './Home.css';

const Info = ({ name, icon, info }) => <div>
    <div className="rounded-10 text-center pt-1 pt-md-2 pb-2 pb-md-3 px-1 px-md-2 px-xxl-3">
        <div className="mb-1 mb-md-2"><i className={"fad fa-" + icon + " text-13 text-md-15 text-xxl-17"} /></div>

        <div className="text-6 text-md-7 text-xxl-8 mb-1 mb-md-2 text-500 text-montserrat">{name}</div>

        <div className="text-6 text-md-7 text-xxl-8 text-700 text-montserrat text-truncate">{info}</div>
    </div>
</div>;

const Detail = ({ name, children }) => <div className="Detail mt-2 mt-md-3 mt-xxl-4">
    <div className="text-secondary text-700 text-8 text-md-10 text-xxl-12">{name + " >"}</div>

    <div>
        {children}
    </div>
</div>;

class Home extends Component {
    state = {
        selectedCourse: '',

        activeIndex: 0,
        animating: false
    }



    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = newIndex => {
        if (this.state.animating) return;
        this.setState({ activeIndex: newIndex });
    }



    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: { cms: {
                pages: { components: { course: cms }, frontend: { pages: { home: { banner, courses, enrolments } } } }
            }, countries },
            frontend: { home: { loading, courses: coursesData = [] } }
        } = this.props;
        const { selectedCourse, activeIndex, animating } = this.state;
        const lang = localStorage.getItem('lang');

        const coursesContent = coursesData.map(course => <Course key={JSON.stringify(course)} onClick={() => this.setState({ selectedCourse: course.id })} selected={selectedCourse === course.id} cms={cms} {...updateObject(course, { created_at: convertDate(course.created_at), name: course.name[lang], description: course.description[lang], requirements: course.requirements[lang], prizes: course.prizes[lang] })} />);
        const course = coursesData.find(c => c.id === selectedCourse);

        return <div className="Home">
            <div className="banner position-relative">
                <div className="text position-absolute w-100 h-100">
                    <div className="text-white text-center">
                        <div className="text-25 text-md-30 text-xxl-35 text-pacifico">{banner.carousel[activeIndex].text.your_career_is_planned}</div>

                        <div className="text-26 text-md-31 text-xxl-36 text-700">{banner.carousel[activeIndex].text.welcome}</div>

                        <div className="text-13 text-md-16 text-xxl-18 text-300">{banner.carousel[activeIndex].text.details}</div>
                    </div>
                </div>

                <Carousel items={banner.carousel} activeIndex={activeIndex} animating={animating} next={this.next} previous={this.previous} goToIndex={this.goToIndex} onExiting={() => this.setState({ animating: true })} onExited={() => this.setState({ animating: false })} />
            </div>



            <Block id="courses" title={courses.title} subtitle={courses.subtitle}>
                <div className="row">
                    {coursesContent}
                </div>
            </Block>



            <Block id="enrolments" color="soft" title={enrolments.title} subtitle={course && (<>{enrolments.you_have_selected_the_course} <strong>{course.name[lang]}</strong></>)}>
                {course && <div className="row align-items-center">
                    <div className="col-md-5 position-relative px-3 px-md-4 px-xxl-5">
                        <div className="position-relative">
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
                                                <Info name={cms.difficulty} icon="tools text-yellow" info={course.difficulty} />
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
                    </div>
                </div>}
            </Block>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getHome()),
    reset: () => dispatch(resetHome()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));