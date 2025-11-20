const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    let faIcon = `<i class='fa-solid {} fa-2xl'></i>`;

    nav.style.display = nav.style.display === "block" ? "none" : "block";
    burger.innerHTML = faIcon.replace("{}", nav.style.display === "block" ? "fa-xmark" : "fa-bars");
});
