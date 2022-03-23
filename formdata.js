app.innerHTML = `
    <h1>Javascript Form</h1>
    <form name="order">
        <label>
            Your name
            <input type="text" name="name" />
        </label>
        <button type="submit">
        Submit
        </button>
    </form>
`;

const forms = document.forms.order;

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
}
// Sending to server

// query string 
const asString = new URLSearchParams(formData).toString;
console.log(asString);
// use json 
const asJson = Object.fromEntries(formData);
console.log(asJson);

form.addEventListener('submit', handleSubmit)