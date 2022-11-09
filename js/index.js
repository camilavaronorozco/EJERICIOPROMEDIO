const nota1= document.querySelector('#nota1');
const nota2= document.querySelector('#nota2');
const nota3= document.querySelector('#nota3');
const avg = document.querySelector('#avg');
const text = document.querySelector('#PROMEDIO');

avg.addEventListener('click',function(){

    if(nota1.value == '' || nota2.value=='' || nota3.value==''){
        text.textContent='Por favor completa los campos';
        return
    }
    if(isNaN(nota1.value) || isNaN(nota2.value) || isNaN(nota3.value) ){
        text.textContent='Por favor ingresa solo numeros';
        return
    }

    if( Number(nota1.value)<0 || Number(nota1.value)>5 || Number(nota2.value)<0 || Number(nota2.value)>5  || Number(nota3.value)<0 || Number(nota3.value)>5){
        text.textContent='Por favor ingresa numeros validos';
        return
    }
    const nt1 = Number(nota1.value) * 30/100;
    const nt2 = Number(nota2.value) *30 /100;
    const nt3 = Number(nota3.value) *40 /100;

    const res = Number(nt1+nt2+nt3).toFixed(2);
    let response ='';
    if(res>4.5){
        response= `Ana aprobo la materia con un promedio de ${res} , Excelente`
    }
    else if(res>=3.5 && res<=4.5){
       
        response= `Ana aprobo la materia con un promedio de ${res} , Buena`
    }

    else if(res>=2 && res<=3.4){
       
        response= `Ana reprobo la materia con un promedio de ${res} , pero puede recuperar`

    }

    else if(res<2){
       
        response= `Ana reprobo la materia con un promedio de ${res} , debe repetirla`

    }
    text.textContent=response;
    
})