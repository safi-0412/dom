// const newImg = document.createElement("img");
// const newTeg = document.createElement("width")
// const newH = document.createElement("height")
// newImg.src = "https://t4.ftcdn.net/jpg/05/59/91/77/360_F_559917754_dPi14NuRWEofju2XA0Jz07kSITgjYYJm.jpg";
// newTeg.width = "100"
// newH.height = "100"
// document.body.append(newImg, newTeg)


// const ism =  prompt("Enter your name")
// const yosh = +prompt("Enter your age")
// const username = prompt("Enter your username")
// const newTeg = document.createElement("h1")
// const newYosh = document.createElement("h1")
// const newUsername = document.createElement("h1")
// newTeg.textContent = ism
// newYosh.textContent = yosh
// newUsername.textContent = username
// document.body.append(newTeg, newYosh, newUsername)

// const bir = +prompt("Birinchi raqami yozing")
// const ikki = +prompt("Ikkinchi raqami yozing")
// const newTeg = document.createElement("h1")
// newTeg.textContent = bir + ikki
// document.body.append(newTeg)

// const num1 = +prompt("Birinchi sonni kriting")
// const num2 = +prompt("Ikkinchi sonni kriting")
// const operation = +prompt("1) + \n 2) - \n 3) * \n 4) /")
// if(operation == 1){
//     console.log(num1 + num2);
// }else if(operation == 2){
//     console.log(num1 - num2);
// }else if(operation == 3){
//     console.log(num1 * num2);
// }else if(operation == 4){
//     console.log(num1 / num2);
// } else {
//     console.log("Iltimosan 1 va 4 orqaga bir sonni kriting!");
// }
// const newTeg = document.createElement("h1")
// newTeg.textContent = ()
// document.body.append(newIsm, newTeg)

// const userName = prompt("Enter your name");
// const userAge = +prompt("Enter your age");
// const userSername = prompt("Enter your username");

// const object = {
//     name:userName,
//     age: userAge,
//     username: userSername,
// }

// const newTeg = document.createElement("h1");
// newTeg.textContent = object.name;
// const newAge = document.createElement("h1");
// newAge.textContent = object.age;
// const newName = document.createElement("h1");
// newName.textContent = object.username;
// document.body.append(newTeg, newAge, newName);


// const userName = prompt("Enter your name");
// const userAge = +prompt("Enter your age");
// const userSername = prompt("Enter your username");

// const object = {
//     name: userName,
//     age: userAge,
//     username: userSername,
// }

// const newTeg = document.createElement("h1");
// newTeg.textContent = object.name;
// const newAge = document.createElement("h1");
// newAge.textContent = object.age;
// const newName = document.createElement("h1");
// newName.textContent = object.username;
// document.body.append(newTeg, newAge, newName);

// Спросим у пользователя данные
const name = prompt("Введите ваше имя:");
const surname = prompt("Введите вашу фамилию:");
const age = prompt("Введите ваш возраст:");

// Создаем контейнер для отображения результата
const outputBox = document.createElement("div");
outputBox.className = "output-box";

// Заполняем контейнер данными
outputBox.innerHTML = `
  <p>1. Ism: ${name}</p>
  <p>2. Familiya: ${surname}</p>
  <p>3. Yosh: ${age}</p>
`;

// Добавляем контейнер на страницу
document.body.appendChild(outputBox);
