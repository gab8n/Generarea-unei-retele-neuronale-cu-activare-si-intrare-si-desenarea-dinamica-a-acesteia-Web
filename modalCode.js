let modalBtn = document.getElementById("creareReteaNeuronalaButton")
let modal = document.querySelector(".modal")
let closeBtn = document.getElementById("modalCloseButton")

let modalBtnLayer0 = document.getElementById("Layer0Button")
let modalLayer0 = document.querySelector(".modalLayer0")
let closeBtnLayer0 = document.getElementById("modalCloseButtonLayer0")
let confirmLayer0InfoButton = document.getElementById("confirmLayer0InfoButton")

let modalBtnLayer1 = document.getElementById("Layer1Button")
let modalLayer1 = document.querySelector(".modalLayer1")
let closeBtnLayer1 = document.getElementById("modalCloseButtonLayer1")
let confirmLayer1InfoButton = document.getElementById("confirmLayer1InfoButton")

let modalBtnLayer2 = document.getElementById("Layer2Button")
let modalLayer2 = document.querySelector(".modalLayer2")
let closeBtnLayer2 = document.getElementById("modalCloseButtonLayer2")
let confirmLayer2InfoButton = document.getElementById("confirmLayer2InfoButton")

let modalBtnOutput = document.getElementById("OutputButton")
let modalOutput = document.querySelector(".modalOutput")
let closeBtnOutput = document.getElementById("modalCloseButtonOutput")
let confirmOutputInfoButton = document.getElementById("confirmOutputInfoButton");






modalBtn.onclick = function(){
  
  if(verifyCreatedNetwork == true)
  {
    window.location.reload();
  }
  modal.style.display = "block"
  
  
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}

modalBtnLayer0.onclick = function(){
  
  modalLayer0.style.display = "block"
  
  
}
closeBtnLayer0.onclick = function(){
  modalLayer0.style.display = "none"
}

modalBtnLayer1.onclick = function(){
  modalLayer1.style.display = "block"
}
closeBtnLayer1.onclick = function(){
  modalLayer1.style.display = "none"
}

modalBtnLayer2.onclick = function(){
  modalLayer2.style.display = "block"
}
closeBtnLayer2.onclick = function(){
  modalLayer2.style.display = "none"
}
modalBtnOutput.onclick = function(){
  
  

  modalOutput.style.display = "block";
}
closeBtnOutput.onclick = function(){
  modalOutput.style.display = "none"
}

confirmOutputInfoButton.onclick = function(){
  StartWork();
  modalOutput.style.display = "none";

}
confirmLayer2InfoButton.onclick = function()
{
  StartWork();
  modalLayer2.style.display = "none"

  
}
confirmLayer1InfoButton.onclick = function()
{
  StartWork();
  modalLayer1.style.display = "none"

  
}
confirmLayer0InfoButton.onclick = function()
{
  StartWork();
  modalLayer0.style.display = "none"
  
}


window.onclick = function(e){
  if(e.target == modal || e.target == modalLayer0 || e.target == modalLayer1 || e.target == modalLayer2 || e.target == modalOutput ){
    modal.style.display = "none"
    modalLayer0.style.display = "none"
    modalLayer1.style.display = "none"
    modalLayer2.style.display = "none"
    modalOutput.style.display = "none"
    
  }
}


