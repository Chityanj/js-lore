app.innerHTML = `
    <h1>Javascript Form</h1>
    <form name="order">
        <label>
            Your name
            <input type="text" name="name" />
        </label>
    </form>
`
const form = document.forms.order
const name = form.elements.name
// If more than one input is 
//  const {name, email} = form.elements

function handleInput(e) {
    console.log(e.target.value)

    console.log(e.target.form)
}

fullname.addEventListener('input', handleInput)