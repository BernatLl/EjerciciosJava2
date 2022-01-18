// * Exercices 2

const dataset1 = [1, 10, 20, 14, 1450, 10, 24, 12, 11, 9];
//ejercicio 1

const dataset2 = [
  ["papa", "mama", "perro"],
  [[["gato"]], "social"],
  ["envidia"],
  [[[[["gato"]]]]]
];
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

function Point(x, y) {
  this.x = x;
  this.y = y;
}

const examplePoint1 = new Point(1, 2);
const examplePoint2 = new Point(9, 7);

/*
 1. Crea una funcion que ordene de > o < el dataset 1.
 2. Crea una funcion que cuente las letras en el dataset 2 (Debes usar un objeto)
 3. Crea una funcion que calcule la suma de todos los elementos del dataset1
 4. Crea una funcion que compruebe si una matriz es cuadrrada (m*n) siendo m = n (Usa matrix 1 y 2 para testear)
 5. Crea una funcion que calcule la distancia entre dos puntos definidos por Point2
*/
