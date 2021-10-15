const number = +prompt('Введите число между 0 и 3', '');
switch (number)
{
    case 0:
        alert("Вы ввелми число 0");
        break;
    case 1:
        alert("Вы ввел число 1");
        break;
    case 2:
    case 3:
        alert("Вы ввели число 2, а может и 3");
}