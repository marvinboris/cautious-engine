import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope, faHeadset, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Logo from '../../components/UI/Logo/Logo';

import './Frontend.css';

const Block = ({ children, title, className }) => (
    <div className={'pt-3 pt-md-0 ' + className}>
        <div className="text-700 text-white position-relative pb-2 mb-3">
            <div className="text-15 text-md-17 text-xxl-20">{title}</div>

            <div className="border-bottom border-white-20 position-absolute" style={{ width: 87, bottom: 0, left: 0 }}>
                <FontAwesomeIcon icon={faCircle} className="text-lightblue text-xx-small position-absolute" style={{ top: 0, left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
        </div>

        <div className="d-flex flex-column">
            <div className="text-13 text-md-15 text-xxl-18">{children}</div>
        </div>
    </div>
);

class Layout extends Component {
    render() {
        const {
            children,
            content: {
                cms: {
                    global: { company_name }, pages: { frontend: { footer } }
                }
            }
        } = this.props;

        return <div className="Frontend bg-white">
            <div className="min-vh-100 d-flex flex-column">
                <Toolbar />

                <main className="flex-fill bg-white text-secondary">
                    {children}
                </main>

                <footer className="bg-darkblue text-300 text-white">
                    <div className="container-xxl">
                        <div className="text-center py-2 py-md-3 py-xxl-4">
                            <div>
                                {footer.made_with_love} {footer.by} <span className="text-700">{company_name}</span>.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Layout));