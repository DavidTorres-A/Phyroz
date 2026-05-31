window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (scrollTop / scrollHeight) * 100;

    document.querySelector(".progress-bar")
    .style.width = progress + "%";

});