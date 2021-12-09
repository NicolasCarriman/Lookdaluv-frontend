var semanas = [[1, 80], [80, 80], [80, 125], [125, 130], [130, 100], [100, 100], [100, 140], [140, 200], [200, 200], [200, 80], [80, 125], [125, 130], [130, 140], [140, 160], [160, 140], [140, 200]];

var semana_num = 0;
var altura_total = 0;

for (let semana of semanas){
    var inicio = semana[0];
    var final = semana[1];
    var linea = document.getElementById(`line_${semana_num}`);
    var left = linea.style.left + (190 * semana_num);
    linea.style.left = `${left}px`;

    var opuesto = inicio - final;

    var hipotenusa = Math.sqrt(190**2 + (opuesto**2));

    var angulo = toDegrees(Math.asin((opuesto / hipotenusa)));

    linea.style.transform = `rotate(${angulo}deg)`;
    linea.style.width = `${hipotenusa}px`;

    if (semana_num == 0){
        var altura = 0;
        altura_total += (opuesto / 2);
    } else {
        linea.style.top = `${1300 + altura_total + (opuesto / 2)}px`;
        altura_total += opuesto;
    }
    semana_num += 1;
};

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
  }