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

verifyModal();

