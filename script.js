document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("handsome-list");
    list.style.transition = "transform 0.3s ease";

    list.addEventListener("mouseover", () => {
        list.style.transform = "scale(1.02)";
    });

    list.addEventListener("mouseout", () => {
        list.style.transform = "scale(1)";
    });
});
