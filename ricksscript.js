document.getElementById('container').onchange = function() {
    var phaseAMag = Number(document.getElementById('phaseAMag').value);
    var phaseAAngle = document.getElementById('phaseAAngle').value;
    var phaseBMag = phaseAMag;
    var phaseCMag = phaseAMag;
    var phaseBAngle = phaseAAngle + 120;
    var phaseCAngle = phaseAAngle - 120;


    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = "$" + tipEach.toFixed(2);
}