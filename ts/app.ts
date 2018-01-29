const eForm1 = document.getElementById('registrar');
const eMain = document.getElementsByClassName('main');
const eInput1 = eForm1.querySelector('input');
const eUl    = document.getElementById('invitedList');

//for filtering who has responded
const eDiv = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterCheckbox.type = 'checkbox'
filterLabel.textContent = "Hide those who haven't responded";

//add label into div 
eDiv.appendChild( filterLabel );

//add checkbox in label
eDiv.appendChild( filterCheckbox );

//prepend div before UL
eMain[0].insertBefore( eDiv, eUl );

filterCheckbox.addEventListener('change', (e:any) => {
    const isChecked = e.target.checked;
    const lis = eUl.children;

    if( isChecked ){
        //loop through all list items using the children property 
        for (let i = 0; i < lis.length; i++) {
            let li:any = lis[i];
            if( li.className == 'responded' ){
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        } 
    } else {
        for (let i = 0; i < lis.length; i++) {
            let li:any = lis[i];   
            li.style.display = '';
        }
    }
});

function createLI( text ){
    const li    = document.createElement('li');
    const eSpan  = document.createElement('span');
    eSpan.textContent = text;
    li.appendChild(eSpan);
    //create a label
    const label = document.createElement('label');
    label.textContent = "Confirmed";

    //create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    //append checkbox to the label
    label.appendChild(checkbox);  

    //append label+checkbox to the list item
    li.appendChild(label); 

    //create cremove button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);  

    //create cremove button
    const rmBtn = document.createElement('button');
    rmBtn.textContent = 'Remove';
    li.appendChild(rmBtn);  

    return li;
}


eForm1.addEventListener('submit', (e) => {
    const eText     = eInput1.value;
    eInput1.value   = '';

    const li = createLI( eText );
    
    //append list item to list  
    eUl.appendChild(li);
    return e.preventDefault();   
}); 

eUl.addEventListener('change', (e:any) => {
    const checkbox = e.target;
    const checked = checkbox.checked;

    //need a reference to the checkbox. LI is the granparent, checkbox child of label, label is child of the li
    const listItem = checkbox.parentNode.parentNode;

    if( checked ){
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }

    // if(  )
});

eUl.addEventListener('click', (e:any) => {
    //filter out elements that arent buttons
    if( e.target.tagName === 'BUTTON' ){
        const li = e.target.parentNode;
        const ul = li.parentNode;

        if( e.target.textContent =='Remove' ){
            ul.removeChild(li);
        } else if( e.target.textContent =='Edit' ) {
            //edit button
            const eSpan     = li.firstElementChild;
            const spanInput = document.createElement('input');
            spanInput.type = 'text';
            spanInput.value  = eSpan.textContent;
            li.insertBefore(spanInput, eSpan);
            li.removeChild(eSpan);

            //change edit to save
            e.target.textContent = 'Save';
        } else if( e.target.textContent =='Save' ) {
            //save button
            //get text input 
            const spanInput = li.firstElementChild;

            //use text input value to set span textContent
            const eSpan = document.createElement('span');
            eSpan.textContent = spanInput.value;

            // add Span  
            li.insertBefore( eSpan, spanInput );

            //remove Input
            li.removeChild( spanInput );
            
            //change button text to edit
            e.target.textContent = "Edit";
        }

    }

});