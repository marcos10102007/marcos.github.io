// Ax^2 + Bx + C = 0

let A = prompt("Digite o cooeficiente A");
A = parseFloat(A);

let B = prompt("Digite o cooeficiente B");
B = parseFloat(B);

let C = prompt("Digite o cooeficiente C");
C = parseFloat(C);

let delta = B**2 - 4 *A *C;
let x1,x2;

if(delta>=0){
    x1=-B-Math.sqrt(delta);
    x2=-B+Math.sqrt(delta);
    alert(x1);
    alert(x2);
}
else{
    alert("A raiz real não existe");
}



