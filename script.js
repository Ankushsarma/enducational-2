const element = document.getElementById("navBatToggler");

window.addEventListener("scroll", function() {
    const element = document.getElementById("navbar");
    element.classList.toggle("bg-dark", window.scrollY > 0);
})
element.addEventListener("click", function() {
    const element2 = document.getElementById("navbarNav");
    element2.classList.toggle("bg-dark");
})

window.addEventListener("scroll", function() {
    const element = document.getElementById("navBtn");
    element.classList.toggle("nvaBtnDisplay", window.scrollY > 0);
})