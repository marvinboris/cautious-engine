import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';

import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import FormInput from '../../../../components/UI/Input/Input';
import Stars from '../../../../components/UI/Stars';

import { postHome } from '../../../../store/actions/frontend/home';

import './EnrolmentForm.css';

class EnrolmentForm extends Component {
    state = {
        background: '',
        name: '',
        region: '',
        birthdate: '',
        country: 'CM',
        code: '237',
        phone: '',
        email: '',
        passport: '',
        last_institute: '',
        recent_degree: '',
        degree_score: '',

        writing: 2.5,
        speaking: 2.5,
        reading: 2.5,
        comprehension: 2.5,
        reason: '',

        cv: null,
        nid: null,
        photo: null,
        diploma: null,

        method_id: '',
        terms: false,
        policies: false,

        selectedPage: '',
    }



    submitHandler = e => {
        e.preventDefault();
        this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files, checked } = e.target;
        if (['terms', 'policies'].includes(name)) return this.setState({ [name]: checked });
        if (name === 'country') return this.setState({ country: value, code: this.props.content.countries.find(({ country }) => country === value).code });
        this.setState({ [name]: files ? files[0] : value }, () => console.log(this.state[name]));
    }

    fileUpload = key => document.getElementById(key).click()

    next = () => {
        const keys = Object.keys(this.props.enrolments.form.sections);
        const index = keys.findIndex(key => key === this.state.selectedPage);
        if (index < keys.length - 1) this.setState({ selectedPage: keys[index + 1] });
    }

    previous = () => {
        const keys = Object.keys(this.props.enrolments.form.sections);
        const index = keys.findIndex(key => key === this.state.selectedPage);
        if (index > 0) this.setState({ selectedPage: keys[index - 1] });
    }

    starRating = (key, value) => {
        this.setState({ [key]: value });
    }



    componentDidMount() {
        this.setState({ selectedPage: Object.keys(this.props.enrolments.form.sections)[0], method_id: this.props.methods[0].id });
    }

    componentDidUpdate() {
        if (this.props.frontend.home.link) window.location.href = this.props.frontend.home.link;
    }

    render() {
        const {
            frontend: { home: { loading, message, error, success } },
            enrolments, course, methods, regions, backgrounds
        } = this.props;
        const { selectedPage, background, name, birthdate, region, country, code, phone, email, passport, last_institute, recent_degree, degree_score, reason, terms, policies, method_id } = this.state;
        let content;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        const countriesOptions = this.props.content.countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        const keys = Object.keys(enrolments.form.sections);
        const lang = localStorage.getItem('lang');

        const { sections } = enrolments.form;

        const methodsContent = methods.map(method => <div key={JSON.stringify(method)} className="d-inline-block pr-2 pr-md-3">
            <div onClick={() => this.setState({ method_id: method.id })} className={"cursor-pointer py-1 py-md-2 px-2 px-md-3 rounded-6 text-10 text-md-12 text-xxl-14 text-" + (method.id === +method_id ? "white text-700" : "secondary") + " bg-" + (method.id === +method_id ? "green" : "white")}>{method.name}</div>
        </div>);

        const regionsOptions = regions.map(item => <option value={item.value} key={JSON.stringify(item)}>{item.name}</option>);
        const backgroundsOptions = backgrounds.map(item => <option value={item.value} key={JSON.stringify(item)}>{item.name}</option>);

        if (loading) content = <div className="col-xxl-8 col-xl-10 h-100 d-flex justify-content-center align-items-center">
            <div className="spinner-grow text-green" />
        </div>;

        else if (success) content = <div className="col-xxl-8 col-xl-10 h-100 d-flex flex-column align-items-center justify-content-center">
            <div className="mb-3 mb-xxl-4 text-80 text-green text-center">
                <i className="fas fa-check-double" />
            </div>

            <div className="text-center text-12 text-md-14 text-xxl-16">
                <div className="text-green text-700">{enrolments.form.success.your_payment_processed}</div>

                <div className="text-secondary text-300">{enrolments.form.success.you_will_receive_notification} <span className="text-blue">{email}</span></div>
            </div>
        </div>;

        else content = <div className="col-xxl-8 col-xl-10">
            {errors}
            {feedback}

            <div className="mb-3 mb-md-4 mb-xxl-5 pb-1 pb-md-2 pb-xxl-3 position-relative row mx-0 align-items-end">
                {keys.map((item, index) => {
                    const element = enrolments.form.sections[item];
                    const isSelected = item === selectedPage;

                    return <div key={JSON.stringify(element)} className={"col px-0 text-center enrolment-form-item" + (isSelected ? " selected" : "")}>
                        <div className="d-flex flex-column align-items-center position-relative">
                            {index < keys.length - 1 && <div className="position-absolute w-100 bg-green" style={{ bottom: 17, left: '50%', height: .5, transform: 'translateY(-50%)', zIndex: 2 }} />}

                            <div className="pb-1 pb-md-2 pb-xxl-3">
                                <div className="text-montserrat text-10 text-xxl-12 title">{element.title}</div>
                            </div>

                            <div className="pt-xxl-1">
                                <div className="circle-container text-700 text-8 text-xxl-10 bg-white rounded-circle position-relative">
                                    <div className="circle cursor-pointer" onClick={() => this.setState({ selectedPage: item })}>{index + 1}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div className={"row" + (selectedPage === keys[0] ? "" : " d-none")}>
                <FormInput type="text" className="col-md-6" icon="books" value={course.name[lang]} placeholder={sections[keys[0]].fields.selected_course} readonly />
                <input type="hidden" name="course_id" value={course.id} />

                <FormInput type="text" className="col-md-6" icon="user" onChange={this.inputChangeHandler} name="name" value={name} placeholder={sections[keys[0]].fields.name} />
                <FormInput type="select" className="col-md-6" icon="location" onChange={this.inputChangeHandler} name="region" value={region} placeholder={sections[keys[0]].fields.region}>
                    <option value="">{sections[keys[0]].fields.select_region}</option>
                    {regionsOptions}
                </FormInput>
                <FormInput type="date" className="col-md-6" icon="calendar" onChange={this.inputChangeHandler} name="birthdate" value={birthdate} placeholder={sections[keys[0]].fields.birthdate} />

                <FormInput type="select" className="col-md-6" addon={<div>
                    <div className="rounded-circle mx-auto overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 18, height: 18 }}>
                        <span className={`flag-icon text-large position-absolute flag-icon-${country.toLowerCase()}`} />
                    </div>
                </div>} onChange={this.inputChangeHandler} value={country} name="country" readonly placeholder={sections[keys[0]].fields.select_country}>
                    <option value="">{sections[keys[0]].fields.select_country}</option>
                    {countriesOptions}
                </FormInput>
                <input type="hidden" value={code} name="code" />
                <FormInput type="tel" className="col-md-6" addon={<div className="text-center text-light" style={{ margin: '0 -10px' }}>+{code}</div>} onChange={this.inputChangeHandler} name="phone" value={phone} placeholder={sections[keys[0]].fields.phone} />

                <FormInput type="email" className="col-md-6" icon="envelope" onChange={this.inputChangeHandler} name="email" value={email} placeholder={sections[keys[0]].fields.email} />
                <FormInput type="text" className="col-md-6" icon="passport" onChange={this.inputChangeHandler} name="passport" value={passport} placeholder={sections[keys[0]].fields.passport} />

                <FormInput type="select" className="col-md-6" icon="diploma" onChange={this.inputChangeHandler} name="background" value={background} placeholder={sections[keys[0]].fields.background}>
                    <option value="">{sections[keys[0]].fields.select_background}</option>
                    {backgroundsOptions}
                </FormInput>

                <FormInput type="text" className="col-md-6" icon="university" onChange={this.inputChangeHandler} name="last_institute" value={last_institute} placeholder={sections[keys[0]].fields.last_institute} />
                <FormInput type="text" className="col-md-6" icon="diploma" onChange={this.inputChangeHandler} name="recent_degree" value={recent_degree} placeholder={sections[keys[0]].fields.recent_degree} />
                <FormInput type="number" className="col-md-6" icon="star-half" onChange={this.inputChangeHandler} name="degree_score" value={degree_score} placeholder={sections[keys[0]].fields.degree_score} />
            </div>



            <div className={"row" + (selectedPage === keys[1] ? "" : " d-none")}>
                <div className="col-12 text-montserrat text-10 text-xxl-12 mb-2 mb-md-3 mb-xxl-4">{sections[keys[1]].fields.select}</div>

                {Object.keys(sections[keys[1]].fields.subjects).map(key => {
                    const subject = sections[keys[1]].fields.subjects[key];
                    const value = this.state[key];
                    let color = 'orange';

                    if (value < 2.5) color = 'red';
                    else if (value > 3) color = 'green';

                    return <FormGroup key={key + Math.random()} className="col-12">
                        <div className="rounded-6 bg-white p-2 p-md-3 p-xxl-4">
                            <div className="px-md-1 px-xxl-2 d-flex align-items-center justify-content-between">
                                <div className="text-10 text-md-12 text-xxl-14">
                                    {sections[keys[1]].fields.english_level} <strong>{subject}</strong>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div>
                                        <input type="hidden" name={key} value={value} />
                                        <Stars target={key} mark={value} onChange={value => this.starRating(key, value)} />
                                    </div>

                                    <div className="pl-3 pl-md-4 pl-xxl-5">
                                        <div className={"ml-1 ml-md-2 ml-xxl-3 py-1 px-2 rounded-4 text-700 text-center bg-" + color + '-25 text-' + color} style={{ width: 40 }}>{value}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FormGroup>
                })}

                <FormGroup className="col-12">
                    <Input type="textarea" className="text-10 text-md-12 text-xxl-14 text-secondary border-0 p-2 p-md-3 p-xxl-4" onChange={this.inputChangeHandler} name="reason" value={reason} placeholder={sections[keys[1]].fields.reason} />
                </FormGroup>
            </div>



            <div className={"row" + (selectedPage === keys[2] ? "" : " d-none")}>
                <div className="col-12 text-montserrat text-10 text-xxl-12 mb-2 mb-md-3 mb-xxl-4">{sections[keys[2]].fields.upload_documents}</div>

                {Object.keys(sections[keys[2]].fields.documents).map(key => {
                    const document = sections[keys[2]].fields.documents[key];

                    return <FormGroup key={key + Math.random()} className="col-xxl-4 col-md-6">
                        <div onClick={() => this.fileUpload(key)} className={"cursor-pointer d-flex h-100 flex-column align-items-center justify-content-center text-center rounded-6 bg-" + (this.state[key] ? "green text-white" : "greenblue-5 text-secondary") + " py-1 py-md-2 py-xxl-3"}>
                            <div className="pb-2">
                                <i className={"fas fa-" + (this.state[key] ? "check-circle" : "cloud-upload text-greenblue")} />
                            </div>

                            <div className="text-10 text-xxl-12 text-300">
                                {!this.state[key] ? document : <>{sections[keys[2]].fields.uploaded} <span className="text-700">{this.state[key].name}</span></>}
                            </div>
                        </div>
                    </FormGroup>
                })}

                <input type="hidden" name="method_id" value={method_id} />

                <FormGroup className="col-12">
                    <FormGroup check className="text-10 text-xxl-12">
                        <Label check>
                            <Input type="checkbox" onChange={this.inputChangeHandler} name="terms" checked={terms} />{' ' + sections[keys[2]].fields.terms}
                        </Label>
                    </FormGroup>
                    <FormGroup check className="text-10 text-xxl-12">
                        <Label check>
                            <Input type="checkbox" onChange={this.inputChangeHandler} name="policies" checked={policies} />{' ' + sections[keys[2]].fields.policies}
                        </Label>
                    </FormGroup>
                </FormGroup>
            </div>



            {/* <div className={"row" + (selectedPage === keys[3] ? "" : " d-none")}>
                <div className="col-12 text-montserrat text-10 text-xxl-12 mb-2 mb-md-3 mb-xxl-4">{sections[keys[3]].fields.select_payment_method}</div>

                <div className="col-12 mt--2 mt-xxl-3 bg-greenblue-10 rounded-10 px--3 px-xxl-4 py-1 py-xxl-2 mb-4 mb-xxl-5">
                    <div className="position-relative text-14 text-md-17 text-xxl-20 text-500 text-greenblue mb-3 mb-xxl-4 py-2 py-xxl-3 border-bottom border-border">
                        {sections[keys[3]].fields.please_select_payment_method}
                    </div>

                    <input type="hidden" name="method_id" value={method_id} />

                    <div className="mb-2 mb-xxl-3">{methodsContent}</div>
                </div>

                <FormGroup check className="col-12 text-10 text-xxl-12">
                    <Label check>
                        <Input type="checkbox" onChange={this.inputChangeHandler} name="terms" checked={terms} />{' ' + sections[keys[3]].fields.terms}
                    </Label>
                </FormGroup>
                <FormGroup check className="col-12 text-10 text-xxl-12">
                    <Label check>
                        <Input type="checkbox" onChange={this.inputChangeHandler} name="policies" checked={policies} />{' ' + sections[keys[3]].fields.policies}
                    </Label>
                </FormGroup>
            </div> */}



            <div className="row mt-3 mt-md-4 mt-5 pt-2 pt-md-3 pt-xxl-4">
                {selectedPage !== keys[0] && <div className="col-6">
                    <button type="button" onClick={this.previous} className="btn btn-red btn-block position-relative text-10 text-md-12 text-xxl-14 text-700 py-2 py-md-3 py-xxl-4">
                        {enrolments.form.nav.previous}

                        <i className="fad fa-long-arrow-left ml-3 ml-md-4 ml-xxl-5 position-absolute" style={{ top: '50%', left: 0, transform: 'translateY(-50%)' }} />
                    </button>
                </div>}

                {selectedPage !== keys[keys.length - 1] && <div className="col-6">
                    <button type="button" onClick={this.next} className="btn btn-green btn-block position-relative text-10 text-md-12 text-xxl-14 text-700 py-2 py-md-3 py-xxl-4">
                        {enrolments.form.nav.next}

                        <i className="fad fa-long-arrow-right mr-3 mr-md-4 mr-xxl-5 position-absolute" style={{ top: '50%', right: 0, transform: 'translateY(-50%)' }} />
                    </button>
                </div>}

                {selectedPage === keys[keys.length - 1] && <div className="col-6">
                    <button className="btn btn-greenblue btn-block position-relative text-10 text-md-12 text-xxl-14 text-700 py-2 py-md-3 py-xxl-4">
                        {enrolments.form.nav.finish}

                        <i className="fad fa-long-arrow-right mr-3 mr-md-4 mr-xxl-5 position-absolute" style={{ top: '50%', right: 0, transform: 'translateY(-50%)' }} />
                    </button>
                </div>}
            </div>
        </div>;

        return <form className="EnrolmentForm row justify-content-center h-100" encType="multipart/form-data" onSubmit={this.submitHandler}>
            <input type="file" id="nid" name="nid" className="d-none" onChange={this.inputChangeHandler} accept=".pdf,.jpeg,.jpg,.png" />
            <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".pdf,.jpeg,.jpg,.png" />
            <input type="file" id="diploma" name="diploma" className="d-none" onChange={this.inputChangeHandler} accept=".pdf,.jpeg,.jpg,.png" />
            <input type="file" id="cv" name="cv" className="d-none" onChange={this.inputChangeHandler} accept=".pdf,.jpeg,.jpg,.png" />

            {content}
        </form>
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    post: data => dispatch(postHome(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnrolmentForm);