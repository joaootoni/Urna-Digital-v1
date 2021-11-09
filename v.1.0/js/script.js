var click = false

function confirmarCand() {
    var candi_1 = document.getElementById("campo1").value;
    var candi_2 = document.getElementById("campo2").value;
    var img = document.getElementById("imgCand")
    var nome = document.getElementById('nome')
    var partido = document.getElementById('partido')
    var vice = document.getElementById('vice')
    var soundClick = document.getElementById("audioClick")
    var verde = document.getElementById('vd')
    var vermelho = document.getElementById('vr')
    var aperte = document.getElementById('ap')
    var urna = document.getElementById('urna')
    var svp = document.getElementById('svp')
    var presi = document.getElementById('presi')


    if (candi_1 == 1 && candi_2 == 7) {
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'src/bolsonaro.png')
        nome.innerText = "Nome: Jair Messias BOLSONARO"
        partido.innerText = "Partido: Partido Social Liberal - PSL"
        vice.innerText = "Vice-Presidente(a): General MOURÃO"
        soundClick.play()
        aperte.innerText = 'Aperte a tecla:'
        verde.innerText = 'VERDE para CONFIRMAR'
        vermelho.innerText = 'VERMELHO para CORRIGIR'
        urna.innerText = ''

        svp.innerText = 'Seu voto para:'
        presi.innerText = 'Presidente'

    } else if (candi_1 == 1 && candi_2 == 3) {
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'src/lula.png')
        nome.innerText = "Nome: Luis Inacio LULA da Silva"
        partido.innerText = "Partido: Partido dos Trabalhadores - PT"
        vice.innerText = "Vice-Presidente(a): Fernando HADDAD"
        soundClick.play()
        aperte.innerText = 'Aperte a tecla:'
        verde.innerText = 'VERDE para CONFIRMAR'
        vermelho.innerText = 'VERMELHO para CORRIGIR'
        aperte.innerText = 'Aperte a tecla:'
        verde.innerText = 'VERDE para CONFIRMAR'
        vermelho.innerText = 'VERMELHO para CORRIGIR'
        urna.innerText = ''
        svp.innerText = 'Seu voto para:'
        presi.innerText = 'Presidente'

    } else if (candi_1 == 1 && candi_2 != 7 && 3) {
        window.alert('CANDIDATO INDISPONIVEL')
        document.location.reload(false)
    } else {
        window.alert("DIGITE O NUMERO DO SEU CANDIDATO")
        document.location.reload(false)
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
    var telaFim = document.getElementById('telaFim')



    soundConfirma.play()

    if (sessionStorage.getItem(candidado) !== null) {
        votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        sessionStorage.setItem(candidado, votos);

    } else {
        sessionStorage.setItem(candidado, 1);
    }
    telaFim.style.cssText =
        'position: absolute;' +
        'display: flex;' +
        'background-color: rgb(255, 255, 255);' +
        'left: 18.1rem;' +
        'top: 14.2rem;' +
        'width: 43.6rem;' +
        'height: 34.6rem;'

    fim.innerHTML = 'FIM'

    document.getElementById("campo1").value = " ";
    document.getElementById("campo2").value = " ";

    
}

function resultado() {
    

    var resultA = sessionStorage.getItem('17');
    var resultB = sessionStorage.getItem('13');

    
    var resA = document.getElementById("resuVotos")
    var resB = document.getElementById("resuVotos_1")

    resA.innerHTML = `Bolsonaro ${resultA}`
    resB.innerHTML = `Lula ${resultB}`


    
}

function download(filename) {
    var resultA = sessionStorage.getItem('17');
    var resultB = sessionStorage.getItem('13');
    var text = `Bolsonaro: ${resultA} \n\nLula: ${resultB}`
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }