

let div = document.querySelector('div')
let p = document.querySelector("p")


const array = ["orange", "green", "blue", "white", "black", 'purple' , 'apple' , 'mango' , 'peach' , 'pineaple' , 'grapes' , 'anar' , 'nashpati'];

 for (let i = 0; i < array.length; i++) {
   div.innerHTML += `<button onclick='printing(${i})'>${array[i]}</button>`

    }
function printing(i) {
p.innerHTML += `${array[i]} , `
    
}   













