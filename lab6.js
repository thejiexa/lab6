const body = document.body;

//  1.
let input1 = document.createElement('input');
input1.type = 'button';
input1.value = "1.	Сделайте alert по нажатию на кнопку.";
input1.onclick = let = () => alert("1.	Сделайте alert по нажатию на кнопку.")
body.append(input1, document.createElement('br'));

//  2.
let input2_1 = document.createElement('input');
let input2_2 = document.createElement('input');
input2_1.type = 'button';
input2_1.value = "2.	Сделайте изменение текста в input по нажатию кнопки";
input2_1.onclick = let = () => input2_2.value = Math.floor(Math.random() * 100) + 1;
input2_2.type = 'text';
input2_2.value = Math.floor(Math.random() * 100) + 1;
body.append(input2_1, input2_2, document.createElement('br'));

//  3.
let input3_1 = document.createElement('input');
let input3_2 = document.createElement('input');
input3_1.type = 'button';
input3_1.value = "3.	Сделайте вывод содержимого input по нажатию кнопки.";
input3_1.onclick = let = () => alert(input3_2.value);
input3_2.type = 'text';
input3_2.value = "содержимое input";
body.append(input3_1, input3_2, document.createElement('br'));

//  4.
let input4_1 = document.createElement('input');
let input4_2 = document.createElement('input');
input4_1.type = 'button';
input4_1.value = "4.	 Сделайте кнопку по нажатию на нее, она выводит alert содержимое input, возведенное в квадрат.";
input4_1.onclick = let = () => alert(Math.pow(input4_2.value, 2));
input4_2.type = 'text';
input4_2.value = Math.floor(Math.random() * 10) + 4;
body.append(input4_1, input4_2, document.createElement('br'));

//  5.
let input5_1 = document.createElement('input');
let input5_2 = document.createElement('input');
let input5_3 = document.createElement('input');
input5_1.type = 'button';
input5_1.value = "5.	 Сделайте кнопку по нажатию, она осуществляет обмен содержимым между двумя input.";
input5_1.onclick = let = () => [input5_2.value, input5_3.value] = [input5_3.value, input5_2.value];
input5_2.type = 'text';
input5_2.value = Math.floor(Math.random() * 10000) + 1;
input5_3.type = 'text';
input5_3.value = Math.floor(Math.random() * 10000) + 1;
body.append(input5_1, input5_2, input5_3, document.createElement('br'));

//  6.
let input6 = document.createElement('input');
input6.type = 'button';
input6.value = "6.	Сделайте кнопку по нажатию на нее поменяется ее текст.";
input6.onclick = let = () => input6.value += "!!!!!";
body.append(input6, document.createElement('br'));

//  7.
let input7 = document.createElement('input');
input7.type = 'button';
input7.style.color = 'white'
input7.value = "7.	Сделайте кнопку по нажатию на нее, она меняет цвет текста в input, используя свойства CSS.";
input7.onclick = let = () => {
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    input7.style.color = colors[Math.floor(Math.random() * 5)];
}
body.append(input7, document.createElement('br'));

//  8.
let input8_1 = document.createElement('input');
let input8_2 = document.createElement('input');
let input8_3 = document.createElement('input');
input8_1.type = 'range';
input8_2.type = 'button';
input8_2.value = "disabled";
input8_2.onclick = let = () => input8_1.disabled = true;
input8_3.type = 'button';
input8_3.value = "enabled";
input8_3.onclick = let = () => input8_1.disabled = false;
body.append("8. Сделайте кнопки по нажатию на них, одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.", input8_1, input8_2, input8_3, document.createElement('br'));

//  9.
let input9 = document.createElement('input');
input9.type = 'button';
input9.value = "9.  Сделайте кнопку при наведении на нее появляется alert.";
input9.onmouseover = let = () => alert("9.  Сделайте кнопку при наведении на нее появляется alert.");
body.append(input9, document.createElement('br'));

//  10.
let input10 = document.createElement('input');
input10.type = 'button';
input10.value = "10.    Сделайте кнопку при двойном на нее появляется alert.";
input10.ondblclick = let = () => alert("10.    Сделайте кнопку при двойном на нее появляется alert.");
body.append(input10, document.createElement('br'));

//  11.
let input11 = document.createElement('div');
input11.textContent = "11.  Сделайте область с помощью div при наведении на нее появляется alert.";
input11.style.border = "2px dashed yellow";
input11.style.width = "600px";
input11.style.height = "30px";
input11.onmouseover = let = () => alert("11.  Сделайте область с помощью div при наведении на нее появляется alert.");
body.append(input11, document.createElement('br'));

//  12.
let input12_1 = document.createElement('input');
let input12_2 = document.createElement('img');
input12_1.type = 'button';
input12_1.value = "12.	Сделайте кнопку и картинку, при нажатии кнопки картинка меняется.";
input12_1.onclick = let = () => input12_2.src = "pics/friedchicken.png" ;
input12_2.src = "pics/chicken.png";
input12_2.style.width = "70px";
input12_2.style.height = "70px";
body.append(input12_1, input12_2, document.createElement('br'));

//  13.
//  14.

