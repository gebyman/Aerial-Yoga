const card = document.querySelector('.card');
const touch = document.querySelector('.touch')
let cardNoExpanded = false;

card.addEventListener('click',function(e){
    
    if(cardNoExpanded){
        card.style.width= '28%';
        card.style.transform= '1s ease-in';
        touch.classList.remove('hidden')    
    }else{
    card.style.width= '95%';
    card.style.transform= '1s ease-in';
    touch.classList.add('hidden')  
    }

    cardNoExpanded=!cardNoExpanded
})
