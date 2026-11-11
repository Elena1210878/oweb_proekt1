const formaNajava = document.getElementById("formaNajava");

if (formaNajava) {
    formaNajava.addEventListener("submit", function (event) {
        event.preventDefault();

        const uspešnaNajava = document.getElementById("uspesnaNajava");

        if (uspešnaNajava) {
            uspešnaNajava.style.display = "block";
        }

        formaNajava.reset();
    });
}