//  15.
let input15 = document.createElement('input');
input15.type = 'button';
input15.value = "15.	Сделайте кнопку, при нажатии кнопки кнопка блокируется.";
input15.onclick = let = () => input15.disabled = true;
body.append(input15, document.createElement('br'));

//  16.
let input16 = document.createElement('input');
input16.type = 'button';
input16.value = 0;
input16.style.width = "80px";
input16.onclick = let = () => input16.value++;
body.append("16.	Сделайте кнопку, при нажатии кнопка считает количество нажатий на нее.", input16, document.createElement('br'));

//  17.
let input17 = document.createElement('input');
input17.type = 'button';
input17.value = "17.	Сделайте кнопку, при нажатии курсор мышки должен измениться.";
input17.onclick = let = () => body.style.cursor = "grab";
body.append(input17, document.createElement('br'));

//  18.
let input18_1 = document.createElement('input');
let input18_2 = document.createElement('div');
input18_1.type = 'button';
input18_1.value = "18.	Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id=hide";
input18_1.onclick = let = () => document.getElementById('hide').hidden = true;
input18_2.id = "hide";
input18_2.textContent = "div id=hide";
input18_2.style.border = "2px dashed yellow";
input18_2.style.width = "600px"
input18_2.style.height = "30px";
body.append(input18_1, input18_2, document.createElement('br'));

//  19.
let input19 = document.createElement('input');
input19.type = 'button';
input19.value = "19.	Создайте кнопку, при клике на которую, она будет скрывать сама себя.";
input19.onclick = let = () => input19.hidden = true;
body.append(input19, document.createElement('br'));

//  20.
let inputs = [];
let textField = document.createElement('input');
textField.type = 'text';
textField.readOnly = true;
textField.style.width = "225px";
textField.style.height = "30px";
textField.style.backgroundColor = 'white';
textField.style.fontSize = 'large';
body.append("20.	Напишите простой калькулятор.", document.createElement('br'), textField, document.createElement('br'));
for (let i = 0; i < 19; i++){
    inputs[i] = document.createElement('input');
    inputs[i].type = 'button';
    inputs[i].style.width = "50px";
    inputs[i].style.height = "50px";
    inputs[i].style.fontSize = "larger";
    inputs[i].style.backgroundColor = 'salmon';
    inputs[i].onclick = let = () => textField.value += inputs[i].value;
    body.append(inputs[i]);
    if ((i + 1) % 4 == 0) body.append(document.createElement('br'));
}

inputs[0].value = "<";
inputs[0].onclick = let = () => textField.value = textField.value.slice(0, -1);
inputs[1].value = "(";
inputs[2].value = ")";
inputs[3].value = "+";
inputs[4].value = "9";
inputs[5].value = "8";
inputs[6].value = "7";
inputs[7].value = "-";
inputs[8].value = "4";
inputs[9].value = "5";
inputs[10].value = "6";
inputs[11].value = "*";
inputs[12].value = "1";
inputs[13].value = "2";
inputs[14].value = "3";
inputs[15].value = "/";
inputs[16].value = "C";
inputs[16].onclick = let = () => textField.value = "";
inputs[17].value = "0";
inputs[18].value = "=";
inputs[18].style.width = "110px";
inputs[18].onclick = let = () => textField.value = Poland(String(textField.value));

function Poland(inputString){

    var dics = {
        '+' : 1,
        '-' : 1,
        '*' : 2,
        '/' : 2
    };

    let numbersStack =[] ;
    let operationsStack = [];
    inputString = inputString.split(' ').join('') +'@';
    
    for (var i = 0; i < inputString.length ; i++)
    {
        if (IsItNumber(inputString[i]))
        {
            numbersStack.unshift(Number(inputString[i]));
        }
        else if (inputString[i] == '@')
        {
            while (operationsStack.length != 0)
            {
                let val0 = numbersStack.shift();
                let val1 = numbersStack.shift();
                let oper = operationsStack.shift();

                let result = DoMath(oper, val1, val0);
                numbersStack.unshift(result);
            }
        }
        else if (inputString[i] == ')')
        {
            while (operationsStack[0] != '(')
            {
                let val0 = numbersStack.shift();
                let val1 = numbersStack.shift();
                let oper = operationsStack.shift();

                let result = DoMath(oper, val1, val0);
                numbersStack.unshift(result);
            }
            operationsStack.shift();

        }
        else if (operationsStack.length == 0 || operationsStack[0] == '(' || inputString[i] == '(' || dics[inputString[i]] > dics[operationsStack[0]])
        {
            operationsStack.unshift(inputString[i]);
        }
        else if (dics[inputString[i]] <= dics[operationsStack[0]])
        {
            let val0 = numbersStack.shift();
            let val1 = numbersStack.shift();
            let oper = operationsStack.shift();

            let result = DoMath(oper, val1, val0);
            numbersStack.unshift(result);
            i--;
        }
    }//for
    return numbersStack[0];   

    function DoMath(oper, a, b)
    {
        let result = 0;
        switch (oper)
        {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                if (b == 0) alert("/0!");
                result = a / b;
                break;
            default:
                break;
        }
        return result;
    }//domath

    function IsItNumber(element)
    {
        let array = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
        let result = false;
        for (let item of array)
            if (item == element) return true;
        return result;
    }
}
