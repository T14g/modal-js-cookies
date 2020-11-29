//Cria o cookie
//Atualmente expira em x minutos
function setCookie(cname, cvalue , minutos) {
  var d = new Date();
  d.setTime(d.getTime() + (minutos*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Busca um cookie por nome
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Renderiza a modal
function renderModal(elementSelector){
  var html = '<h1>Testando 123</h1>';
  var targetElement = document.querySelector(elementSelector);
  targetElement.insertAdjacentHTML('beforeend',html);
}

//Verifica se deve exibir a modal
function verifyModal(){
var cookieTest = getCookie('teste');

  if(!cookieTest){
      console.log("Criando");
      setCookie('teste', 'testando cookie de 2min', 2);
      renderModal('#container');
  }else{
      console.log("Lendo");
      console.log(cookieTest);
      
  }
}

// verifyModal();


//====================================================================/

// O código acima dessa linha só funciona em um servidor, é relativo aos cookies 
// Ele não é executado em nenhum momento pois comentei a linha 50

//====================================================================/

/**Tarefa #1
/* Ideia: Fazer com que a div de id #caixa suma ao clickar no botão com id #botao
/*
/* Possíveis passos:
/* Criar uma função para esconder a caixa alterando o display para none
/* A função vai ser adicionada no click do botao via addEventListener
/* Testar
/* Definir um limite de tempo para não ficar o dia todo nisso caso trave
*/

// var caixaElement = document.querySelector("#caixa");

// console.log(caixaElement);

// caixaElement.style.display = 'none';