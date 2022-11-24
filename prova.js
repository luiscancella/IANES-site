var resultado;
var nota = 0;
var controle;

window.onload = function() {
    controle = false;
}


function avaliar(){
    if(controle){
        return false;
    } else {
        controle = true;
    }
    try {
        q1 = document.querySelector("input[name='q1']:checked").value;
        q2 = document.querySelector("input[name='q2']:checked").value;
        q3 = document.querySelector("input[name='q3']:checked").value;
        q4 = document.querySelector("input[name='q4']:checked").value;
        q5 = document.querySelector("input[name='q5']:checked").value;
        q6 = document.querySelector("input[name='q6']:checked").value;
        q7 = document.querySelector("input[name='q7']:checked").value;
        q8 = document.querySelector("input[name='q8']:checked").value;
        q9 = document.querySelector("input[name='q9']:checked").value;
        q10 = document.querySelector("input[name='q10']:checked").value;
        q11 = document.querySelector("input[name='q11']:checked").value;
        q12 = document.querySelector("input[name='q12']:checked").value;
        q13 = document.querySelector("input[name='q13']:checked").value;
        q14 = document.querySelector("input[name='q14']:checked").value;
        q15 = document.querySelector("input[name='q15']:checked").value;
        var todos =
        [q1, q2, q3, q4, q5, q6, q7, q8, q9,
        q10, q11, q12, q13, q14, q15];
    } catch(error) {
    }

    if(
    q1 == '[object HTMLCollection]'|| q2 == '[object HTMLCollection]' || q3 == '[object HTMLCollection]' ||
    q4 == '[object HTMLCollection]' || q5 == '[object HTMLCollection]' || q6 == '[object HTMLCollection]' ||
    q7 == '[object HTMLCollection]' || q8 == '[object HTMLCollection]' || q9 == '[object HTMLCollection]' ||
    q10 == '[object HTMLCollection]' || q11 == '[object HTMLCollection]' || q12 == '[object HTMLCollection]' ||
    q13 == '[object HTMLCollection]' || q14 == '[object HTMLCollection]' || q15 == '[object HTMLCollection]')
    {
        document.getElementById('result').innerHTML =
        ` &nbsp; Existem campos não preenchidos`;
        return false;
    } else {
        for(var h = 0; h <= 14; h++){
            console.log(h, todos[h]);
            if(todos[h] == "true"){
                nota += 1;
            }
        }
        document.getElementById('result').innerHTML =
        `Nota: ${nota} | Porcentagem: ${((nota/15)*100).toFixed(0)}%`;
        if(nota >= 9){
            document.getElementById('download').innerHTML =
            `<a href="certificado.html"><u>CERTIFICADO DOWNLOAD</u></a>`
        } else {
            `Nota insuficiente!`
        }
    }
}