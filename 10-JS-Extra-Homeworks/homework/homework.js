// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = []

  for (var a in objeto) {
      array.push([a, objeto[a]])
  }

  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var result = {}

  for (var i = 0; i < string.length; i++) {
   if (result[string[i]] === undefined) {
       result[string[i]] = 1
   } else {
       result[string[i]] ++
   }
  }
 
 return result
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  newS = ""
  var CapsSoFar = 0
  for (var i = 0; i <s.length; i++) {
      if (s[i].toUpperCase() !== s[i]) {
          newS += s[i]
      } else {
          newS = newS.slice(0, CapsSoFar) + s[i] + newS.slice(CapsSoFar)
          CapsSoFar ++
      }
  }

  return newS
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var words = [""]
  var position = 0
  var newWords = []

  function reverse(string) {
      var revWord = ""
      for (i = string.length - 1; i >= 0; i--) {
          revWord += string[i]
      }
      return revWord
  }

  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      position++
      words[position] = ""
    } else {
      words[position] += str[i]
    }
  }

  newWords = words.map(reverse)

  var revString = newWords[0]

  for (i = 1; i < newWords.length; i++) {
  revString += (" " + newWords[i])
  }

  return revString
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numString = numero.toString()
  
  var reverse = ""

  for (i = numString.length - 1; i >= 0; i--) {
    reverse += numString[i]
  }

  if (reverse === numString) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var newString = ""

  for (i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      newString += cadena[i]
    } else {
      continue
    }
  }

  return newString
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var newArr = []
  var originalLen = arr.length


  for (j = 0; j < originalLen; j++) {

    var len = Infinity
    var posToSplice = undefined

    for (i = 0; i < arr.length; i ++)
      if (arr[i].length < len) {
        len = arr[i].length
        posToSplice = i
      }
    
    newArr.push(arr[posToSplice])
    arr.splice(posToSplice, 1)
    }

  return newArr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var resultArr = []

  for (i = 0; i < arreglo1.length; i++) {
    var checkval = arreglo1[i]

    for (j = 0; j < arreglo2.length; j++) {
      if (checkval === arreglo2[j]) {
        resultArr.push(checkval)
      }
    }
  }

  return resultArr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

