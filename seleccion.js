sessionStorage.clear();
const botonMarinford = document.getElementById("marinford");
const botonMirrorWorld = document.getElementById("mirrorWorld");
const botonDressrosa = document.getElementById("dressrosa");
const botonEniesLobby = document.getElementById("eniesLobby");
const botonMarinfordInfo = document.getElementById("marinfordInfo");
const botonMirrorWorldInfo = document.getElementById("mirrorWorldInfo");
const botonDressrosaInfo = document.getElementById("dressrosaInfo");
const botonEniesLobbyInfo = document.getElementById("eniesLobbyInfo");
const botonFight = document.getElementById("boton_seleccion");

const controles = document.getElementById("controles")
const controlesBoton = document.getElementById("controles_boton")

async function mostrarControles() {
    const teclas = await fetch("./json/control.json")
    const teclasParseadas = await teclas.json()
    controles.innerHTML = `
        <div class="table__div">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Tecla</th>
                        <th scope="col">Movimiento</th>
                    </tr>
                </thead>
                <tbody id="tBody">
                </tbody>
            </table>
        </div>
    `
    teclasParseadas.forEach((tecla) => {
        tBody.innerHTML += `
            <tr>
                <td><img src="images/controles/${tecla.key}" class="teclas"></td>
                <td>${tecla.movimiento}</td>
            </tr>
        `
    })
}
controlesBoton.addEventListener("click", () => {
    mostrarControles()
})

const smap = document.getElementById("smap");

let scenario = localStorage.getItem("theme");
if (scenario == "marinford") {
    smap.classList.add("marinford");
} else if (scenario == "mirror_world") {
    smap.classList.add("mirror_world");
} else if (scenario == "dressrosa") {
    smap.classList.add("dressrosa");
} else if (scenario == "enies_lobby") {
    smap.classList.add("enies_lobby");
} else {
    smap.classList.add("new_world")
}

if (scenario == null) {
    localStorage.setItem("theme", "mirror_world");
}

botonMarinford.addEventListener("click", () => {
    smap.classList.remove("new_world");
    smap.classList.remove("mirror_world");
    smap.classList.remove("dressrosa");
    smap.classList.remove("enies_lobby");
    smap.classList.add("marinford");
    localStorage.setItem("theme", "marinford");
})
botonMarinfordInfo.addEventListener("click", () => {
    Swal.fire({
        imageUrl: 'images/marine.png',
        title: 'Marineford',
        text: 'Marineford, también conocida como la Fortaleza de la Justicia, es la isla en donde se encontraba el Cuartel General de la Marina antes de la Guerra de Marineford, tras la cual la Sede Mundial de la Marina pasó a estar en el Nuevo Mundo. Allí residían los marines más fuertes y los altos cargos, como el mismísimo almirante de la flota Sengoku y los tres almirantes, junto con muchos de los vicealmirantes y oficiales menores cuando no estaban asignados a otro destino.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})

botonMirrorWorld.addEventListener("click", () => {
    smap.classList.remove("new_world");
    smap.classList.remove("marinford");
    smap.classList.remove("dressrosa");
    smap.classList.remove("enies_lobby");
    smap.classList.add("mirror_world");
    localStorage.setItem("theme", "mirror_world");
})
botonMirrorWorldInfo.addEventListener("click", () => {
    Swal.fire({
        imageUrl: 'images/Big_Mom_Pirates.png',
        title: 'Mirror World',
        text: 'El Mirro-World es una dimensión alternativa a la que se accede a través de espejos dentro de Totto Land. Solo el usuario de Mira Mira no Mi puede facilitar la entrada y salida de este reino, lo que puede hacer haciendo contacto con un espejo intacto. Sin embargo, este es el único privilegio que tiene el usuario de la fruta sobre este reino, y cualquiera dentro de él es libre de hacer lo que quiera.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})

botonDressrosa.addEventListener("click", () => {
    smap.classList.remove("new_world");
    smap.classList.remove("mirror_world");
    smap.classList.remove("marinford");
    smap.classList.remove("enies_lobby");
    smap.classList.add("dressrosa");
    localStorage.setItem("theme", "dressrosa");
})
botonDressrosaInfo.addEventListener("click", () => {
    Swal.fire({
        imageUrl: 'images/Donquixote_Pirates.png',
        title: 'Dressrosa',
        text: 'Dressrosa, también conocida como el País del Amor, la Pasión y los Juguetes, es una isla y reino que fue gobernada durante diez años por el Señor de la Guerra del Mar Donquixote Doflamingo, a la vez era la base principal de los Piratas Donquixote. Es también uno de los reinos fundadores del Gobierno Mundial. Este país recuerda a España por sus tradiciones, como el flamenco y por el ambiente.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})

botonEniesLobby.addEventListener("click", () => {
    smap.classList.remove("new_world");
    smap.classList.remove("mirror_world");
    smap.classList.remove("dressrosa");
    smap.classList.remove("marinford");
    smap.classList.add("enies_lobby");
    localStorage.setItem("theme", "enies_lobby");
})
botonEniesLobbyInfo.addEventListener("click", () => {
    Swal.fire({
        imageUrl: 'images/Gobierno_Mundial.png',
        title: 'Enies Lobby',
        text: 'Enies Lobby, también conocida como la Isla Judicial, era un bastión controlado por el gobierno en Paradise. Enies Lobby está ubicado en una isla conocida como la "isla de la tarde" y la "isla de nunca la noche". Fue uno de los tres bastiones principales del Gobierno Mundial y la sede del CP9. La puerta de Enies Lobby conduce tanto a Marineford como a Impel Down. Debido a esto, había muchos agentes del gobierno estacionados allí, aproximadamente 10000 hombres, una mezcla de los del Gobierno Mundial y los Marines. La isla también tenía un juzgado, lo que facilitaba la transferencia de criminales de alto nivel a través de Enies Lobby y directamente a Impel Down, o al Cuartel General de la Marina.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})

const enJSON = JSON.stringify(scenario);
console.log(scenario)