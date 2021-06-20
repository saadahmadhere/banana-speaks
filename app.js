var translateButton = document.querySelector("#btn-translate")
var textInput = document.querySelector("[autofocus]")
var outputBox = document.querySelector(".output-div")

var url = "https://api.funtranslations.com/translate/minion.json"

function testURL(text){
    return (url + "?text=" + text);
}

function errorHandler(error){
    console.log(`${error} type of error occured.`)
}

translateButton.addEventListener('click', () => {
    var text = textInput.value
    fetch(testURL(text))
    .then(response => response.json())
    .then(data => {outputBox.innerHTML = data.contents.translated;})
})    


