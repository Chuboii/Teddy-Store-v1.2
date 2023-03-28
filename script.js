let nav = document.querySelector(".navbar")

function toggleNav(){
  nav.classList.toggle("ac")
}

let reveals = document.querySelectorAll(".reveal")

function appear(){
  for(let i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight

    let elementTop = reveals[i].getBoundingClientRect().top

    let elementVisible = 150
    
    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("bab")
      
    }
    else{
      reveals[i].classList.remove("bab")
    }
  }
}

window.addEventListener("scroll", appear)