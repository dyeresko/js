login = prompt("Enter your login");
if (login == "Admin")
{
    password = prompt("Enter your password")
    if (password == "I'm admin")
    {
        alert("Hello!");
    }
    else if (password == null || password == "")
    {
        alert("Cancel");
    }
    else
    {
        alert("Incorrect password");
    }
}
else if (login == null || login == "")
{
    alert("Cancel");
}
else
{
    alert("I don't know you");
}