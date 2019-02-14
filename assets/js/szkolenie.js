var initSpoilers = function() {
    $('input[type="button"].spoiler')
        .val('+')
        .on('click', function() {
            console.log('click');
            $(this)
                .closest('div')
                .children('pre.spoiler')
                .toggle('slow');
            if (this.value == '-') {
                this.value = '+';
            } else {
                this.value = '-';
            };
            return false;
        });
}
if (document.readyState === "complete"){
    initSpoilers();
} else {
    window.addEventListener('load', initSpoilers, false);
}