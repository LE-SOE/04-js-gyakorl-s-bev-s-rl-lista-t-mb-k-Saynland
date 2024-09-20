let termekek = ['Tej', 'Vaj', 'Kenyér', 'Sajt', 'Szalámi']
let db = termekek.length
function reset() {
    termekek = ['Tej', 'Vaj', 'Kenyér', 'Sajt', 'Szalámi']
    db = termekek.length
    document.getElementById("darab").innerHTML = db
    console.log('Termékek változó', termekek)
    console.log('Ez a kenyér?', termekek[2])
    let bLista = document.getElementById("bev_lista") 

    bLista.innerHTML = ''
    for (termek of termekek) {
        console.log(termek)
        bLista.innerHTML += `<li>${termek}</li>`
    }

}

function hozzaad() {

    let cuccNeve = document.getElementById("cucc").value
    if (cuccNeve == "") {
        alert("Nem írtál semmit!")
    }
    else {
        let bLista = document.getElementById("bev_lista")
        //bLista.innerHTML = bLista.innerHTML + `<li>${cuccNeve}</li>` (régi)
        bLista.innerHTML += `<li>${cuccNeve}</li>` //(új)
        //console.log(cuccNeve)
        //console.log(bLista)
        db += 1
        document.getElementById("darab").innerHTML = db
        //console.log("darab:",db)
    }

}
