// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.


const button1 = document.querySelector(".btn1")
const redSquare = document.querySelector(".red_square")

button1.addEventListener("click", function() {
   redSquare.style.backgroundColor = "green"
   redSquare.style.width = "100px"
   redSquare.style.height = "100px"
})





// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.


const button2 = document.querySelector(".btn2")
const pinkSquare = document.querySelector(".pink_square")

button2.addEventListener("click", function() {
    pinkSquare.style.backgroundColor = "blue"
    console.log(pinkSquare.style.backgroundColor)
})




// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px


const button3 = document.querySelector(".btn3")
const newSquare = document.querySelector(".new_square")
let increment = 0;

button3.addEventListener("click", function() {
    increment+=20
    newSquare.style.width = (parseInt("150px") + increment) + "px"
    newSquare.style.height = (parseInt("150px") + increment) + "px"
})




// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.


const button4 = document.querySelector(".btn4")
const divRoot = document.querySelector(".root")

button4.addEventListener("click", function() {
    divRoot.innerHTML += `<p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus accusantium consequuntur aut quo facilis numquam beatae temporibus optio. Quidem quis repudiandae illo commodi delectus ratione ex possimus earum natus!</p>`
    const paragraph = document.querySelector(".text")
    paragraph.style.backgroundColor = "blue"
})




// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const button5 = document.querySelector(".btn5")
const root2 = document.querySelector(".root2")
let isBlue = true;

button5.addEventListener("click", function() {
    const p = document.createElement("p")
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus accusantium consequuntur aut quo facilis numquam beatae temporibus optio. Quidem quis repudiandae illo commodi delectus ratione ex possimus earum natus!"

    if(isBlue) {
        p.style.backgroundColor = "blue"
    } else {
        p.style.backgroundColor = "green"
    }
    root2.appendChild(p)
    isBlue = !isBlue
})