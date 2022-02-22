const btnBuild = document.getElementById('build')
const btnClear = document.getElementById('clear')
const textArea = document.getElementById('text-area')
const resultBox = document.getElementById('output-content')


const buildTree = () => {
    console.log('build tree')
}

const clear = () => {
    console.log('clear')
    resultBox.innerHTML = '';
    textArea.value = ''
}


const inputToJSON = (input) => {
    let inputJSON = {}
    try {
        inputJSON = typeof input === 'string' ? JSON.parse(input) : input
    }
    catch (err) {
        console.log(err)
    }
    console.log(inputJSON)
    return inputJSON
}

const colorByType = (value) => {
    const type = typeof value
    const key = value === null ? value : type
    const styleObj = {
        number: 'green',
        boolean: 'orange',
        string: 'red',
        null: 'blue',
        default: 'black',
    }
    return styleObj[key] || styleObj.default
}

const jsonToHrml = (data) => {
    const json = inputToJSON(data)
    const htmlArr = [`<ul style="display: block">`]
    for (let [key, value] of Object.entries(json)) {
        if (typeof value === 'object' && value !== null) {
            const objLength = Array.isArray(value)
                ? `[${value.length}]`
                : `{${Object.keys(value).length}}`
            htmlArr.push(`<li class="clickable">${key} ${objLength}:`);
            htmlArr.push(jsonToHrml(value))
        }
        else {
            let content = value
            const style = colorByType(content)
            htmlArr.push(
                `<li>${key}: 
                    <span class="${style}">${content}</span>
                </li>`
            )
        }
    }
    htmlArr.push('</ul>')
    return htmlArr.join('')
}


const setClickListeners = () => {
    const clickableElements = document.getElementsByClassName('clickable');

    Array.from(clickableElements).forEach((element) => {
        element.onclick = (event) => {
            event.stopPropagation()
            const node = element.lastChild;

            if (node.style.display === 'block') {
                node.style.display = 'none';
                element.classList.add('clickable-rotate');
            } else {
                node.style.display = 'block';
                element.classList.remove('clickable-rotate');
            }
        };
    });
};


const outJSON = (input) =>{
    const jsontohtml = jsonToHrml(input)
    resultBox.innerHTML = jsontohtml;
    setClickListeners()
}


window.onload = () => {
    btnBuild.addEventListener('click', () => outJSON(textArea.value))
    btnClear.addEventListener('click', clear)

}