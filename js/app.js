"use strict";
exports.__esModule = true;
var eForm = document.getElementById('registrar');
var eInput = eForm.querySelector('input');
eForm.addEventListener('submit', function (e) {
    console.log(eInput.value);
    return e.preventDefault();
});
