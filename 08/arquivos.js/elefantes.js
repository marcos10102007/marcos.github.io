let musica = "1 elefante incomoda muita gente\n";

let numero = prompt("Digite o numero de elefantes incomodantes:");
numero=parseInt(numero);

let quantElefantes = 2;

if(numero>=1){
    while(quantElefantes<=numero){
        if(quantElefantes%2==0){
            musica += quantElefantes + " elefantes";
            let i=1;
            while (i<=quantElefantes){
                musica+= " incomodam";
                i++;
            }
            musica += " muito mais.\n";
        }
        else{
            musica += quantElefantes + " elefantes incomodam muita gente.\n";
        }
        quantElefantes++;
    }

}

alert(musica);
