import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Badge, Button, FormGroup, Input, Row } from 'reactstrap';

// Components
import Editor from '../../../../components/Backend/UI/Editor';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Table from '../../../../components/Backend/UI/Food/Table';
import Error from '../../../../components/Error/Error';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import Feedback from '../../../../components/Feedback/Feedback';
import View from '../../../../components/Backend/UI/View/View';
import Delete from '../../../../components/Backend/UI/Delete/Delete';

import { getCourses, postCourses, deleteCourses, resetCourses, getCourse, patchCourses, getCoursesInfo } from '../../../../store/actions/backend/courses';
import { convertDate, htmlEntities, updateObject } from '../../../../shared/utility';

const icon = "books";

const initialState = {
    name: {},
    description: {},
    requirements: {},
    prizes: {},
    training: '',
    internship: '',
    country: '',
    fees: '',
    photo: null,
    level: '',

    translate: '',

    edit: false,

    message: null,
};

class Index extends Component {
    state = { ...initialState }



    // Component methods

    submitHandler = e => {
        e.preventDefault();
        if (this.state.edit) this.props.patch(this.props.backend.courses.course.id, e.target);
        else this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (files) this.readURL(e.target);
        if (name.includes('[')) {
            const { translate } = this.state;
            const stateName = name.split('[')[0];
            const element = this.state[stateName];
            element[translate] = value;
            return this.setState({ [stateName]: element });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    readURL = input => {
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById(`embed-${input.name}`).style.backgroundImage = `url('${e.target.result}')`;
                document.getElementById(`embed-${input.name}`).style.backgroundSize = "cover";
                document.getElementById(`embed-${input.name}`).querySelector(".file-selected").innerHTML = file.name;
            }

            reader.readAsDataURL(file); // convert to base64 string
        }
    }

    fileUpload = () => document.getElementById('photo').click()

    load = id => {
        this.props.show(id);
        this.setState({ edit: true });
    }

