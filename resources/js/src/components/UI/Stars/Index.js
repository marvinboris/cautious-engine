import React, { Component } from 'react';

import '../../../assets/css/star-rating-svg.css';

export default class Stars extends Component {
    stars = () => {
        $(".ranking-stars.stars-" + this.props.color + ".target-" + this.props.target).starRating({
            strokeColor: this.props.color,
            activeColor: this.props.color,
            strokeWidth: 10,
            starSize: 25,
            useFullStars: true,
            disableAfterRate: false,
            callback: currentRating => {
                $('input[name="' + this.props.target + '"]').val(currentRating);
                $('.mark-' + this.props.target).html(currentRating);
            }
        });

        $(".stars").starRating({
            readOnly: true,
            strokeWidth: 9,
            starSize: 12,
            strokeColor: 'orange',
            activeColor: 'orange',
            emptyColor: 'transparent',
        });

        $(".stars.stars-10").starRating({
            starSize: 10,
        });

        $(".stars.stars-14").starRating({
            starSize: 14,
        });
    }

    componentDidMount() {
        this.stars();
    }

    render() {
        const { mark, readOnly, lg, className = "", color, target } = this.props;

        return <div className="overflow-hidden" style={readOnly && { height: 15 }}>
            <div style={readOnly && { top: -6 }} className={`position-relative ${lg ? "stars-14" : "stars-10"} ${readOnly ? "stars" : "ranking-stars"} stars-${color} target-${target} ${className}`} data-rating={mark} />
        </div>;
    }
}