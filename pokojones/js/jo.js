//button-menu//
const redirectButton = document.getElementById("menu-btn");

redirectButton.addEventListener('click', function() {
    window.location.href = "";
});

//paragraph-hover//
var paragraph = document.getElementById('output');

    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    var p3 = document.getElementById('p3');
    var p4 = document.getElementById('p4');

    p1.addEventListener('mouseover', function () {
      paragraph.innerText = 'You hovered over Item 1.';
    });

    p2.addEventListener('mouseover', function () {
      paragraph.innerText = 'You hovered over Item 2.';
    });

    p3.addEventListener('mouseover', function () {
      paragraph.innerText = 'You hovered over Item 3.';
    });

    p4.addEventListener('mouseover', function () {
        paragraph.innerText = 'You hovered over Item 3.';
      });