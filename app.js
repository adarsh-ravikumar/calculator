let equation = ""
let display = document.querySelector(".result")

function deleteCharacter()
{
    let afterDelete = equation.slice(0, -1)
    equation = afterDelete
    display.innerHTML = equation
}

function clearEquation()
{
    equation = ""    
    display.innerHTML = equation
}

function showResult()
{
    equation = eval(equation)
    display.innerHTML = equation
    equation = ""
}

function addToEquation(char)
{
    let len = 0

    if(len <= 10)
    {
        equation += char 
        display.innerHTML = equation
        len += 1
        console.log(len)
    }
}
