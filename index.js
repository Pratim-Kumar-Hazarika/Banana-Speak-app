var btnTranslate = document.querySelector('#btn-translate');
var inputText = document.querySelector('#txt-input');
var outputDiv = document.querySelector('.output');

var serverUrl="https://api.funtranslations.com/translate/minion.json"


function getUrl(text){
    return serverUrl+ "?"+"text=" + text
}


function errorHandler(error){
    console.log('error occured',error);
    alert('something wrong with server please try after some time')
}
function clickHandler(){
   var textinput = inputText.value;

   fetch(getUrl(textinput))
   .then(response=>response.json())
   .then(json=>{
       var translatedText = json.contents.translated;
       outputDiv.innerText = translatedText;
   })
   .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickHandler);