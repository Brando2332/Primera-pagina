// let myvariable = 78

// let tipoNumero = 45
// let tipoCadena = "45"
// let tipoBooblean = true

// let tipoIndefinido = undefined
// let tipoVacio = null 

// let tipoLista = [
//     50,
//     13,
//     21,
//     23,
//     45,
//     "Leonardo",
//     "Miguel",
//     "Jose",
// ]
// let tipoObjeto = {
//     name: "brando",
//     email:"brando@gmail.com",
//     pass:"1234"
// }




// let variable1 = 5 
// let variable2 = undefined
// let variable3 = 8
// let variable4 = 2
// let variable5 = false
// let variable6 = 0 

//if(0+0) {console.log("se cumple")
// else console.log("no se cumple") 

// true ?
//     console.log("se cumple")
//     : console.log("no se cumple")

// console.log(
// 4 < 6 ? "se comple" : "no se cumple"
// )

// function myfuncion () {
//     console.log("*********")
//     console.log("*Bienvenido*")
//     console.log("*Usuario*")
//     console.log("*********")
// }

// myfuncion()
// myfuncion()
// myfuncion()
// myfuncion()

// function myfuncion () {
//     let resultado = 6 % 2
//     return = resultado{} 
// }
// console.log( myfuncion() )

// function myfuncion (num1, num2, validacion) {

// return validacion
//     ? num1 + num2
//     : num1 - num2
// }

// console.log( myfuncion(3, 8, true)) 

// function isPar (num) {
//     if (num % 2 == 0) return "Par"
//     else return "Impar"

    // return num % 2 ? "Impar" : "Par"
// }

// console.log( isPar(3))

// let isParflecha = (num) => num % 2 ?
// "impar" : "par"
// console.log( isParflecha(23))

// let allback = () => {
//     console.log("Se ejecuto el callback")
// }
// setTimeout( callback , 5000 )


axios.get("https://leonardoapi.onrender.com/music")
    .then((res) => {
        console.log(res.data)
    })