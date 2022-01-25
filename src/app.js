// * Exercices 2

const dataset1 = [1, 10, 20, 14, 1450, 10, 24, 12, 11, 9];
//ejercicio 1
function Ordenar(myArr) {
  for (let a = 0; a <= myArr.length - 1; a++) {
    for (let b = 0; b <= myArr.length - 2; b++) {
      if (myArr[b] > myArr[b + 1]) {
        temp = myArr[b];
        myArr[b] = myArr[b + 1];
        myArr[b + 1] = temp;
      }
    }
  }
  return myArr;
}
console.log(Ordenar(dataset1));
//Ejercicio 2
const dataset2 = [
  ["papa", "mama", "perro"],
  [[["gato"]], "social"],
  ["envidia"],
  [[[[["gato"]]]]]
];
//Convierto el array en un array de strings
const dataset2join = dataset2.join("").split(",");
//Función contar las letras del array.
function contarLetras(letras) {
  var objeto = {};
  for (var i in letras) {
    for (var j in letras[i]) {
      objeto[letras[i][j]] = (objeto[letras[i][j]] || 0) + 1;
    }
  }
  return objeto;
}
console.log(contarLetras(dataset2join));
//Ejercicio 3
const suma = array => array.reduce((a, b) => a + b, 0);
console.log(suma(dataset1));
//Ejercicio 4
const matrix1 = [
  [1, 10, 10],
  [2, 10, 20],
  [3, 3, 4]
];
const matrix2 = [
  [1, 20, 11],
  [9, 8, 7],
  [1, 1, 1, 3, 4]
];
const compMatrix = matrix => {
  let x = matrix.length;
  for (var i in matrix) {
  }
  let y = matrix[i].length;
  if (y === x) {
    return true;
  } else {
    return false;
  }
};
console.log(compMatrix(matrix1));
console.log(compMatrix(matrix2));
//Ejercicio 5

function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point2 = (point1, point2) =>
  new Point(point2.x - point1.x, point2.y - point1.y);

const P1 = new Point(1, 2);
const P2 = new Point(9, 7);
console.log(Point2(P1, P2));
/*
 1. Crea una funcion que ordene de > o < el dataset 1.
 2. Crea una funcion que cuente las letras en el dataset 2 (Debes usar un objeto)
 3. Crea una funcion que calcule la suma de todos los elementos del dataset1
 4. Crea una funcion que compruebe si una matriz es cuadrrada (m*n) siendo m = n (Usa matrix 1 y 2 para testear)
 5. Crea una funcion que calcule la distancia entre dos puntos definidos por Point2
*/
