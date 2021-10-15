function checkAge(age)
{
    return (age > 18) || confirm('Родители разрешили?');
}
function checkAge1(age)
{
    return (age > 18) ? true : confirm('Родители разрешили?');
}
function min(a, b)
{
    if (a > b)
    {
        return b;
    }
    else
    {
        return a;
    }
}
function pow(x, n)
{
    return x ** n;
}
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}