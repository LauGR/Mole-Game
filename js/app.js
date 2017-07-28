let cards = document.querySelectorAll('img');

function changeImage() {
    let randomLength = cards.length - 1;
    let randomIndex = Math.round(Math.random() * randomLength);
    console.log(randomIndex);
    let newTaupe = cards[randomIndex];
    newTaupe.setAttribute("src", "img/taupe.jpg");
    function ResetImage(){
    newTaupe.setAttribute("src", "img/hide.jpg");
    }
    setTimeout(ResetImage, 2500);
}

setInterval(changeImage, 3000);
