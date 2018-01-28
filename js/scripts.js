var eForm = document.getElementById('registrar');
var eInput = eForm.querySelector('input');
eForm.addEventListener('submit', function (e) {
    var ul = document.getElementById('invitedList');
    var li = document.createElement('li');
    li.textContent = eInput.value;
    // console.log( eInput.value );
    ul.appendChild(li);
    return e.preventDefault();
});
