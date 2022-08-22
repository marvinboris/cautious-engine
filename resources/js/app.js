require('./bootstrap');

$(function () {
    $.getScript('/js/jquery.star-rating-svg.js');
    $.getScript("https://kit.fontawesome.com/762c591422.js");

    window.CORS = "https://api.allorigins.win/get?url=";
    window.PREFIX = '/api/';

    if (localStorage.getItem('lang') == "undefined" || !localStorage.getItem('lang')) localStorage.setItem('lang', process.env.MIX_DEFAULT_LANG || 'en');

    require('./src');
});