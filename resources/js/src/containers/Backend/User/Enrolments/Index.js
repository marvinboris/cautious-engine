import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import View from '../../../../components/Backend/UI/View/View';

import { getEnrolments, deleteEnrolments, resetEnrolments } from '../../../../store/actions/backend/enrolments';
import { updateObject, convertDate, } from '../../../../shared/utility';

const icon = "user";

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action, see } }, backend: { pages: { enrolments: { title, index, form } } } }
                }
            },
            backend: { enrolments: { loading, error, message, enrolments, total } },
            auth: { data: { role: { features } } }
        } = this.props;

        const feature = features.find(f => f.prefix === 'enrolments');
        const redirect = !feature && <Redirect to="/user/dashboard" />;
        const lang = localStorage.getItem('lang');

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        if (!enrolments) enrolments = [];
        const data = enrolments.map(enrolment => {
            return updateObject(enrolment, {
                created_at: convertDate(enrolment.created_at),
                course: enrolment.course[lang],
                photo: enrolment.photo && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <View title={`${form.enrolment_photo}: ${enrolment.name}`} content={<img src={enrolment.photo} className="w-100" />}>
                            <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                        </View>
                    </span>
                </div>,
                nid: enrolment.nid && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <a href={enrolment.nid} className="text-reset">
                            <i className="fas fa-file-download text-green mr-2" />
                        </a>
                    </span>
                </div>,
                diploma: enrolment.diploma && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <a href={enrolment.diploma} className="text-reset">
                            <i className="fas fa-file-download text-green mr-2" />
                        </a>
                    </span>
                </div>,
                cv: enrolment.cv && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <a href={enrolment.cv} className="text-reset">
                            <i className="fas fa-file-download text-green mr-2" />
                        </a>
                    </span>
                </div>,
                action: <div className="text-center">
                    <Link to={`/user/enrolments/${enrolment.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    {JSON.parse(feature.permissions).includes('u') && <Link to={`/user/enrolments/${enrolment.id}/edit`} className="mx-1">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>}
                    {JSON.parse(feature.permissions).includes('d') && <span className="mx-1"><Delete deleteAction={() => this.props.delete(enrolment.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>}
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(enrolments)} get={this.props.get} total={total} bordered icon={icon} title={index} className="shadow-sm"
                        fields={[
                            { name: form.ref, key: 'ref' },
                            { name: form.created_at, key: 'created_at' },
                            { name: form.name, key: 'name' },
                            { name: form.course, key: 'course' },
                            { name: form.region, key: 'region' },
                            { name: form.email, key: 'email' },
                            { name: form.phone, key: 'phone' },
                            { name: form.photo, key: 'photo' },
                            { name: form.nid, key: 'nid' },
                            { name: form.diploma, key: 'diploma' },
                            { name: form.cv, key: 'cv' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{index}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    {flash}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(getEnrolments(page, show, search)),
    delete: id => dispatch(deleteEnrolments(id)),
    reset: () => dispatch(resetEnrolments()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));