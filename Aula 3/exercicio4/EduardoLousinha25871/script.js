addImage = () => {
    const imageContainer = document.getElementById("imageContainer")
    const img = document.createElement("img")

    img.src = "https://placeimg.com/250/150/" + imageContainer.children.length

    imageContainer.appendChild(img)

    updateCounter()
}

removeImage = () => {
    const imageContainer = document.getElementById("imageContainer")
    const randomNumber = (Math.floor(Math.random() * (imageContainer.children.length)));
    imageContainer.children[randomNumber].remove()

    updateCounter()
}

updateCounter = () => {
    const span = document.getElementById("contador")
    span.innerText = imageContainer.children.length.toString()
}
