function generateNumber(){
   
    const min = Math.ceil(document.querySelector(".first-input").value)
    const max = Math.floor(document.querySelector(".second-input").value)

    const result = Math.floor(Math.random() * (max - min) + min);
    
    alert(`O número gerado foi: ${result}`)
}
