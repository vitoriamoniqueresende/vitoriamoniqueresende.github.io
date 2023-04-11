


function clickAction(){
    const image = document.querySelector("#image-input")
    const description = document.querySelector("#txtArea")
    const bandName = document.querySelector("#insert-band")
    const mail = document.querySelector("#insert-mail")

    const output = document.querySelector("#output")
    let imagesArray = []
    const file = image.files
    imagesArray.push(file[0])
    
    let outputContent = ""
    outputContent += "<h1>" + bandName.value + "</h1><br>"
    outputContent += "<p>" + description.value + "</p>"
    imagesArray.forEach((image, index) => {

        outputContent += `<div class="image">
                  <img src="${URL.createObjectURL(image)}" alt="image">
                  <span onclick="deleteImage(${index})">&times;</span>
                </div>`
    })

    output.innerHTML = outputContent

    window.alert('enviado para '+ mail.value)
  }





    