const button = document.querySelector('#inputbutton');

button.addEventListener('click', () => {
    let salario = document.querySelector("#inputsalario").value;
    document.querySelector('#salariobruto').textContent = salario;
    document.querySelector('#inss').textContent = salario * 0.08;
    document.querySelector('#sindicato').textContent = salario * 0.05;
    document.querySelector('#salarioliquido').textContent = salario - (salario * 0.08) - (salario * 0.05);
    

})