    add = () => {
        this.setState({ ...initialState }, () => document.querySelector('form').reset());
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
        this.props.info();
        this.setState({ translate: process.env.MIX_DEFAULT_LANG });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.backend.courses.course) !== JSON.stringify(this.props.backend.courses.course)) {
            const { backend: { courses: { course } } } = this.props;
            this.setState({ ...course });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action, see }, form: { save } }, backend: { pages: { courses: { title, subtitle, create, edit, instructions, index, form } } } }
                }, countries, languages
            },
            backend: { courses: { loading, error, message, course, courses = [], levels = [], total = 0 } },
            auth: { data: { role: { features } } }
        } = this.props;
        const { name, description, requirements, prizes, training, internship, country, fees, level, photo, translate } = this.state;
        const lang = localStorage.getItem('lang');

        const feature = features.find(f => f.prefix === 'courses');
        const redirect = !feature && <Redirect to="/user/dashboard" />;

        const languagesOptions = languages.sort((a, b) => a.name.localeCompare(b.name)).map(item => <option key={JSON.stringify(item)} value={item.abbr}>{item.name}</option>);
        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);
        const levelsOptions = levels.map(item => <option key={item + Math.random()} value={item}>{item}</option>)

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        const data = courses.map(course => {
            return updateObject(course, {
                created_at: convertDate(course.created_at),
                name: course.name[lang],
                description: course.description[lang],
                requirements: htmlEntities(course.requirements[lang]),
                prizes: htmlEntities(course.prizes[lang]),
                country: <div>
                    <span className={`flag-icon flag-icon-${course.country.toLowerCase()} mr-1`} />{course.country}
                </div>,
                photo: course.photo && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <View title={`${form.course_photo}: ${course.name[lang]}`} content={<img src={course.photo} className="w-100" />}>
                            <i className="fas fa-eye fa-fw text-green mr-2" />
                        </View>
                    </span>
                </div>,
                action: <div className="text-center">
                    {JSON.parse(feature.permissions).includes('u') && <span onClick={() => this.load(course.id)} className="mx-1 cursor-pointer">
                        <i className="fas fa-edit text-brokenblue" />
                    </span>}
                    {JSON.parse(feature.permissions).includes('d') && <span className="mx-1"><Delete deleteAction={() => this.props.delete(course.id)}><i className="fas fa-trash text-red" /></Delete></span>}
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <Table array={data} loading={loading} data={JSON.stringify(courses)} get={this.props.get} total={total} bordered icon={icon} title={index} subtitle={subtitle} className="shadow-sm"
                        fields={[
                            { name: form.created_at, key: 'created_at' },
                            { name: form.name, key: 'name' },
                            { name: form.description, key: 'description' },
                            { name: form.requirements, key: 'requirements' },
                            { name: form.prizes, key: 'prizes' },
                            { name: form.training, key: 'training' },
                            { name: form.internship, key: 'internship' },
                            { name: form.country, key: 'country' },
                            { name: form.fees, key: 'fees' },
                            { name: form.level, key: 'level' },
                            { name: form.photo, key: 'photo' },
                            { name: action, key: 'action' }
                        ]}
                        containerClassName="col-xl-6"
                        addon={<div className="col-xl-6 pt-4 pt-xl-0">
                            <form onSubmit={this.submitHandler}>
                                {this.state.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

                                <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />

                                <div className="shadow-sm rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                                    <Row className="my-2 my-sm-3">
                                        <div className="col-12 mb-3 d-flex align-items-center justify-content-between">
                                            <div className="text-18">{this.state.edit ? edit : create}</div>

                                            <div>{this.state.edit && <Button color="green" onClick={this.add}>{create}</Button>}</div>
                                        </div>

                                        <div className="mb-3 text-14 col-12">{instructions}</div>

                                        <div className="col-lg-12">
                                            <Row>
                                                <div className="col-lg-8">
                                                    <div className="row">
                                                        {languages.map(l => <Fragment key={'language-' + l.abbr}>
                                                            <FormInput type="text" id={"name-" + l.abbr} className={"col-md-12" + (l.abbr === translate ? "" : " d-none")} icon={icon} onChange={this.inputChangeHandler} value={name[l.abbr]} name={"name[" + l.abbr + "]"} required placeholder={form.name} />
                                                            <FormInput type="text" id={"name-" + l.abbr} className={"col-md-12" + (l.abbr === translate ? "" : " d-none")} icon={icon} onChange={this.inputChangeHandler} value={description[l.abbr]} name={"description[" + l.abbr + "]"} required placeholder={form.description} />
                                                            <FormGroup id={"requirements-" + l.abbr} className={"col-md-12" + (l.abbr === translate ? "" : " d-none")}>
                                                                {this.state.edit && course && course.requirements[l.abbr] === requirements[l.abbr] && <Editor defaultValue={course.requirements[l.abbr]} name={"requirements[" + l.abbr + "]"} placeholder={form.requirements} />}
                                                                {!this.state.edit && <Editor name={"requirements[" + l.abbr + "]"} placeholder={form.requirements} />}
                                                            </FormGroup>
                                                            <FormGroup id={"prizes-" + l.abbr} className={"col-md-12" + (l.abbr === translate ? "" : " d-none")}>
                                                                {this.state.edit && course && course.prizes[l.abbr] === prizes[l.abbr] && <Editor defaultValue={course.prizes[l.abbr]} name={"prizes[" + l.abbr + "]"} placeholder={form.prizes} />}
                                                                {!this.state.edit && <Editor name={"prizes[" + l.abbr + "]"} placeholder={form.prizes} />}
                                                            </FormGroup>
                                                        </Fragment>)}
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <FormGroup>
                                                        <Input type="select" name="translate" onChange={this.inputChangeHandler} value={translate}>
                                                            {languagesOptions}
                                                        </Input>
                                                    </FormGroup>
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <hr />
                                                </div>

                                                <div className="col-lg-8">
                                                    <FormGroup>
                                                        <div id="embed-photo" className="embed-responsive embed-responsive-21by9 bg-soft rounded-8 d-flex justify-content-center align-items-center position-relative" style={{
                                                            cursor: 'pointer',
                                                            backgroundImage: photo && `url("${photo}")`,
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            overflow: 'visible',
                                                        }} onClick={this.fileUpload}>
                                                            {this.state.edit
                                                                ? photo && (photo !== course.photo) && <div className="text-center text-green w-100">
                                                                    <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><i className="fas fa-check-circle fa-fw fa-2x" /></div>

                                                                    <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                                                                </div>
                                                                : photo ? <div className="text-center text-green w-100">
                                                                    <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><i className="fas fa-check-circle fa-fw fa-2x" /></div>

                                                                    <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                                                                </div> : <div className="text-center text-light w-100 overflow-hidden px-3">
                                                                    <div><i className="fas fa-file-image fa-4x fa-fw" /></div>

                                                                    <div className="mt-3 mb-1 text-center text-12 text-truncate">{form.upload}</div>

                                                                    <div className="text-center text-12 text-truncate">{form.size}</div>
                                                                </div>}
                                                        </div>
                                                    </FormGroup>
                                                </div>

                                                <div className="col-lg-8">
                                                    <Row>
                                                        <FormInput type="number" className="col-md-6" onChange={this.inputChangeHandler} icon="calendar" required value={training} name="training" placeholder={form.training} />
                                                        <FormInput type="number" className="col-md-6" onChange={this.inputChangeHandler} icon="calendar" required value={internship} name="internship" placeholder={form.internship} />
                                                        <FormInput type="select" className="col-md-6" addon={<span className="text-secondary text-small d-inline-flex">
                                                            <div className="rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                                                                <span className={`flag-icon text-xx-large position-absolute flag-icon-${country.toLowerCase()}`} />
                                                            </div>
                                                        </span>} onChange={this.inputChangeHandler} value={country} name="country" required placeholder={form.select_flag}>
                                                            <option value="">{form.select_country}</option>
                                                            {countriesOptions}
                                                        </FormInput>
                                                        <FormInput type="number" className="col-md-6" onChange={this.inputChangeHandler} icon="dollar-sign" required value={fees} name="fees" placeholder={form.fees} />
                                                        <FormInput type="select" className="col-md-6" icon="layer-group" onChange={this.inputChangeHandler} value={level} name="level" required>
                                                            <option value="">{form.select_level}</option>
                                                            {levelsOptions}
                                                        </FormInput>
                                                    </Row>
                                                </div>
                                            </Row>
                                        </div>

                                        <div className="col-12">
                                            <Button color="green" className="rounded-4 py-2 py-sm-3 px-3 px-sm-4">
                                                <div className="mx-2 mx-sm-3 text-14 text-md-17 text-xxl-20">{save}<i className="fas fa-save ml-3 ml-sm-4" /></div>
                                            </Button>
                                        </div>
                                    </Row>
                                </div>
                            </form>
                        </div>}
                    />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{index}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(getCourses(page, show, search)),
    info: () => dispatch(getCoursesInfo()),
    show: id => dispatch(getCourse(id)),
    post: data => dispatch(postCourses(data)),
    patch: (id, data) => dispatch(patchCourses(id, data)),
    delete: id => dispatch(deleteCourses(id)),
    reset: () => dispatch(resetCourses()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));