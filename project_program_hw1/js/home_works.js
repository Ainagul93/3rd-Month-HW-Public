// HW 1 - Gmail validator

const gmailInput = document.querySelector(`#gmail_input`)
const gmailButton = document.querySelector(`#gmail_button`)
const gmailResult = document.querySelector(`#gmail_result`)

const regExp = /^[A-Za-z]+@gmail.com$/

gmailButton.onclick =()=>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML=`Correct Gmail address`
        gmailResult.style.color = `green`
    }else{
        gmailResult.innerHTML=`Wrong Gmail address`
        gmailResult.style.color = `red`
    }
}

// Move Block

const childBlock =document.querySelector(`.child_block`)

let positionX = 0

const handleBlockMove = () =>{
    if(positionX<= 449){
        positionX ++
        childBlock.style.left = `${positionX}px`
        setTimeout(handleBlockMove,10)
    }
}
handleBlockMove()