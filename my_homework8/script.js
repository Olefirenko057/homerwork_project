// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.



// const div = document.querySelector(".numbers")
// for(let i = 100; i >= 50; i-=10) {
//     div.innerHTML += `<p>${i}</p`
// } 



// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const div = document.querySelector(".strings__container")
// const strings = ["table", "chair", "shelf", "lamp"]
// for(let i = 0; i < strings.length; i++) {
//     div.innerHTML += `<p>${strings[i]}</p>`
// }




// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users_list = [
    {
        first_name: "Jose",
        last_name: "Hernandez",
        age: 21
    },
    {
        first_name: "Paulo",
        last_name: "Mayer",
        age: 16
    },
    {
        first_name: "Adam",
        last_name: "Olic",
        age: 30
    },
    {
        first_name: "Stefania",
        last_name: "Gomez",
        age: 17
    }
]

const div = document.querySelector(".users__container")
for(let i = 0; i < users_list.length; i++) {
    if(users_list[i].age >= 18) {
        div.innerHTML += `
        <div class="user">
        <h4 class="user_name">${users_list[i].first_name}</h4>
        <h5 class="user_surname">${users_list[i].last_name}</h5>
        <p class="user_age">${users_list[i].age}</p>
        `
    }
}