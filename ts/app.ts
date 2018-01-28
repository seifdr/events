const eForm = document.getElementById('registrar');
const eInput = eForm.querySelector('input');

eForm.addEventListener('submit', (e) => {
    const ul    = document.getElementById('invitedList');
    const li    = document.createElement('li');
    li.textContent = eInput.value;
    // console.log( eInput.value );
    ul.appendChild(li);
    return e.preventDefault();  
}); 