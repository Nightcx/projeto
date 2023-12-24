function toggleMode() {

  const html = document.documentElement
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  }

  else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Mayk Brito com uma barba sorrindo usando um óculos escuro e um casaco preto"
    )
  } 

  else {
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute( "alt", "Mayk Brito com uma barba sorrindo usando um óculos e uma camisa preta"
      )
    }

}

