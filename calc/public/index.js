function updateFormula(){
    var x = document.getElementsByName('x')[0].value; //the x that the user enter
    var y = document.getElementsByName('y')[0].value; //the y that the user enter
    var operation = document.getElementsByName('operation')[0].value; //the operation that the user enter
    var operationText = document.getElementsByTagName('option')[operation].innerText;
    document.getElementById('formula').innerText = `${x} ${operationText} ${y} = ?`
}
// a function that update the formula when the user enter a input
for (var i = 0; i < document.forms[0].elements.length; i++) {
    const element = document.forms[0].elements[i]
    element.onchange = updateFormula
}