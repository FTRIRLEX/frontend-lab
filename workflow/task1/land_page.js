let pageNumber = 1;

window.onload = function() {
    document.getElementById("prevPage").disabled = true;
 };


const navBtn = document.getElementById("menu");
let isClose = false;
navBtn.addEventListener("click", () => {
    const responsiveNav = document.querySelector("#responsive-nav");

    if (isClose) {
        responsiveNav.classList.remove("closed-nav");
        isClose = false;
    } else {
        responsiveNav.classList.add("closed-nav");
        isClose = true;
    };
});


const search = document.getElementById("search_btn");
const curtain = document.querySelector(".curtain");
const close = document.getElementById("close")
search.addEventListener("click", () => {
    curtain.classList.remove("closed-curtain")
})
close.addEventListener("click", () => {
    curtain.classList.add("closed-curtain")
})

const limit = 6;
let offset = 0;
const apiKey = 'kspQzZn5eVOw8mSHfvobpIQ1FkU6pU9J';
const nextBtn = document.getElementById("nextPage")
const prevBtn = document.getElementById("prevPage")
nextBtn.addEventListener("click", increment)
prevBtn.addEventListener("click", decrement)

function getGifs(OFFSET) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=${limit}&offset=${OFFSET}`

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(result => {
            const cards = document.getElementById('cards')
            cards.innerHTML = '';
            result.data.forEach((element, indx) => {
                console.log(element.title, '\n', element.url, '\n', element.import_datetime, element);
                cards.innerHTML += `
            <div class="card">
                <div class="card-image">
                    <img src="${element.images.downsized.url}">
                    <div class="image-background">
                        <div class="btn image-btn" >
                            <a class="fas fa-link" target="_blank" href="${element.url}"></a>
                        </div>   
                    </div>
                </div>
                <div class="card-content">
                    <h4 class="card-title">
                    ${element.title}
                    </h4>
                    <p class="date">${element.import_datetime}</p>
                    <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aliquam
                        nostrum. Esse nisi totam iure dolorem aperiam quod labore quidem!</p>
                </div>
            </div>
            `
            });
        }).catch(err => console.log(err))
}

getGifs(offset);
function increment() {
    pageNumber++;
    if(pageNumber > 1){
        document.getElementById("prevPage").disabled = false;
    }
    offset += limit;
    getGifs(offset);

}

function decrement() {
    pageNumber--;
    if(pageNumber <= 1){
        document.getElementById("prevPage").disabled = true;
    }
    if (offset - limit >= 0) {
        offset -= limit;
        getGifs(offset);
    }
}