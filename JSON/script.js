let contentElement = document.getElementById("content");

let foods = [
  {
    "title" : "Ramen",
    "image" : "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    "description" : "Ramen has always been near and dear to my heart, ever since I was a child. Nothing hits the spot like a nice, hearty bowl of spicy ramen!",
    "background_color" : "#B7E2F3"
  },
  {
    "title" : "Bubble Tea",
    "image" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E6%89%8B%E6%90%96%E9%A3%B2-1624431043.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*",
    "description" : "Bubble tea, 珍珠奶茶，my beloved. Good bubble tea always brings me back to my grandmother's apartment in Taipei. Not a food, but I'm putting it in anyways :P",
    "background_color" : "#B7E2F3"
  },
  {
    "title" : "Pizza",
    "image" : "https://yourbrooklynguide.com/wp-content/uploads/2020/12/FF-Pizza-in-Carroll-Gardens-Brooklyn.jpg",
    "description" : "In both Jersey and here in NYC, pizza is a staple food that I'd be remiss to not put on this list. A timeless classic.",
    "background_color" : "#B7E2F3"
  },
  {
    "title" : "Steak and Eggs",
    "image" : "https://healthyrecipesblogs.com/wp-content/uploads/2013/02/steak-and-eggs-featured-2021.jpg",
    "description" : "This is my go-to brunch option, as surprising as that is to many. Starting my day off with a nice medium steak and some sunny-side-up eggs always hits the spot!",
    "background_color" : "#B7E2F3"
  },
  {
    "title" : "Huevos Rancheros",
    "image" : "https://www.aspicyperspective.com/wp-content/uploads/2018/04/best-huevos-rancheros-recipe-25.jpg",
    "description" : "Ever since trying this breakfast delight in Mexico, I've always wanted to go back just to try it again.",
    "background_color" : "#B7E2F3"
  },
  {
    "title" : "Sushi",
    "image" : "https://restaurantclicks.com/wp-content/uploads/2021/12/sushi-brooklyn.jpg",
    "description" : "My favorite Japanese comfort food. What more could you ask for?",
    "background_color" : "#B7E2F3"
  },
];
for(var i = 0; i < foods.length; i++){
  createElement(foods[i]);
}
function createElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON["background_color"];
  newContentElement.classList.add('subContainer');
  let newContentTitle = document.createElement("HEADER");
  newContentTitle.innerText = incomingJSON["title"];
  newContentTitle.classList.add('title');
  newContentElement.appendChild(newContentTitle);
  let newContentImage = document.createElement("IMG");
  newContentImage.src = incomingJSON["image"];
  newContentImage.classList.add('pic');
  newContentElement.appendChild(newContentImage);
  let newContentDescription = document.createElement("Paragraph");
  newContentDescription.innerText = incomingJSON["description"];
  newContentDescription.classList.add('desc');
  newContentElement.appendChild(newContentDescription);
  contentElement.appendChild(newContentElement);
}
