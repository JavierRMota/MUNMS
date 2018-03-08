var tiempo = 60,
    cancelled, listaO = "Speaker's List", tipoC = ['Simple','Moderated'], lista = [], topicA, topicB, committee;

//INICIO TIMER GENERAL

//Iniciar
function startTimer(duration, display) { 
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    
    function timer() {
        if (cancelled) {
            window.clearInterval(intervalListener);
            return;
        }
        diff = duration - (((Date.now() - start) / 1000) | 0);

 
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            start = Date.now() + 1000;
        }
    };
    timer();
    var intervalListener = setInterval(timer, 1000);
}

//Detener
function stopTimer()
{
    var minutes,
        seconds;
    display = document.querySelector('#time');
    cancelled=true;
    minutes = (tiempo / 60) | 0;
    seconds = (tiempo % 60) | 0;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    display2=document.querySelector('#status');
    display2.textContent= listaO;
}

//FIN TIMER GENERAL

//INICIO CAUCUS

//Caucus
function caucus(x){
    if(cancelled==true){
        var minutes,seconds;
        minutes=parseInt(document.getElementById('min').value);
        seconds=parseInt(document.getElementById('seg').value);
        var time = minutes*60+seconds;
        cancelled=false;
        display = document.querySelector('#time');
        startTimer(time, display);
        display2=document.querySelector('#status');
        display2.textContent= tipoC[x]+" Caucus";
    }
    else
    {
        stopTimer();
    }
}
//FIN CAUCUS

//INICIO SL

//Cambiar tiempo de SL
function cambioT(){
    var minutes,seconds;
    minutes=parseInt(document.getElementById('min').value);
    seconds=parseInt(document.getElementById('seg').value);
    tiempo=minutes*60+seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display = document.querySelector('#time');
    display.textContent = minutes + ":" + seconds; 
    
}

//Iniciar SL
function begin(){
    if(cancelled==true){
        var time = tiempo;
        cancelled=false;
        display = document.querySelector('#time');
        startTimer(time, display); 
    }
    else
    {
        cancelled=true;
    }
}

//Cargar SL
function refreshL()
{
    var texto="";
    display3=document.querySelector('#listaOradores');
    for(i=0;i<5;i++)
    {
        if(lista.length>i){
            texto+=lista[i]+"<br>";
        }
        else{
            texto+="<br>";
        }
        
        
    }
    display3.innerHTML=texto;   
}

//Añadir a la SL
function add(){
    lista.push(document.getElementById('country').value);
    refreshL();
}

//Quitar de la SL
function remove(){
    lista.splice(0, 1);;
    refreshL();
}

//FIN SL

//INICIO ADICIONALES
function datos(){
    topicA=document.getElementById('topicA').value;
    topicB=document.getElementById('topicB').value;
    committee=document.getElementById('committee').value;
    document.querySelector('#temaAB').textContent=topicA;
    document.querySelector('#comiteT').textContent=committee;
    
}
//FIN ADICIONALES

//INICIO PREGUNTAS

//FIN PREGUNTAS

//Inicializar todo
window.onload = function () {
    var minutes,
        seconds;
    display = document.querySelector('#time');
    cancelled=true;
    minutes = (tiempo / 60) | 0;
    seconds = (tiempo % 60) | 0;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    display2=document.querySelector('#status');
    display2.textContent=listaO;
    refreshL();
};