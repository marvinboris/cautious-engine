import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Logo.css';

class Logo extends Component {
    render() {
        const {
            big, sm, dark,
            content: {
                cms: {
                    global: { logo, app_name }
                }
            }
        } = this.props;

        return <div className="UI Logo mb-0 text-white">
            <div className="text-phosphor text-20">{app_name}</div>
            {/* <img src={big ? '/images/logo-big.png' : dark ? logo : logo} className={"mw-100" + (big ? " big " : "") + (sm ? " sm " : "") + (dark ? " dark" : "")} /> */}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Logo);