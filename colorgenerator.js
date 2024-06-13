//color codes are written in hexadecimal values

const getcolor = () => {
const randomnumber = Math.floor (Math.random() * 1677215)
console.log(randomnumber)
const randomcode = "#" + randomnumber.toString(16)
console.log(randomcode)

document.body.style.background = randomcode

document.getElementById("colorcode").innerText = randomcode

}

document.getElementById("btn").addEventListener("click" ,
    getcolor
)