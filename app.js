function menjanjeBoje(boja) {
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor = boja;
    }
}
menjanjeBoje("violet");


// arrow function
let menjanjeBojeA = (boja) => {
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor = boja;
    }
}
menjanjeBojeA("green");

let menjanjeBojeB = (boja) => Array.from(document.getElementsByClassName("obrisi")).forEach(dugme => dugme.style.backgroundColor = boja);

menjanjeBojeB("purple");

// call back function
let obrisiDugmad = document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click", function (e) {
        console.log(this);
        console.log(this.parentNode);
        let elZaBrisanje = this.parentNode;
        let lista = document.getElementById("lista");
        lista.removeChild(elZaBrisanje);
    })
}

function dodajDestinaciju(event) {
    event.preventDefault();
    let inputPolje = document.querySelector("#dodaj-destinaciju input");
    let nazivDestinacije = inputPolje.value.trim();
    if (nazivDestinacije) {
        let lista = document.getElementById("lista");
        let stavkaliste = document.createElement("li");
        stavkaliste.innerHTML = `<span class="naziv"> ${nazivDestinacije} </span>
        <span class="obrisi">obriši</span>`;
        lista.appendChild(stavkaliste);
        inputPolje.value = "";
    }
}

let forma = document.forms["dodaj-destinaciju"];
forma.addEventListener("submit", dodajDestinaciju);

