let ajandekok = []
let db = ajandekok.length
function reset() {
    ajandekok = []
    db = ajandekok.length
    document.getElementById("darab").innerHTML = db

    let aLista = document.getElementById("ajandek_lista")

    aLista.innerHTML = ''
    for (ajandek of ajandekok) {
        console.log(ajandek)
        aLista.innerHTML += `<li>${ajandek}</li>`
    }
}

function hozzaad() {
    let cuccNeve = document.getElementById("cucc").value
    if (cuccNeve == "") {
        alert("Semmit se kérsz?")
    }
    else {
        let aLista = document.getElementById("ajandek_lista")
        aLista.innerHTML += `<li>${cuccNeve}</li>`
        db += 1
        document.getElementById("darab").innerHTML = db

    }
}
