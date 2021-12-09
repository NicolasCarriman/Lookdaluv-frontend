var semanas = [[ 0, 1.5],
               [1.5, 2.6], 
               [2.6, 3.0], 
               [4.2, 4], 
               [7.2, 3.2], 
               [3.2, 0], 
               [1.1, 2.5], //6
               [2.5, 3.8], 
               [3.8, 9.9], 
               [3.9, 1], //9
               [1, 2], 
               [2, 0.5], 
               [0.5, 2.5], 
               [2.5, 3.5], 
               [3.5, 3.2], 
               [2, 5.5]];

var semana_num = 0;
var altura_total = 0;

for (let semana of semanas){

    var inicio = semana[0];
    var final = semana[1];
    var linea = document.getElementById(`line_${semana_num}`);
    var punto = document.getElementById(`point_${semana_num}`);
    var left = linea.style.left + (12 * semana_num);
    var left2= punto.style.left + (12 * semana_num);
    linea.style.left = `${left}vh`;
    var opuesto = inicio - final;
    var hipotenusa = Math.sqrt(12**2 + (opuesto**2));
    var adyacente = Math.sqrt(hipotenusa**2 + opuesto**2);
    var resultP= adyacente + left2
    var angulo = toDegrees(Math.asin((opuesto / hipotenusa)));
    linea.style.transform = `rotate(${angulo+0.00001}deg)`;
    linea.style.width = `${hipotenusa}vh`;
    punto.style.left = `${left2}vh`;

    if (semana_num == 0){
        var altura = 0;
        altura_total += (opuesto / 2);
    } else {
        linea.style.top = `${22 + altura_total + (opuesto / 2)}vh`;  
        altura_total += opuesto;    
    }
    if (semana_num !== semanas.length && semana_num !== 0 ) {
        if (semanas[semana_num][1] - semanas[semana_num][0] > 0 ){
            var resta = Math.abs(semanas[semana_num][1] - semanas[semana_num][0]) ;
            punto.style.top = `${(22 + altura_total ) - resta }vh`;

        } if (semanas[semana_num][0] - semanas[semana_num][1] > 0){

            resta = Math.abs(semanas[semana_num][0] - semanas[semana_num][1]) ;     
            punto.style.top = `${21.8 + altura_total - resta }vh`; 

        } else if (semanas[semana_num][0] < semanas[semana_num][1] ){
            resta2 = Math.abs(semanas[semana_num][0] - semanas[semana_num][1]) ;
            punto.style.top = `${21.8 + altura_total + resta2  }vh`; 

        } else {
            punto.style.top = `${21.8 + altura_total }vh`;
        }
    } 

    semana_num ++ ;
};

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}