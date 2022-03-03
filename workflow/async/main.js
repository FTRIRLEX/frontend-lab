let startedDivId = 0
const url = 'https://api.thecatapi.com/v1/images/search'
const wrapper = document.querySelector('.wrapper')

const nextId = () => startedDivId += 1

const loadImg = (url) => {
    const id = nextId()
    createLoader(id)
    return fetch(url)
        .then(response => response.json())
        .then(response => createImg(response[0].url, id))

}

const loadImgCallback = (url, callback) => {
    const id = nextId()
    createLoader(id)
    return fetch(url)
        .then(response => response.json())
        .then(response => createImg(response[0].url, id))
        .then(callback)

}

const loadImageAsync = async (url) => {
    const id = nextId()
    createLoader(id)
    const response = await fetch(url)
    const responsejson = await response.json()
    createImg(responsejson[0].url, id)
}

const createImg = (url, id) => {
    //createLoader(id)
    let img = document.createElement('img')
    img.src = url;
    //img.classList.add('image-wrapper')
    img.onload = () => {
        document.getElementById(`loader-${id}`).remove()
        document.getElementById(`wrapper-${id}`).append(img)
    }
}

const createLoader = (id) => {
    let imgWrapper = document.createElement('div')
    imgWrapper.classList.add('image-wrapper')
    imgWrapper.id = `wrapper-${id}`
    wrapper.append(imgWrapper)
    let loader = document.createElement('div')
    loader.classList.add('loader')
    loader.id = `loader-${id}`
    imgWrapper.append(loader)
}


const task1Promise = () => {
    loadImg(url)
        .then(() => loadImg(url))
        .then(() => loadImg(url))
        .then(() => loadImg(url))
        .then(() => loadImg(url))

}

const task1Callback = () => {
    loadImgCallback(url, () =>
        loadImgCallback(url, () =>
            loadImgCallback(url, () =>
                loadImgCallback(url, () =>
                    loadImgCallback(url)))))
}


const task1Async = async () => {
    const arrAsync = Array(5).fill(loadImageAsync)
    for (let i = 0; i < 5; i++) {
        await arrAsync[i](url)
    }
}


const task1Generator = () => {
    function* task1Generator() {
        for (let i = 0; i < 5; i++) {
            yield loadImageAsync(url)
        }
    }

    let generator = task1Generator()

    function execute(generator, yieldValue) {
        let next = generator.next(yieldValue);
        if (!next.done) {
            return next.value
                .then(result => execute(generator, result));
        }
    }
    execute(generator)
}

const task2Promise = () => {
    const promiseArray = []
    Array(5).fill(url).forEach(el => {
        promiseArray.push(fetch(el).then(response => response.json()))
        createLoader(nextId())
    })
    Promise.all(promiseArray).then(resoonses => resoonses.forEach((json, id) => createImg(json[0].url, id + 1)))
}



const task2Async = async () => {
    const promiseArray = []
    Array(5).fill(url).forEach(el => {
        promiseArray.push(fetch(el).then(response => response.json()))
        createLoader(nextId())
    })
    const result = await Promise.all(promiseArray)
    result.forEach((el, id) => {
        createImg(el[0].url, id + 1)
    })
}


const task2Generator = () => {
    const promiseArray = []
    function* task2Generator() {
        for (let i = 0; i < 5; i++) {
            yield promiseArray.push(fetch(url).then(response => response.json()))
        }
    }
    const generator = task2Generator()
    function execute(generator, yieldValue) {
        let next = generator.next(yieldValue);
        if (!next.done) {
            return execute(generator, next.value)
        }
    }
    execute(generator)
    Array(5).fill(url).forEach(el => createLoader(nextId()))
    Promise.all(promiseArray).then(response => response.forEach((el, id) => createImg(el[0].url, id + 1)))

}

const task2Calback = () => {
    const promiseArray = []
    const generateArray = (url,callback) => {
        createLoader(nextId())
        promiseArray.push(fetch(url).then(response => response.json()))
        typeof callback === 'function' ?  callback() : console.log('end')
       
    }
    generateArray(url, generateArray(url, () => generateArray(url, () => generateArray(url, () => generateArray(url)))))

    Promise.all(promiseArray).then(response => response.forEach((el, id) => createImg(el[0].url, id + 1)))
} 

const task3Promise = () => {
    const promiseArray = []
    const id = nextId()
    Array(5).fill(url).forEach(el => promiseArray.push(fetch(el)))
    createLoader(id)
    Promise.race(promiseArray).then(response => response.json()).then(response => createImg(response[0].url, id))
}


const task3Async = async () => {
    const promiseArray = []
    const id = nextId()
    Array(5).fill(url).forEach(el => promiseArray.push(fetch(el)))
    createLoader(id)
    const result = await Promise.race(promiseArray).then(response => response.json())
    createImg(result[0].url, id)
}


const task3Generator = () => {
    const promiseArray = []
    function* task3Generator() {
        for (let i = 0; i < 5; i++) {
            yield promiseArray.push(fetch(url))
        }
    }
    const generator = task3Generator()
    function execute(generator, yieldValue) {
        let next = generator.next(yieldValue);
        if (!next.done) {
            return execute(generator, next.value)
        }
    }
    execute(generator)
    const id = nextId()
    createLoader(id)
    Promise.race(promiseArray).then(response => response.json().then(response => createImg(response[0].url, id)))    
}


const task3Callback = () => {
    const promiseArray = []
    const id = nextId()
    createLoader(id)
    const generateArray = (url,callback) => {
        promiseArray.push(fetch(url))
        typeof callback === 'function' ?  callback() : console.log('end')
    }
    generateArray(url, generateArray(url, () => generateArray(url, () => generateArray(url, () => generateArray(url)))))
    Promise.race(promiseArray).then(response => response.json().then(response => createImg(response[0].url, id)))

}

window.onload = () => {
    task1Promise()
    //task1Callback()
    //task1Async()
    //task1Generator()


    //task2Promise()
    //task2Async()
    //task2Generator()
    //task2Calback()


    //task3Promise()
    //task3Async()
    //task3Generator()
    //task3Callback()
}