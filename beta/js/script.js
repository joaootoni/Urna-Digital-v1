var click = false

function confirmarCand() {
    var candi_1 = document.getElementById("campo1").value;
    var candi_2 = document.getElementById("campo2").value;
    var img = document.getElementById("imgCand")
    var nome = document.getElementById('nome')
    var partido = document.getElementById('partido')
    var vice = document.getElementById('vice')
    img.setAttribute('id', 'foto')
    var soundClick = document.getElementById("audioClick")
    soundClick.play()

    if (candi_1 == 1 && candi_2 == 7) {
        img.setAttribute('src', 'src/bolsonaro.png')
        nome.innerText = "Nome: Jair Messias Bolsonaro"
        partido.innerText = "Partido: Partido Social Liberal - PSL"
        vice.innerText = "Vice-Presidente(a): General Mourão"

    }
    if (candi_1 == 1 && candi_2 == 3) {
        img.setAttribute('src', 'src/lula.png')
        nome.innerText = "Nome: Luis Inacio Lula da Silva"
        partido.innerText = "Partido: Partido dos Trabalhadores - PT"
        vice.innerText = "Vice-Presidente(a): Fernando Haddad"

    }
    click = true
}

function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;

    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;

    }
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.location.reload(false)
}

function confirmar() {
    var soundConfirma = document.getElementById("audioConfirma")
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidado = (valor1 * 10) + valor2;

    soundConfirma.play()

    if (sessionStorage.getItem(candidado) !== null) {
        votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        sessionStorage.setItem(candidado, votos);

    } else {
        sessionStorage.setItem(candidado, 1);

    }

    document.getElementById("campo1").value = " ";
    document.getElementById("campo2").value = " ";

    setTimeout(function () { alert(`Voto confirmado no ${candidado}`); document.location.reload(false) }, 100);
}

function resultado() {
    document.getElementById("resultado").innerHTML = " "
    for (i = 0; i < 100; i++) {
        if (sessionStorage.getItem(i) !== null) {
            //alert(i);
            document.getElementById("resultado").innerHTML += "Candidato " + i + " tem " + sessionStorage.getItem(i) + "votos<br/>";
        }
    }
}