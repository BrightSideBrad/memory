var arrOfImages= ["csharplogo.png", "csslogo.png", "htmllogo.png", "javalogo.png", "jslogo.png", "pythonlogo.png"];

function doubleImage(arr){
	for(var i = arr.length - 1; i>=0; i--){
		arr.push(arr[i]);
	}
	return arr;
}
console.log(doubleImage(arrOfImages));

function displayCards(arr){
	var container = document.getElementById("container");

	for(var i = 0; i < arr.length; i++){
		var newImgElement = document.createElement("img");
		newImgElement.src="static/images/" + arr[i];
		newImgElement.id = i;
		newImgElement.className = "card";

		container.appendChild(newImgElement);
	}
}


function shuffleCards(arr){
	for(var i = 0; i < arr.length; i++){
		var idx1 = Math.floor(Math.random()*arr.length);
		var idx2 = Math.floor(Math.random()*arr.length);


		var temp = arr[idx1];
		arr[idx1] = arr[idx2];
		arr[idx2] = temp;
	}
	return arr;
}
shuffleCards(arrOfImages);
displayCards(arrOfImages);

function hideACard(idx){
	var specificCard = document.getElementById(idx);
	specificCard.src = "static/images/questionmark.png";
}
for(var i = 0; i < arrOfImages.length; i++){
	hideACard(i);
}
function revealCard(event){
	var clickedImageId = event.target.id;

	var clickedImage = document.getElementById(clickedImageId);

	clickedImage.src = "static/images/" + arrOfImages[clickedImageId];
}
var cards = document.getElementsByClassName("card");
for(var i = 0; i < cards.length; i++){
	cards[i].addEventListener("click",revealCard);
}
var cardsPicked = [];    // outside the function, we'll keep track of which cards have been picked
function revealCard(event) {
    var clickedImageId = event.target.id;
        
    var clickedImage = document.getElementById(clickedImageId); 
    clickedImage.src = "static/images/" + arrOfImages[clickedImageId];
    
    // add the clicked image to our array
    cardsPicked.push(clickedImageId);
    
    // if 2 cards have been picked
    if (cardsPicked.length == 2) {
        // if the 2 selected images are the same
        if (arrOfImages[cardsPicked[0]] == arrOfImages[cardsPicked[1]]) {
            // resets the cards picked
            cardsPicked = [];
        } else {
            // make a function that will flip the cards back over
            var hidePickedCards = function() {
                hideACard(cardsPicked[0]);    // remember this function from earlier?
                hideACard(cardsPicked[1]);
                cardsPicked = [];
            }
            window.setTimeout(hidePickedCards, 1000);
        }
    }
}
