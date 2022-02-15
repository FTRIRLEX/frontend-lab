window.onload = function () {
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
    search.addEventListener("click", ()=>{
        curtain.classList.remove("closed-curtain")
    })
    close.addEventListener("click", ()=>{
        curtain.classList.add("closed-curtain")
    })

}