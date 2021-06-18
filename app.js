var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("[autofocus]")
var outputBox = document.querySelector(".output-div")

btnTranslate.addEventListener('click', () => {

    console.log(textInput.value)
    console.log("I was clicked")
    outputBox.innerHTML = "this is the output" + textInput.value
})