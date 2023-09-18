//remove alert messages after 3 seconds

var milliseconds = 3000;
setTimeout(function () {
    document.getElementById('msg').remove();
}, milliseconds);

// Disable right-click on the entire document

var images = document.querySelectorAll('img');
images.forEach(function (image) {
    image.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});