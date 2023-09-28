let counter = 0
const counterElement = document.getElementById('counter');
const pause = document.getElementById('pause')

function updateCounter(){
    counter ++
    counterElement.textContent = counter
}
const intervalId = setInterval(updateCounter, 1000)


document.getElementById('minus').addEventListener('click', () =>{
    counter --;
    counterElement.textContent = counter;
})

document.getElementById('plus').addEventListener('click', () => {
    counter ++
    counterElement.textContent = counter
})

document.getElementById('heart').addEventListener('click', () =>{
    if (likes === undefined) {
        likes = 1
    } else{
        likes++
    }
    updateLikeCount()
    updateLikeMessage(counter)
})

function updateLikeCount(){
    const currentLikes = likes || 0;
    likesElement.textContent = currentLikes
}

function updateLikeMessage(number){
    const likes = likes|| 0;
    likesMessageElement.textContent = `number ${number} has ${likes} likes!`
}

