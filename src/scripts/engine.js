var emojis = []
let dificuldade = prompt('Selecione a Dificuldade [f = facil | m = medio| d = dificil | sd = super dificil]: ') 

function escolherDificuldade(dificuldade){
    if(dificuldade == 'f' || dificuldade == 'F' || dificuldade == 'facil'){
        emojis = [
            "😈",
            "😈",
            "💀",
            "💀",
            "👻",
            "👻",
            "👽",
            "👽"
        
        ]
    }else if(dificuldade == 'm' || dificuldade == 'M' || dificuldade == 'medio'){
        emojis = [
            "😈",
            "😈",
            "💀",
            "💀",
            "👻",
            "👻",
            "👽",
            "👽",
            "🤖",
            "🤖",
            "🧟‍♂️",
            "🧟‍♂️",
            "🐼",
            "🐼",
            "🤡",
            "🤡"
        
        ]
    }else if(dificuldade == 'd' || dificuldade == 'D' || dificuldade == 'dificil'){
        emojis = [
            "😈",
            "😈",
            "💀",
            "💀",
            "👻",
            "👻",
            "👽",
            "👽",
            "🤖",
            "🤖",
            "🧟‍♂️",
            "🧟‍♂️",
            "🐼",
            "🐼",
            "🤡",
            "🤡",
            "🕷️",
            "🕷️",
            "🐞",
            "🐞",
            "👹",
            "👹",
            "😡",
            "😡"
        
        ]
    }else if(dificuldade == 'sd' || dificuldade == 'SD' || dificuldade == 'super dificil'){
        emojis = [
            "😈",
            "😈",
            "💀",
            "💀",
            "👻",
            "👻",
            "👽",
            "👽",
            "🤖",
            "🤖",
            "🧟‍♂️",
            "🧟‍♂️",
            "🐼",
            "🐼",
            "🤡",
            "🤡",
            "🕷️",
            "🕷️",
            "🐞",
            "🐞",
            "👹",
            "👹",
            "😡",
            "😡",
            "🦁",
            "🦁",
            "🐮",
            "🐮",
            "🐲",
            "🐲",
            "❤️",
            "❤️"
        ]
    }else{
        emojis = [
            "😈",
            "😈",
            "💀",
            "💀",
            "👻",
            "👻",
            "👽",
            "👽",
            "🤖",
            "🤖",
            "🧟‍♂️",
            "🧟‍♂️",
            "🐼",
            "🐼",
            "🤡",
            "🤡"
        
        ]
    }
    
}

escolherDificuldade(dificuldade)


let openCards = []

let randomEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1))

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = "item"
    box.innerHTML = randomEmojis[i]
    box.onclick = handleClick
    document.querySelector('.game').appendChild(box)
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add('boxOpen')
        openCards.push(this)    
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add('boxMatch')
        openCards[1].classList.add('boxMatch')
    }else{
        openCards[0].classList.remove('boxOpen')
        openCards[1].classList.remove('boxOpen')
    }

    openCards = []

    if(document.querySelectorAll('boxMatch').length == emojis.length){
        alert('Você Venceu')
    }
}