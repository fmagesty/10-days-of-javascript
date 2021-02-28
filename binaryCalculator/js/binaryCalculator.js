// Click on '0' 
document.getElementById('btn0').onclick = function() {
    document.getElementById('res').innerHTML += 0;
}
// Click on '1'
document.getElementById('btn1').onclick = function() {
    document.getElementById('res').innerHTML += 1;
}
// Click on 'Clr'
document.getElementById('btnClr').onclick = function() {
    document.getElementById('res').innerHTML = '';
}
// Click on 'Sum'
document.getElementById('btnSum').onclick = function() {
    document.getElementById('res').innerHTML += '+';
}
// Click on 'Sub'
document.getElementById('btnSub').onclick = function() {
    document.getElementById('res').innerHTML += '-';
}
// Click on 'Mul'
document.getElementById('btnMul').onclick = function() {
    document.getElementById('res').innerHTML += '*';
}
// Click on 'Div'
document.getElementById('btnDiv').onclick = function() {
    document.getElementById('res').innerHTML += '/';
}
// Click on 'Eql'
document.getElementById('btnEql').onclick = function() {
    var screen = document.getElementById('res').innerHTML
    var split = screen.split(/\b/);
    var num1 = split[0];
    var op = split[1];
    var num2 = split[2];
    var result = eval(parseInt(num1, 2) + op + parseInt(num2, 2));
    document.getElementById('res').innerHTML = result.toString(2)
}