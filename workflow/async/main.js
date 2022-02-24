const url = 'https://api.thecatapi.com/v1/images/search'
const imagesWrapper = document.querySelector('.wrapper')
let startedID = 0
const handleErr = error => alert(error)
const createId = () => startedID += 1

const urls = Array(5).fill(url)

const createAndAppendloaderDiv = id => {
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';
    imageWrapper.id = `image-${id}`;
    imagesWrapper.append(imageWrapper);

    const loaderWrapper = document.createElement('div');
    imageWrapper.append(loaderWrapper);
    loaderWrapper.className = 'loader-wrapper';
    loaderWrapper.id = `loader-${id}`;

    const loader = document.createElement('div');
    loader.className = 'loader';
    loaderWrapper.append(loader);
};


const createAndAppendImage = (src, id) => {
    let img = document.createElement('img')
    img.onload = () => {
        document.querySelector(`#loader-${id}`).remove()
        document.querySelector(`#image-${id}`).append(img)
    }
    img.src = src
}

const loadOneByOneAsync = async () => {
    const loadAndInnerImage = async () => {
        try {
            let id = createId(startedID);
            createAndAppendloaderDiv(id);
            const response = await fetch(url);
            content = await response.json();
            createAndAppendImage(content[0].url, id);
        } catch (err) {
            handleErrors(err);
        }
    };

    for (let i = 0; i < urls.length; i++) {
        await loadAndInnerImage(urls[i]);
    }
};


const loadOneByOnePromise = () => {
    const load = url => {
        createAndAppendloaderDiv(createId(startedID))
        return fetch(url)
            .then(response => response.json())
            .then(response => createAndAppendImage(response[0].url, startedID))

    }

    load(url)
        .then(() => load(url))
        .then(() => load(url))
        .then(() => load(url))
        .then(() => load(url))
        .catch(handleErr)
}


const loadOneByOneCallback = () => {
    const load = (callback) => {
        createAndAppendloaderDiv(createId(startedID))
        return fetch(url)
            .then(response => response.json())
            .then(response => createAndAppendImage(response[0].url, startedID))
            .then(() => callback())

    }

    load(
        () => load(
            () => load(
                () => load(
                    () => load()))))
}
window.onload = () => {
    //loadOneByOneAsync()
    //loadOneByOnePromise()
    //loadOneByOneCallback()
}