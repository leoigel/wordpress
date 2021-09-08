$(document).ready(function () {

    //Query Link
    var Queryurl = location.search;

    LogoUrl4 = $('.back a').attr('href');
    newLogoUrl4 = LogoUrl4+'/'+Queryurl;
    $('.back a').attr('href',newLogoUrl4);

});