/*************************************************
 *     CALCULATRICE
 * ------------------------------------
 * @author MELISSA KOUADIO <angemelisk@gmail.com>
 * @link <https://github.com/DiamondArt>
 * 
 * ***********************************************/
let display = document.getElementById('display');
let equation = "";


/*******************************************************************
 * @function screenNumber
 * @param string
 * @description: print typing value in screen.
 **********************************************************************/
function screenNumber(num) {
    equation += num;
    display.textContent = equation;
}

/*******************************************************************
 * @function screenOperator
 * @param string
 * @description: print typing value in screen.
 **********************************************************************/
function screenOperator(op) {
    equation += op;
    display.textContent = equation;
}

/*******************************************************************
 * @function equal
 * @description: print calcul result
 **********************************************************************/
function equal() {
    let result = eval(equation);
    display.textContent = result;
    equation ="";
}

/*******************************************************************
 * @function reset
 * @description: clean screen
 **********************************************************************/
function reset() {
    equation = "";
    display.textContent = "0";
}
