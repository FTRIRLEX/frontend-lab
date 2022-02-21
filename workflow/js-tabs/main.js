const tabs = [
    {
        id: 1,
        title: 'Javascript',
        content: 'JavaScript — прототипно-ориентированный сценарный язык программирования. Является реализацией языка ECMAScript. ' + `<br><br>` +
            'JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. ' +
            'Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.',
    },
    {
        id: 2,
        title: 'Jquery',
        content: 'jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. ' +
            'Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. ' +
            'Также библиотека jQuery предоставляет удобный API для работы с AJAX. Сейчас разработка jQuery ведётся командой jQuery во главе с Джоном Резигом.',
    },
    {
        id: 3,
        title: 'DOM',
        content: 'DOM — это не зависящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому ' +
            'HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.',
    },
    {
        id: 4,
        title: 'CSS',
        content: 'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.',
    }
];
const btnContainer = document.getElementById("btns-container")
const content = document.getElementById("content")


const selectTab = (e) => {

    let selTabs = document.getElementsByClassName('btn-active')
    let arr = Array.from(selTabs);
    console.log(arr)
    arr.forEach(el => {
        el.classList.remove("btn-active");
    })
    e.target.classList.add("btn-active")
    content.innerHTML = tabs[e.target.id - 1].content

}

tabs.forEach(tab => {
    if (tab.id === 1) {
        const btn = ` <li class="btn btn-active" id="${tab.id}">${tab.title}</li>`
        btnContainer.innerHTML += btn
        content.innerHTML = tab.content
    }
    else {
        const btn = ` <li class="btn" id="${tab.id}">${tab.title}</li>`
        btnContainer.innerHTML += btn
    }
})

window.onload = () => {
    document.getElementById('btns-container').addEventListener('click', selectTab)
}