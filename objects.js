function makeUser(name, age)
{
    return {
        name,
        age
    }
}

// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {}; // синтаксис "литерал объекта"
// let user = {firstname: "John", age: 30};
// alert(user.firstname);
// alert(user.age);
// user.isAdmin = true;
// user.age = 31;
// alert(user.isAdmin);
// alert(user.age);
// user["likes birds"] = true;
// alert(user["likes birds"]);
// delete user["likes birds"];
// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {[fruit]: 5};
// alert(bag[[fruit]]);
let user = makeUser("John", 30);
alert(user.age);
