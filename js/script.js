let lengthArr = [];
const tableBody = document.querySelector('.table tbody');

fillLengthArr();
createTable();

function fillLengthArr() {
    for(let i = 1; i < 10; i++) {
        lengthArr.push(i);
    }
}

function calcVolume(diametr, length) {
    return Math.PI * Math.pow((diametr / 2), 2) * length;
}

function calcMass(volume, density) {
    let mass = volume * density / 1000000000;
    return mass.toFixed(6);
}


function createTable() {
    for (let i = 0; i < lengthArr.length; i++) {
        let volume = calcVolume(10, lengthArr[i]);
        let mass = calcMass(volume, 7850);
        let norm = (mass * 1.04).toFixed(6);
        volume = volume.toFixed(3);
        tableBody. innerHTML += '<tr>';
        let str = `<td>${lengthArr[i]}</td><td>${volume}</td><td>${mass}</td><td>${norm}</td>`;
        tableBody.innerHTML += str + '</tr>';
    }
}


