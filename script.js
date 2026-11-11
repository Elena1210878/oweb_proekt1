
function otvoriProzorec() {
    document.getElementById("prozor").style.display = "block";
}

function zatvoriProzorec() {
    document.getElementById("prozor").style.display = "none";
}

function dodadiDestinacii() {
    var izbrani = document.querySelectorAll("#prozor input[type=checkbox]:checked");

    for (var i = 0; i < izbrani.length; i++) {
        var postoi = false;

        var lista = document.getElementById("listaDestinacii");
        var postoecki = lista.getElementsByTagName("p");

        for (var j = 0; j < postoecki.length; j++) {
            if (postoecki[j].textContent == izbrani[i].value) {
                postoi = true;
            }
        }

        if (postoi == false) {
            var div = document.createElement("div");
            div.className = "destinacija";

            var tekst = document.createElement("p");
            tekst.textContent = izbrani[i].value;

            var kopce = document.createElement("button");
            kopce.textContent = "Избриши";

            kopce.onclick = function() {
                this.parentElement.remove();
            };

            div.appendChild(tekst);
            div.appendChild(kopce);

            lista.appendChild(div);
        }

        izbrani[i].checked = false;
    }

    zatvoriProzorec();
}
function pronajdiDestinacii() {

    let buget = document.getElementById("pari").value;

    if (buget == "") {
        alert("Внеси го твојот буџет!");
        return;
    }

    buget = Number(buget);

    let gradovi = [
        {ime: "Барселона", cena: 30000},
        {ime: "Сплит", cena: 25000},
        {ime: "Рим", cena: 20000},
        {ime: "Прага", cena: 18000},
        {ime: "Виена", cena: 28000},
        {ime: "Истанбул", cena: 15000}
    ];

    let rezultat = "";

    for (let i = 0; i < gradovi.length; i++) {

        if (gradovi[i].cena <= buget) {

            rezultat += "<p>" + gradovi[i].ime + " - " + gradovi[i].cena + " денари</p>";

        }

    }

    if (rezultat == "") {
        rezultat = "<p>Нема дестинации во рамките на твојот буџет.</p>";
    }

    document.getElementById("rezultati").innerHTML = rezultat;

    document.getElementById("prozorBuget").style.display = "block";
}


function zatvoriBuget() {
    document.getElementById("prozorBuget").style.display = "none";
}


function pronajdiKategorija() {

    let leto = document.getElementById("leto").checked;

    let gradovi = "";

    if (leto) {

        gradovi = "<p>Барселона - 30000 денари</p>";
        gradovi += "<p>Рим - 20000 денари</p>";
        gradovi += "<p>Сплит - 25000 денари</p>";

    }
    else {

        gradovi = "<p>Виена - 28000 денари</p>";
        gradovi += "<p>Прага - 18000 денари</p>";
        gradovi += "<p>Истанбул - 15000 денари</p>";

    }

    document.getElementById("rezultatiKategorija").innerHTML = gradovi;

    document.getElementById("prozorKategorija").style.display = "flex";

}


function zatvoriKategorija() {

    document.getElementById("prozorKategorija").style.display = "none";

}
function lajkni(kopce) {

    let fotografija = kopce.parentElement.parentElement;

    let like = fotografija.querySelector(".like");
    let dislike = fotografija.querySelector(".dislike");

    let drugotoKopce = kopce.parentElement.querySelector("button:nth-of-type(2)");

    if (kopce.classList.contains("aktivno")) {

        like.innerHTML = Number(like.innerHTML) - 1;
        kopce.classList.remove("aktivno");

    }
    else {

        if (drugotoKopce.classList.contains("aktivno")) {
            dislike.innerHTML = Number(dislike.innerHTML) - 1;
            drugotoKopce.classList.remove("aktivno");
        }

        like.innerHTML = Number(like.innerHTML) + 1;
        kopce.classList.add("aktivno");

    }

}
function dislajkni(kopce) {

    let fotografija = kopce.parentElement.parentElement;

    let like = fotografija.querySelector(".like");
    let dislike = fotografija.querySelector(".dislike");

    let drugotoKopce = kopce.parentElement.querySelector("button:nth-of-type(1)");

    if (kopce.classList.contains("aktivno")) {

        dislike.innerHTML = Number(dislike.innerHTML) - 1;
        kopce.classList.remove("aktivno");

    }
    else {

        if (drugotoKopce.classList.contains("aktivno")) {
            like.innerHTML = Number(like.innerHTML) - 1;
            drugotoKopce.classList.remove("aktivno");
        }

        dislike.innerHTML = Number(dislike.innerHTML) + 1;
        kopce.classList.add("aktivno");

    }

}
function ispratiKomentar(kopce) {

    let fotografija = kopce.parentElement.parentElement;

    let input = kopce.parentElement.querySelector("input");

    let komentari = fotografija.querySelector(".komentari");

    let tekst = input.value;

    if (tekst != "") {

        let novKomentar = document.createElement("p");

        novKomentar.innerHTML = tekst;

        komentari.appendChild(novKomentar);

        input.value = "";

    }

}

const formaAnketa = document.querySelector("main.anketa form");

if (formaAnketa) {
    formaAnketa.addEventListener("submit", function(event) {
        event.preventDefault();

        const poraka = document.getElementById("poraka");

        if (poraka) {
            poraka.style.display = "block";
            poraka.innerHTML = "<h2>Ви благодариме!</h2><p>Анкетата е успешно испратена.</p>";
        } else {
            alert("Ви благодариме! Анкетата е успешно испратена.");
        }

        formaAnketa.reset();
    });
}

const formaNajava = document.getElementById("formaNajava");

if (formaNajava) {
    formaNajava.addEventListener("submit", function(event) {
        event.preventDefault();

        const uspešnaNajava = document.getElementById("uspesnaNajava");

        if (uspešnaNajava) {
            uspešnaNajava.style.display = "block";
        }

        formaNajava.reset();
    });
}



