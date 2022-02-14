app.innerHTML = `
    <h1>Looping</h1>
    <ul> id = "list" </ul>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
    </ul>    
    `;

const listItems = document.querySelectorAll('#list li');
console.log(listItems);

for (let index = 0; index < listItems.length; index++) {
    console.log(array[index]); 
    
}

for (const item of listItems) {
    console.log(item);
    
}

[...listItems].forEach(item => console.log(item));
   

Array.from(listItems).forEach(item => console.log(item));
