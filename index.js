// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    changeText()
})

function changeText() {
    let newText = document.getElementById("text")
    newText.textContent = 'This is really cool!'
}