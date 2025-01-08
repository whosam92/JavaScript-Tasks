document.addEventListener("DOMContentLoaded", function () {
    var showLinks = document.querySelectorAll('.showlink a');
    var hideLinks = document.querySelectorAll('.text a');

    showLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var article = link.closest('article');
            var text = article.querySelector('.text');
            text.style.display = 'block';
        });
    });

    hideLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var article = link.closest('article');
            var text = article.querySelector('.text');
            text.style.display = 'none';
        });
    });
});