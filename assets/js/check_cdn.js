$(document).ready(function () {
    if (!$.fn.modal) {
        //document.write(unescape("%3Cscript src='/assets/js/bootstrap.bundle.min.js' %3E%3C/script%3E"));
        var script = document.createElement('script');
        script.src = 'assets/js/bootstrap.min.js';
        document.head.appendChild(script);
    }

    var bodyColor = $('body').css("color");
    console.log(bodyColor);
    if (bodyColor != 'rgb(33, 37, 41)') {
        alert('caido por cdn');
        var link = document.createElement('link');
        link.href = 'assets/css/bootstrap.min.css'
        link.rel = "stylesheet"
        document.head.appendChild(link);
    }
});
