let numbersArray = []

function addNumberFromInput() {
    const textFromInput = document.getElementById("inputNumber").value
    if (textFromInput) {
        numbersArray.push(textFromInput)
        document.getElementById("viewerNumber").innerText = numbersArray.join(", ")
    } else {
        alert("Escreva algo no Input")
    }
}

function calculareMaxNumberFromArray() {
    const maxNumber = numbersArray.reduce( (a, b) => Math.max(a, b) )
    document.getElementById("maxNumber").innerText = maxNumber
}