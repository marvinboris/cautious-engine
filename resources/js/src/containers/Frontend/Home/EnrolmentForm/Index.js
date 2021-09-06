import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup } from 'reactstrap';

import FormInput from '../../../../components/UI/Input/Input';

import './EnrolmentForm.css';

class EnrolmentForm extends Component {
    state = {
        background: '',
        name: '',
        region: '',
        country: 'CM',
        code: '237',
        phone: '',
        email: '',
        passport: '',
        last_institute: '',
        recent_degree: '',
        degree_score: '',
        cv: null,

        selectedPage: '',
    }



    submitHandler = e => {
        e.preventDefault();
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (name === 'country') return this.setState({ country: value, code: this.props.content.countries.find(({ country }) => country === value).code });
        this.setState({ [name]: files ? files[0] : value })
    }

    fileUpload = () => document.getElementById('cv').click()

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



    componentDidMount() {
        this.setState({ selectedPage: Object.keys(this.props.enrolments.form.sections)[0] });
    }

    render() {
        const { enrolments, course } = this.props;
        const { selectedPage, background, name, region, country, code, phone, email, passport, last_institute, recent_degree, degree_score, cv } = this.state;

        const countriesOptions = this.props.content.countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        const keys = Object.keys(enrolments.form.sections);
        const lang = localStorage.getItem('lang');

        const { sections } = enrolments.form;

        return <form className="EnrolmentForm" onSubmit={this.submitHandler}>
            <div className="mb-3 mb-md-4 mb-xxl-5 pb-1 pb-md-2 pb-xxl-3 position-relative d-flex align-items-end justify-content-between">
                {keys.map((item, index) => {
                    const element = enrolments.form.sections[item];
                    const isSelected = item === selectedPage;

                    return <div key={JSON.stringify(element)} className={"enrolment-form-item" + (isSelected ? " selected" : "")}>
                        <div className="d-flex flex-column align-items-center">
                            <div className="pb-1 pb-md-2 pb-xxl-3">
                                <div className="text-montserrat text-8 text-md-10 text-xxl-12 title">{element.title}</div>
                            </div>

                            <div className="pt-xxl-1 text-700 text-6 text-md-8 text-xxl-10 position-relative">
                                <div className="circle">{index + 1}</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div className={"row" + (selectedPage === keys[0] ? "" : " d-none")}>
                <FormInput type="text" className="col-md-6" icon="books" value={course.name[lang]} placeholder={sections[keys[0]].fields.selected_course} readonly />
                <input type="hidden" name="course_id" value={course.id} />

                <FormInput type="text" className="col-md-6" icon="diploma" onChange={this.inputChangeHandler} name="background" value={background} placeholder={sections[keys[0]].fields.background} required />
                <FormInput type="text" className="col-md-6" icon="user" onChange={this.inputChangeHandler} name="name" value={name} placeholder={sections[keys[0]].fields.name} required />
                <FormInput type="text" className="col-md-6" icon="location" onChange={this.inputChangeHandler} name="region" value={region} placeholder={sections[keys[0]].fields.region} required />

                <FormInput type="select" className="col-md-6" addon={<div>
                    <div className="rounded-circle mx-auto overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 18, height: 18 }}>
                        <span className={`flag-icon text-large position-absolute flag-icon-${country.toLowerCase()}`} />
                    </div>
                </div>} onChange={this.inputChangeHandler} value={country} name="country" required placeholder={sections[keys[0]].fields.select_country}>
                    <option>{sections[keys[0]].fields.select_country}</option>
                    {countriesOptions}
                </FormInput>
                <input type="hidden" value={code} name="code" />
                <FormInput type="tel" className="col-md-6" addon={<div className="text-center text-light" style={{ margin: '0 -10px' }}>+{code}</div>} onChange={this.inputChangeHandler} name="phone" value={phone} placeholder={sections[keys[0]].fields.phone} required />

                <FormInput type="email" className="col-md-6" icon="envelope" onChange={this.inputChangeHandler} name="email" value={email} placeholder={sections[keys[0]].fields.email} required />
                <FormInput type="text" className="col-md-6" icon="passport" onChange={this.inputChangeHandler} name="passport" value={passport} placeholder={sections[keys[0]].fields.passport} required />
                <FormInput type="text" className="col-md-6" icon="university" onChange={this.inputChangeHandler} name="last_institute" value={last_institute} placeholder={sections[keys[0]].fields.last_institute} required />
                <FormInput type="text" className="col-md-6" icon="diploma" onChange={this.inputChangeHandler} name="recent_degree" value={recent_degree} placeholder={sections[keys[0]].fields.recent_degree} required />
                <FormInput type="number" className="col-md-6" icon="star-half" onChange={this.inputChangeHandler} name="degree_score" value={degree_score} placeholder={sections[keys[0]].fields.degree_score} required />

                <FormGroup className="col-md-6">
                    <div onClick={this.fileUpload} className="cursor-pointer bg-greenblue-10 rounded-6 px-2 px-md-3 px-xxl-4 py-1 py-md-2 py-xxl-3 d-flex align-items-center justify-content-between">
                        <div className="text-small text-300 text-secondary">
                            {sections[keys[0]].fields.upload_cv}
                        </div>

                        <div><i className="fas fa-upload text-nightblue text-14 text-md-16 text-xxl-18" /></div>
                    </div>
                </FormGroup>
            </div>

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
                        {enrolments.form.nav.submit}

                        <i className="fad fa-long-arrow-right mr-3 mr-md-4 mr-xxl-5 position-absolute" style={{ top: '50%', right: 0, transform: 'translateY(-50%)' }} />
                    </button>
                </div>}
            </div>
        </form>
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EnrolmentForm);