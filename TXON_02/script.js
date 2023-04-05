let screen=document.getElementById("display");

function display(num)
{
    screen.value += num;
    expression = screen.value;
    if(num=="√")
    {
        expression = expression.slice(0,-1);
        expression += "**0.5";
    }
    else if(num=="^2")
    {
        expression = expression.slice(0,-2);
        expression +="**2";
    }
}
function calculate()
{
    try
    {
        screen.value = eval(expression);
    }
    catch(err)
    {
        alert("Invalid Expression");
    }
}
function Clear()
{
    screen.value="";
}
function del()
{
    screen.value = screen.value.slice(0,-1);
}