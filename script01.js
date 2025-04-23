function generateNumber(){
   
    const min = Math.ceil(document.querySelector(".first-input").value)
    const max = Math.floor(document.querySelector(".second-input").value)

    if(min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.")
    } else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min
        alert(`O número gerado foi: ${result}`)
    }
}
