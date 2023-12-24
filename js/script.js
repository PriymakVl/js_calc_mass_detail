const tableBody = document.querySelector('.table tbody');
const circleDiamSelect = document.querySelector('#circle-diameter');
const circleLengthInput = document.querySelector('#circle-length');
const calcBtn = document.querySelector('#calc');
let metalDensity = 7850;
const circleDiameters = [5,6,6.3,6.5,6.8,7,7.1,8,9,9.5,10,11,12,13,14,15,16,17,18,18.5,19,20,21,22,23,24,25,26,26.7,27,28,30,32,33,34,35,36,37,38,40,42,43,45,47,48,50,52,53,54,55,56,58,60,62,63,65,67,68,70,75,80,85,87,90,95,97,100,105,110,112,115,120,123,124,125,130,140,145,150,155,165,170,173,175,180,185,190,195,197,200,210,220,230,240,250,255,260,265,270,280,290,300,310,320,330,340,350,400,450,480,500];

createSelectCircleDiametr();

calcBtn.addEventListener('click', () => {
    tableBody.innerHTML = '';
    let diameter = circleDiamSelect.value;
    let length = circleLengthInput.value;
    if (!diameter) return alert('Не выбран диаметр');
    if (!length) return alert('Не выбрана длина');
    createTable(diameter, length);
})

function createSelectCircleDiametr() {
    circleDiamSelect.innerHTML = '<option value="">Не выбран</option>';
    circleDiameters.forEach(val => circleDiamSelect.innerHTML += `<option value='${val}'>${val}</option>`);
}

function calcVolumeCircle(diametr, length) {
    return Math.PI * Math.pow((diametr / 2), 2) * length;
}

function calcMass(volume, density) {
    let mass = volume * density / 1000000000;
    return mass.toFixed(6);
}

function createTable(diameter, length) {
    let volume = calcVolumeCircle(diameter, length);
    let mass = calcMass(volume, metalDensity);
    let norm = (mass * 1.04).toFixed(6);
    volume = volume.toFixed(3);
    tableBody. innerHTML = '<tr>';
    let str = `<td>${length}</td><td>${volume}</td><td>${mass}</td><td>${norm}</td>`;
    tableBody.innerHTML += str + '</tr>';
}


