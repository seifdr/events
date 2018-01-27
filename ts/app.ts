import { getDefaultLibFilePath } from "typescript";

const eForm = document.getElementById('registrar');
const eInput = eForm.querySelector('input');

eForm.addEventListener('submit', (e) => {
    console.log( eInput.value ); 
    return e.preventDefault();
}); 