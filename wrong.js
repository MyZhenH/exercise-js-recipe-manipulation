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



//8. The background color of the ingredients list container is wrong. Fix it.


//9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.


//10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.


//11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.


//12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.


//13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.