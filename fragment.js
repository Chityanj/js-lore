const data = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const fragment = document.createDocumentFragment(); // create offscreen node for fragment

data.forEach(name => {
    const li = document.createElement('li');
    li.innerText = name;
    // app.append(li); this is slow in performance cuz browser have to paint repaint everytime loops run
    fragment.appendChild(li);
});

app.append(fragment); // only one time repaint