window.onload = function excuse () {
    let who = ['The dog ','My granma ','His turtle ','My bird '];
    let what = ['eat ','pissed ','crushed ','broked '];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
  
    var sujeto = who[Math.floor(Math.random()*who.length)];
    var verbo = what[Math.floor(Math.random()*what.length)];
    var resto = when[Math.floor(Math.random()*when.length)];
    
    document.getElementById("excuse").innerHTML = sujeto + verbo + resto;
  }
  
  console.log(excuse);