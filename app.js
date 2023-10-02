let dices=document.getElementById('dice');
let dicesound=document.getElementById('dice-audio')

function dice(){

    let randomnumber=Math.floor(Math.random()*6+1)
    dices.innerText=' '
    dicesound.play()
    dices.classList.add('roll-dice')
    setTimeout(() => {
        dices.classList.remove('roll-dice')
        dices.innerText=randomnumber
    }, 1200);
    
}