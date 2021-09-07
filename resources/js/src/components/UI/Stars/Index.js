import React, { Component } from 'react';

import '../../../assets/css/star-rating-svg.css';

export default class Stars extends Component {
    componentDidMount() {
        $(".ranking-stars.target-" + this.props.target).starRating({
            hoverColor: "#e98809",
            ratedColors: ['#ff0b33', '#ff0b33', '#e98809', '#439100', '#439100'],
            strokeWidth: 0,
            starSize: 25,
            initalRating: 2.5,
            disableAfterRate: false,
            callback: currentRating => {
                const { onChange } = this.props;
                onChange(currentRating);
            }
        });
    }

    render() {
        const { mark, className = "", target } = this.props;

        return <div className="overflow-hidden">
            <div className={`position-relative ranking-stars target-${target} ${className}`} data-rating={mark} />
        </div>;
    }
}