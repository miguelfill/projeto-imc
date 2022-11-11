const firstDiv = document.querySelector('.padrao');
const secondDiv = document.querySelector('.calculo');
const thirdDiv = document.querySelector('.resultado');

function go(currentStep, nextStep){ 
    let dNone, dBlock
    if (currentStep == 1) {
        dNone = firstDiv
    }
    else if (currentStep == 2) {
        dNone = secondDiv
    }
    else{
        dNone = thirdDiv
    }

    dNone.style.display = 'none';

    if (nextStep == 1) {
        dblock = firstDiv
    }
    else if (nextStep == 2) {
        dblock = secondDiv
    }
    else{
        dblock = thirdDiv
    }

    dblock.style.display = 'block';
}

function validate(){
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')

    peso.style.border = 'none';
    altura.style.border = 'none';

    if (!peso.value || !altura.value) {
        if (!peso.value && !altura.value) {
            alert('Preencha corretamente os campos')
        }

        else if (!peso.value) {
            peso.style.border = '1px solid red';
        }

        else{
            altura.style.border = '1px solid red';
        }
    }

    else{

        let imc = peso.value / (altura.value * altura.value);

        const result = document.getElementById('resultado');

        if (imc < 18.5){
            console.log("Magreza. Procure um médico");
            result.innerHTML = `IMC = ${imc.toFixed(2)} | Magreza. Procure um médico`;
        }
            

        else if (imc >= 18.5 && imc < 25){
            console.log("Peso ideal");
            result.innerHTML = `IMC = ${imc.toFixed(2)} | Peso ideal`;
        }
        

        else if (imc >= 25 && imc < 30){
            console.log("Sobrepeso. Cuidado");
            result.innerHTML = `IMC = ${imc.toFixed(2)} | Sobrepeso. Cuidado`;
        }
        

        else if (imc >= 30 && imc < 40){
            console.log("Obesidade. Procure um médico");
            result.innerHTML = `IMC = ${imc.toFixed(2)} | Obesidade. Procure um médico`;
        }
        

        else if (imc >= 40){
            console.log("Obesidade grave. Vá ao médico imediatamente");
            result.innerHTML = `IMC = ${imc.toFixed(2)} | Obesidade grave. Vá ao médico imediatamente`;
        }
        
        go(2,3);
    }
}