
for (let i = 1; i <= 100; i++) {
    let myDiv = document.createElement('div')
    myDiv.className = "item"
    document.getElementById('snakeField').appendChild(myDiv)
}

let list = document.getElementsByClassName('item')
// console.log(list)

for (let i = 0; i < 100; i++) {
    list[i].addEventListener('mouseover', (event) => {
        // console.log(event)
        event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

        setTimeout(function () {
            event.target.style.backgroundColor = 'lightblue'
        }, 1000)
    })
}



