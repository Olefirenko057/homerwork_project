// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function numbersDown(number1,number2) {
//     if(number1 < number2) {
//         for(let i = number2; i >= number1; i--) {
//             console.log(number2)
//         } 
//     } else {
//         for(let i = number1; number1 >= number2; number1--) {
//             console.log(number1)
//         }
//     }
// }
// numbersDown(5,2)
// numbersDown(2,5)




// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function power(num,pow) {
//     const powerNumber = Math.pow(num,pow)
//     return powerNumber
// }

// const result = power(5,2)
// console.log(result)




// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function countSum(integer) {
//     let sum = 0;
//     for(let i = 1; i <= integer; i++) {
//         sum+=i
//     }
//     console.log(sum)
// }

// countSum(8)




// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function countSum(n,m) {
//     let sumEven = 0;
//     let sumOdd = 0;
//     for(let i = n; i <= m; i++) {
//         if(i % 2 == 0) {
//             sumEven += i
//         } else {
//             sumOdd += i
//         }
//     }
//     console.log(sumEven)
//     console.log(sumOdd)
// }

// countSum(2,6)




// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'


// const directions = ["west", "north", "east", "south"]

// function showLongestString(arr) {
//     if(arr.length == 0) {
//         return null
//     }
//     let longestString = arr[0]
//     for(let i = 1; i < arr.length; i++) {
//         if(longestString.length < arr[i].length) {
//             longestString = arr[i]
//         }
//     }
//    return longestString
// }

// const longestString = showLongestString(directions)
// console.log(longestString)






