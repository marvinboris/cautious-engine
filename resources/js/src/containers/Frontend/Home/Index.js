import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import OwlCarousel from 'react-owl-carousel2';

import Block from '../../../components/UI/Police/Block';
import Course from '../../../components/UI/Course';
import Carousel from './Carousel';
import CourseCard from './CourseCard';
import EnrolmentForm from './EnrolmentForm';

import { convertDate, updateObject } from '../../../shared/utility';
import { getHome, resetHome } from '../../../store/actions/frontend/home';

import './Home.css';

class Home extends Component {
    state = {
        selectedCourse: '',

        activeIndex: 0,
        animating: false
    }



    next = items => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = items => {
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

                <Carousel items={banner.carousel} activeIndex={activeIndex} animating={animating} next={() => this.next(banner.carousel)} previous={() => this.previous(banner.carousel)} goToIndex={this.goToIndex} onExiting={() => this.setState({ animating: true })} onExited={() => this.setState({ animating: false })} />
            </div>



            <Block id="courses" title={courses.title} subtitle={courses.subtitle}>
                <div className="row">
                    {coursesContent}
                </div>
            </Block>



            <Block id="enrolments" color="soft" title={enrolments.title} subtitle={course && (<>{enrolments.you_have_selected_the_course} <strong>{course.name[lang]}</strong></>)}>
                {course && <div className="row">
                    <div className="col-md-5 overflow-hidden px-3 px-md-4 px-xxl-5">
                        <CourseCard countries={countries} enrolments={enrolments} cms={cms} course={course} lang={lang} />
                    </div>

                    <div className="col-md-7 position-relative px-3 px-md-4 px-xxl-5">
                        <div className="thin-line">
                            <div className="thick-line" />
                        </div>

                        <EnrolmentForm enrolments={enrolments} course={course} />
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