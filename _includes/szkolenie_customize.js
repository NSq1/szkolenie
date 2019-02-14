var href = $(location).attr("href");
if (href.indexOf('127.0.0.1') > 0) {
    href = href.substr(0, href.lastIndexOf(':4000')) + ':4000/';
} else {
    href = href.substr(0, href.lastIndexOf('/szkolenie/')) + '/szkolenie/';
}
$.getScript(href + "assets/js/szkolenie.js");
$.getScript(href + "assets/js/featherlight.min.js");
$('head')
    .append($('<link rel="stylesheet" type="text/css" />')
        .attr('href', href + 'assets/css/szkolenie.css'));
$('head')
    .append($('<link rel="stylesheet" type="text/css" />')
        .attr('href', '//cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.css'));