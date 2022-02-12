// in this we are assuming div id is app and we are gonna add stuff to it

const app = document.getElementById('app');

// Using document.createElement()

function createInputDOM({label, type = 'text',}) {
    const labelEl = document.createElement('label');
    const inputEl = document.createElement('input');

    inputEl.type = type; // the one which we passed through the function params which is text in this case
    labelEl.innerText = label; 
    labelEl.append(inputEl);
    
    return labelEl;
}

const inputFromDOM = createInputDOM({label: 'Name', type: 'text'});
console.log(inputFromDOM);
app.append(inputFromDOM);

// Using string Template Method 
function createInputTemplate({label, type = 'text',}) {
    return `
    <label>
        ${label}
        <input type="${type}"/>
    </label>`;
}

const inputFromTemplate = createInputTemplate({label: 'Email', type: 'email'});
app.innerHTML += inputFromTemplate;