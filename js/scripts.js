var eForm1 = document.getElementById('registrar');
var eMain = document.getElementsByClassName('main');
var eInput1 = eForm1.querySelector('input');
var eUl = document.getElementById('invitedList');
//for filtering who has responded
var eDiv = document.createElement('div');
var filterLabel = document.createElement('label');
var filterCheckbox = document.createElement('input');
filterCheckbox.type = 'checkbox';
filterLabel.textContent = "Hide those who haven't responded";
//add label into div 
eDiv.appendChild(filterLabel);
//add checkbox in label
eDiv.appendChild(filterCheckbox);
//prepend div before UL
eMain[0].insertBefore(eDiv, eUl);
filterCheckbox.addEventListener('change', function (e) {
    var isChecked = e.target.checked;
    var lis = eUl.children;
    if (isChecked) {
        //loop through all list items using the children property 
        for (var i = 0; i < lis.length; i++) {
            var li = lis[i];
            if (li.className == 'responded') {
                li.style.display = '';
            }
            else {
                li.style.display = 'none';
            }
        }
    }
    else {
        for (var i = 0; i < lis.length; i++) {
            var li = lis[i];
            li.style.display = '';
        }
    }
});
function createLI(text) {
    var li = document.createElement('li');
    var eSpan = document.createElement('span');
    eSpan.textContent = text;
    li.appendChild(eSpan);
    //create a label
    var label = document.createElement('label');
    label.textContent = "Confirmed";
    //create checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    //append checkbox to the label
    label.appendChild(checkbox);
    //append label+checkbox to the list item
    li.appendChild(label);
    //create cremove button
    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
    //create cremove button
    var rmBtn = document.createElement('button');
    rmBtn.textContent = 'Remove';
    li.appendChild(rmBtn);
    return li;
}
eForm1.addEventListener('submit', function (e) {
    var eText = eInput1.value;
    eInput1.value = '';
    var li = createLI(eText);
    //append list item to list  
    eUl.appendChild(li);
    return e.preventDefault();
});
eUl.addEventListener('change', function (e) {
    var checkbox = e.target;
    var checked = checkbox.checked;
    //need a reference to the checkbox. LI is the granparent, checkbox child of label, label is child of the li
    var listItem = checkbox.parentNode.parentNode;
    if (checked) {
        listItem.className = 'responded';
    }
    else {
        listItem.className = '';
    }
    // if(  )
});
eUl.addEventListener('click', function (e) {
    //filter out elements that arent buttons
    if (e.target.tagName === 'BUTTON') {
        var li = e.target.parentNode;
        var ul = li.parentNode;
        if (e.target.textContent == 'Remove') {
            ul.removeChild(li);
        }
        else if (e.target.textContent == 'Edit') {
            //edit button
            var eSpan = li.firstElementChild;
            var spanInput = document.createElement('input');
            spanInput.type = 'text';
            spanInput.value = eSpan.textContent;
            li.insertBefore(spanInput, eSpan);
            li.removeChild(eSpan);
            //change edit to save
            e.target.textContent = 'Save';
        }
        else if (e.target.textContent == 'Save') {
            //save button
            //get text input 
            var spanInput = li.firstElementChild;
            //use text input value to set span textContent
            var eSpan = document.createElement('span');
            eSpan.textContent = spanInput.value;
            // add Span  
            li.insertBefore(eSpan, spanInput);
            //remove Input
            li.removeChild(spanInput);
            //change button text to edit
            e.target.textContent = "Edit";
        }
    }
});
