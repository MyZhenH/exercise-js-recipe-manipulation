// ******** Exercises in DOM manipulation Part 2 ************

//1. The logo text of the site has the wrong color. Change it to the correct one.

const logoColor = document.querySelector(".logo-text");
logoColor.style.color = "black";

//2. The alignment of the elements inside the header element are wrong. Change it to the correct one.

const header = document.querySelector("header")
header.style.justifyContent = "flex-start";

//3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.

// const header = document.querySelector("header") //Redan definierad
header.style.borderBottomColor = "lightgray";

//4. The recipe name is wrong, change it to the correct one.

const recipeName = document.querySelector("#recipe-name");
recipeName.textContent = "Frozen Cheescake" //Alternativ 1
const changeName = recipeName.textContent; //Alternativ 2 - mellanlagring
recipeName.textContent = "Frozen Cheescake"

//5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
const clock = document.querySelector(".time-container span")
clock.classList.add("material-icons");

//6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.

const time = document.querySelector(".time");
time.textContent = "60+ min"; //Alternativ 1
const changeTime = time.innerText; //Alternativ 2
time.innerText = "60+ min";


//7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.

const img = document.querySelector(".image-container img");
img.src = "assets/frozen-cheesecake-slice.jpg";

//8. The background color of the ingredients list container is wrong. Fix it.

const ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "#f9f9f9";


//9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.

const ingredientsListBottom = document.querySelector(".ingredients-list-bottom");

const removePTag = document.querySelector(".ingredients-list-bottom p");
removePTag.remove("p"); //Remove the wrong text

const addDigistivekex = document.createElement("li"); //Lägga till Digistivekex
ingredientsListBottom.appendChild(addDigistivekex);
addDigistivekex.innerText = "15st digistivekex";

const addButter = document.createElement("li"); //Lägga till smör
ingredientsListBottom.appendChild(addButter);
addButter.innerText = "Lite smör";


//10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.

const paste = document.querySelector(".ingredients-list-paste")

const theThirdIngredient = paste.children[2];
theThirdIngredient.textContent = "3tsk vaniljsocker"; //Alternativ 1
const changeIngredient = theThirdIngredient.textContent; //Alternativ 2
theThirdIngredient.textContent = "3tsk vaniljsocker"


//11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.

// const paste = document.querySelector(".ingredients-list-paste") //Redan definierad
const addList = document.createElement("li")
paste.appendChild(addList);

addList.textContent = "400g naturell philadelphiaost" //Alternativ 1
const addPhiladelphiaost = addList.textContent; //Alternativ 2
addList.textContent = "400g naturell philadelphiaost" 


//12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

const classInstructionsShadow = document.querySelector(".instructions-container h3");
classInstructionsShadow.style.boxShadow = "0 0 0 0";

//FRÅGA! - //Varför funkar inte denna alternativen ?????
// const classInstructionsShadow = document. querySelector(".instructions shadow"); 
// classInstructionsShadow.style.boxShadow = "0 0 0 0";


//13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

const instructionsList = document.querySelector(".instructions-list");

const changeTextOnList2 = instructionsList.children[1];
changeTextOnList2.textContent = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."

const changeTextOnList9 = instructionsList.children[8];
changeTextOnList9.textContent = "Ställ in i frysen över natten."



