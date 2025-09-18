// // const inputIndex = document.getElementById("inputText"); //variable e ID html//
// // const valorIndex = inputIndex.value; //variable = dato // 
// // localStorage.setItem('inputText', valorIndex); //guardar dato// 

// // const datoForm = document.getElementById("inputText"); 

// const test = document.getElementById("inputText"); 
// const valorCualquiera = document.getElementById("buttonText"); 
// test.addEventListener('input', function){
//     valorCualquiera.textContent = 
// }
// console.log(localStorage.getItem("valorCualquiera")); 
// localStorage.setItem("test", "valorCualquiera");
// console.log(localStorage.getItem("test")); 

// const valorObtenido = 
// addEventListener
// // localStorage.removeItem("test");
// // console.log(localStorage.getItem("test"));

const campoTexto = document.getElementById("inputText");
const botonGuardar = document.getElementById("buttonText"); 

botonGuardar.addEventListener('click', function() {
// Paso 1: Obtener el valor del campo de texto
const valorIngresado = campoTexto.value; 
// Paso 2: Guardar ese valor en localStorage
localStorage.setItem('datito', valorIngresado); 
console.log(datito); 
});
